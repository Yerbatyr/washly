import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа").max(100),
  phone: z.string().min(10, "Введите корректный номер телефона").max(20),
  email: z.string().email("Введите корректный email").max(255),
  city: z.string().min(2, "Введите название города").max(100),
  message: z.string().max(1000).optional(),
});

const PartnerCTA = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('submit-partner-lead', {
        body: {
          name: values.name,
          phone: values.phone,
          email: values.email,
          city: values.city,
          message: values.message || undefined,
        },
      });

      if (error) throw error;
      
      if (data?.error) {
        throw new Error(data.error);
      }

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      form.reset();
      setOpen(false);
    } catch (error: any) {
      const errorMessage = error.message?.includes('Too many submissions') 
        ? error.message 
        : "Не удалось отправить заявку. Попробуйте позже.";
        
      toast({
        title: "Ошибка",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-destructive via-destructive/90 to-destructive/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-destructive-foreground text-destructive px-6 py-3 rounded-full inline-block mb-8 font-black text-lg shadow-xl animate-pulse">
            ⚠️ ОГРАНИЧЕННОЕ КОЛИЧЕСТВО МЕСТ ⚠️
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight text-destructive-foreground">
            Осталось <span className="text-5xl lg:text-7xl text-yellow-400">17 МЕСТ</span><br />
            в вашем городе
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 font-bold text-destructive-foreground/90">
            Мы подключаем только лучшие мойки для эксклюзивности сети.<br />
            <span className="text-lg font-medium">Не упустите шанс стать частью самой прибыльной сети автомоек Казахстана!</span>
          </p>
          
          <div className="space-y-6">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-4 sm:px-8 md:px-16 py-3 sm:py-5 md:py-8 text-sm sm:text-lg md:text-2xl font-black bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90 shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3 md:mr-4" />
                  ОСТАВИТЬ ЗАЯВКУ СЕЙЧАС
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Заявка на партнерство</DialogTitle>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name" 
                      {...form.register("name")} 
                      placeholder="Ваше имя"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      {...form.register("phone")} 
                      placeholder="+7 (777) 123-45-67"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      {...form.register("email")} 
                      placeholder="your@email.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="city">Город</Label>
                    <Input 
                      id="city" 
                      {...form.register("city")} 
                      placeholder="Алматы"
                    />
                    {form.formState.errors.city && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.city.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Сообщение (необязательно)</Label>
                    <Textarea 
                      id="message" 
                      {...form.register("message")} 
                      placeholder="Расскажите о вашей автомойке"
                      rows={4}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            
            <div className="text-destructive-foreground/80 space-y-2 text-lg">
              <p className="font-semibold">📞 Звоните: +7 (777) 123-45-67</p>
              <p className="font-semibold">📧 Email: partners@washly.kz</p>
              <p className="font-semibold">⏰ Работаем 24/7 для партнеров</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
