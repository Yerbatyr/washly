import { Card, CardContent } from "@/components/ui/card";
import { QrCode, MapPin, Smartphone, Shield, Zap, Users } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "QR-доступ",
      description: "Динамические QR-коды, обновляющиеся каждые 60 секунд для максимальной безопасности. Просто отсканируйте и мойтесь!",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "50+ локаций",
      description: "Найдите ближайшие станции с информацией о доступности в реальном времени, маршрутами и ожидаемым временем ожидания.",
      gradient: "from-secondary to-green-400"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Мобильное приоритет",
      description: "Бесшовный опыт на iOS и Android с возможностями работы без интернета и push-уведомлениями.",
      gradient: "from-accent to-yellow-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Безопасные платежи",
      description: "Интеграция с Kaspi Pay и поддержка Stripe в качестве резерва. Ваши платёжные данные всегда защищены.",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Молниеносно быстро",
      description: "Среднее время мойки менее 15 минут с экспресс-полосами для подписчиков.",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Реферальные награды",
      description: "Зарабатывайте бесплатные месяцы, приглашая друзей. Делитесь любовью и экономьте деньги!",
      gradient: "from-indigo-500 to-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Почему выбирают <span className="text-gradient-primary">ShineGo</span>?
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Мы переосмыслили автомойку с помощью передовых технологий, прозрачного ценообразования 
            и непревзойдённого удобства по всему Казахстану.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50 bg-gradient-to-br from-card to-card/80 hover:scale-105">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-20 bg-gradient-to-r from-card/50 to-card rounded-3xl p-8 lg:p-16 border border-border/30">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Как это работает
            </h3>
            <p className="text-foreground/70">
              Начните за минуты, мойтесь за секунды
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Скачайте приложение", desc: "Получите ShineGo из App Store или Google Play" },
              { step: "2", title: "Выберите план", desc: "Выберите безлимитный месячный или оплата за мойку" },
              { step: "3", title: "Найдите станцию", desc: "Используйте карту для поиска ближайших станций-партнёров" },
              { step: "4", title: "Сканируйте и мойтесь", desc: "Покажите QR-код, подтвердите и наслаждайтесь мойкой" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-primary">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-8" />
                  )}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;