import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Рост выручки на 300%+",
    description: "Наши партнеры увеличивают доход в среднем на 300% в первые 6 месяцев благодаря постоянному потоку клиентов",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "10,000+ активных клиентов",
    description: "Мгновенный доступ к нашей базе из 10+ тысяч платящих клиентов без затрат на рекламу",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Оборачиваемость 24/7",
    description: "QR-система позволяет работать круглосуточно без персонала. Клиенты моются даже ночью",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Аналитика в реальном времени",
    description: "Полная статистика: сколько клиентов, в какое время, какие услуги. Управляйте данными, а не догадками",
    gradient: "from-orange-500 to-red-400"
  }
];

const PartnerBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/[0.02] to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(220,47,16,0.02)_50%,transparent_100%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Что получают наши <span className="text-primary">партнеры</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы не просто подключаем к платформе. Мы делаем вашу автомойку самой прибыльной в городе.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-2 border-primary/10 hover:border-primary/30 bg-card hover:scale-[1.02] animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 relative">
                <div className="space-y-6 relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-5 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    {benefit.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {benefit.description}
                    </p>
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

export default PartnerBenefits;
