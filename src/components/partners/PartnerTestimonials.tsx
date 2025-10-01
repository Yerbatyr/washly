import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Алмат Назарбаев",
    position: "Владелец сети 'ChistoMax'",
    location: "Алматы",
    quote: "За 4 месяца с Washly мы увеличили выручку в 3.5 раза! Клиенты приезжают постоянно, система работает даже ночью. Лучшее решение для автомойки.",
    revenue: "+350% к выручке"
  },
  {
    name: "Дархан Касымов", 
    position: "Владелец 'AquaWash Pro'",
    location: "Нур-Султан",
    quote: "Забыл про проблемы с персоналом и пустые дни. QR-система Washly привлекла столько клиентов, что пришлось расширяться. Окупили вложения за 2 месяца!",
    revenue: "+280% к выручке"
  }
];

const PartnerTestimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Истории <span className="text-primary">успеха</span> наших партнеров
          </h2>
          <p className="text-xl text-muted-foreground">
            Реальные результаты реальных владельцев автомоек
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-2 border-primary/10 hover:border-primary/30 bg-gradient-to-br from-card to-primary/5 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 text-sm font-bold shadow-lg">
                      {testimonial.revenue}
                    </Badge>
                    <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                  </div>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-primary-foreground font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-primary text-sm font-medium">{testimonial.position}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerTestimonials;
