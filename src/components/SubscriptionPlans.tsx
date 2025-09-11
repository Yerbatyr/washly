import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, X } from "lucide-react";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Разовая мойка",
      price: "2,500₸",
      period: "за мойку",
      description: "Старый дорогой способ",
      features: [
        { text: "Одна мойка", included: true },
        { text: "Очереди и ожидание", included: false },
        { text: "Переплата в 3 раза", included: false },
      ],
      buttonText: "НЕ ВЫБИРАЙТЕ ЭТО",
      buttonVariant: "outline" as const,
      popular: false,
      savings: null
    },
    {
      name: "БЕЗЛИМИТ",
      price: "15,000₸",
      originalPrice: "25,000₸",
      period: "в месяц",
      description: "ЭКОНОМЬТЕ 60,000₸ КАЖДЫЙ МЕСЯЦ",
      features: [
        { text: "БЕЗЛИМИТНЫЕ мойки", included: true },
        { text: "50+ элитных станций", included: true },
        { text: "QR без очередей", included: true },
        { text: "Гарантия возврата денег", included: true },
        { text: "Поддержка 24/7", included: true },
        { text: "Приоритетное обслуживание", included: true },
      ],
      buttonText: "ПОЛУЧИТЬ БЕЗЛИМИТ СЕЙЧАС",
      buttonVariant: "hero" as const,
      popular: true,
      savings: "60,000₸"
    },
    {
      name: "Семейный",
      price: "25,000₸",
      period: "в месяц",
      description: "До 3-х автомобилей",
      features: [
        { text: "Все из тарифа БЕЗЛИМИТ", included: true },
        { text: "До 3-х автомобилей", included: true },
        { text: "Семейная экономия", included: true },
        { text: "Управление через одно приложение", included: true },
      ],
      buttonText: "Выбрать семейный",
      buttonVariant: "outline" as const,
      popular: false,
      savings: "150,000₸"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Aggressive Pricing Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm font-bold border border-red-500 text-red-400">
            🔥 ОГРАНИЧЕННОЕ ВРЕМЯ - ЦЕНА ПОДНИМЕТСЯ ЧЕРЕЗ 7 ДНЕЙ
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
            ПРЕКРАТИТЕ переплачивать<br />
            <span className="text-primary">75,000₸+ В МЕСЯЦ</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-neutral-300 max-w-4xl mx-auto font-medium">
            Средний клиент моет машину 10+ раз в месяц = <span className="text-red-400 font-black">75,000₸</span><br />
            С нашим безлимитом = <span className="text-primary font-black">15,000₸</span><br />
            <span className="text-2xl lg:text-3xl text-primary font-black">ЭКОНОМИЯ: 720,000₸ В ГОД!</span>
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-primary shadow-primary transform scale-105 bg-gradient-to-b from-card to-primary/5' 
                  : index === 0 
                    ? 'border-red-500/30 bg-red-950/20'
                    : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-6 py-2 font-black text-sm">
                    <Crown className="w-4 h-4 mr-2" />
                    САМЫЙ ВЫГОДНЫЙ
                  </Badge>
                </div>
              )}

              {plan.savings && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-black">
                  ЭКОНОМИЯ {plan.savings}
                </div>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-black mb-4 ${
                    plan.popular ? 'text-primary' : index === 0 ? 'text-red-400' : 'text-foreground'
                  }`}>
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <div className="text-lg text-red-400 line-through font-semibold">
                        {plan.originalPrice}
                      </div>
                    )}
                    <div className={`text-5xl font-black ${
                      plan.popular ? 'text-primary' : index === 0 ? 'text-red-400' : 'text-foreground'
                    }`}>
                      {plan.price}
                    </div>
                    <div className="text-neutral-400 font-medium">{plan.period}</div>
                  </div>
                  
                  <p className={`text-sm font-bold ${
                    plan.popular ? 'text-primary' : index === 0 ? 'text-red-400' : 'text-neutral-300'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-foreground' : 'text-red-400 line-through'
                      } font-medium`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className={`w-full font-black text-lg py-6 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary animate-pulse' 
                      : index === 0
                        ? 'bg-red-950 border-red-500 text-red-400 hover:bg-red-900'
                        : ''
                  }`}
                  disabled={index === 0}
                >
                  {index === 0 && <X className="w-5 h-5 mr-2" />}
                  {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                  {plan.buttonText}
                </Button>

                {plan.popular && (
                  <p className="text-center text-sm text-primary font-bold mt-4">
                    ⚡ Активация за 60 секунд
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-black mb-4 text-primary">
              🔒 ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ 30 ДНЕЙ
            </h3>
            <p className="text-neutral-300 mb-6">
              Если не сэкономите минимум 30,000₸ в первый месяц использования - 
              вернем ВСЕ деньги без вопросов. Это наша гарантия качества.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="text-left">
                <h4 className="font-bold text-primary mb-2">✅ ЧТО ВЫ ПОЛУЧАЕТЕ:</h4>
                <ul className="space-y-1 text-neutral-300">
                  <li>• Безлимитные мойки на 50+ станциях</li>
                  <li>• QR-код без очередей</li>
                  <li>• Экономия 60,000₸+ в месяц</li>
                  <li>• Поддержка 24/7</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-red-400 mb-2">❌ БЕЗ ПОДПИСКИ:</h4>
                <ul className="space-y-1 text-neutral-400">
                  <li>• Переплата 75,000₸+ в месяц</li>
                  <li>• Очереди и потерянное время</li>
                  <li>• Нет гарантий качества</li>
                  <li>• Постоянный стресс с поиском мойки</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;