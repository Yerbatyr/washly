import { Card, CardContent } from "@/components/ui/card";
import { QrCode, MapPin, Smartphone, Shield, Zap, Users } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "QR-доступ",
      description: "Просто отсканируйте QR-код и начните мойку. Быстро и безопасно.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "50+ локаций",
      description: "Найдите ближайшую станцию на карте и посмотрите доступность в реальном времени.",
      gradient: "from-accent to-accent-hover"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Удобное приложение",
      description: "Работает на iOS и Android. Доступно даже без интернета.",
      gradient: "from-accent to-secondary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Безопасные платежи",
      description: "Kaspi Pay и банковские карты. Ваши деньги под защитой.",
      gradient: "from-primary to-accent"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Быстрая мойка",
      description: "Мойка занимает менее 30 минут. Экспресс-полоса для подписчиков.",
      gradient: "from-accent to-primary-hover"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Приглашай друзей",
      description: "Получайте бесплатные месяцы за каждого приглашенного друга.",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl lg:text-5xl font-bold mb-6">
            Почему выбирают <span className="text-gradient-primary">Washly</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы переосмыслили автомойку с помощью передовых технологий, прозрачного ценообразования 
            и непревзойдённого удобства по всему Казахстану.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50 bg-gradient-to-br from-card to-card/80 hover:scale-105">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 text-white group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                    {feature.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div id="how-it-works" className="mt-20 bg-gradient-to-r from-card/50 to-card rounded-3xl p-8 lg:p-16 border border-border/30">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Как это работает
            </h3>
            <p className="text-muted-foreground">
              Начните за минуты, мойтесь за секунды
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Скачайте приложение", desc: "Получите Washly из App Store или Google Play" },
              { step: "2", title: "Выберите план", desc: "Выберите безлимитный месячный или оплата за мойку" },
              { step: "3", title: "Найдите станцию", desc: "Используйте карту для поиска ближайших станций-партнёров" },
              { step: "4", title: "Сканируйте и мойтесь", desc: "Покажите QR-код, подтвердите и наслаждайтесь мойкой" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-primary" aria-label={`Шаг ${item.step}`}>
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-8" aria-hidden="true" />
                  )}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;