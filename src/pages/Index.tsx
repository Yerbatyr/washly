import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin, QrCode, Zap, Users, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/hero-car-wash.jpg";
import Header from "@/components/Header";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import FeatureSection from "@/components/FeatureSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Запуск в Алматы
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient-hero">ShineGo</span>
                <br />
                Безлимитная мойка
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Подпишись один раз — мой везде. Доступ к премиальным автомойкам по всему Казахстану с революционной QR-системой.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="flex-1 sm:flex-none">
                  <QrCode className="w-5 h-5 mr-2" />
                  Начать
                </Button>
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                  <MapPin className="w-5 h-5 mr-2" />
                  Найти станции
                </Button>
              </div>
              
              <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>50+ станций-партнёров</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Доступно 24/7</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl transform rotate-6" />
              <img
                src={heroImage}
                alt="Современная станция автомойки"
                className="relative w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Subscription Plans */}
      <SubscriptionPlans />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Нам доверяют автовладельцы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к тысячам довольных клиентов, которые сделали мойку автомобиля простой
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "10К+", label: "Активных подписчиков" },
              { value: "50+", label: "Станций-партнёров" },
              { value: "100К+", label: "Завершённых моек" },
              { value: "4.9★", label: "Рейтинг приложения" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Готовы изменить свой опыт мойки автомобиля?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Присоединяйтесь к будущему автомобильного ухода с подпиской ShineGo
            </p>
            <Button variant="glass" size="xl">
              <Zap className="w-5 h-5 mr-2" />
              Оформить подписку
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-gradient-primary mb-4">ShineGo</div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Будущее автомойки уже здесь. Удобно, доступно и всегда под рукой.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Мобильное приложение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сеть партнёров</a></li>
                <li><a href="#" className="hover:text-white transition-colors">QR система</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Стать партнёром</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Центр помощи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-400">
            <p>&copy; 2024 ShineGo. Сделано с ❤️ в Казахстане.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;