import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const PartnerCTA = () => {
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
            <Button 
              size="lg" 
              className="px-16 py-8 text-2xl font-black bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90 shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-8 h-8 mr-4" />
              ОСТАВИТЬ ЗАЯВКУ СЕЙЧАС
            </Button>
            
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
