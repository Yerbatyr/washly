import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin, QrCode, Zap, Users, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/hero-car-wash.jpg";
import Header from "@/components/Header";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Hormozi Style */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-background">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Problem/Pain Hook */}
            <Badge variant="secondary" className="mb-10 px-6 py-3 text-sm font-bold border border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              ПРЕКРАТИТЕ ПЕРЕПЛАЧИВАТЬ ЗА МОЙКУ
            </Badge>
            
            {/* Main Headline - Problem Focused */}
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9]">
              Как мыть машину 
              <span className="text-gradient-hero block">БЕЗЛИМИТНО</span>
              за 15,000₸ в месяц
            </h1>
            
            {/* Value Proposition */}
            <p className="text-xl lg:text-2xl text-neutral-300 mb-8 font-medium max-w-3xl mx-auto">
              Вместо того чтобы платить 2,500₸ за каждую мойку (75,000₸+ в месяц), 
              получите <span className="text-primary font-bold">БЕЗЛИМИТНЫЙ</span> доступ к 50+ премиальным станциям
            </p>

            {/* Social Proof Numbers */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">10К+</div>
                <div className="text-sm text-neutral-400 uppercase tracking-wide">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">50+</div>
                <div className="text-sm text-neutral-400 uppercase tracking-wide">Элитных станций</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">24/7</div>
                <div className="text-sm text-neutral-400 uppercase tracking-wide">Доступ</div>
              </div>
            </div>
            
            {/* Primary CTA */}
            <div className="space-y-4 mb-8">
              <Button variant="hero" size="xl" className="px-12 py-6 text-xl font-bold">
                <QrCode className="w-6 h-6 mr-3" />
                ПОЛУЧИТЬ БЕЗЛИМИТ СЕЙЧАС
              </Button>
              <p className="text-sm text-neutral-400">
                ⚡ Активация за 2 минуты • 🎯 Первая мойка БЕСПЛАТНО
              </p>
            </div>

            {/* Risk Reversal */}
            <div className="bg-card border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold text-primary">ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ</span>
              </div>
              <p className="text-neutral-300 text-sm">
                Если не сэкономите минимум 30,000₸ в первый месяц - вернем ВСЕ деньги. Без вопросов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Subscription Plans */}
      <SubscriptionPlans />

      {/* Problem Agitation Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              ХВАТИТ <span className="text-red-500">ВЫБРАСЫВАТЬ</span> деньги на мойку!
            </h2>
            
            {/* Pain Points */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-6">
                <div className="text-red-400 text-5xl font-black mb-4">2,500₸</div>
                <p className="text-neutral-300">за КАЖДУЮ мойку</p>
                <p className="text-sm text-red-400 mt-2">= 75,000₸+ в месяц</p>
              </div>
              
              <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-6">
                <div className="text-red-400 text-5xl font-black mb-4">30мин</div>
                <p className="text-neutral-300">в очередях</p>
                <p className="text-sm text-red-400 mt-2">потраченное время</p>
              </div>
              
              <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-6">
                <div className="text-red-400 text-5xl font-black mb-4">0</div>
                <p className="text-neutral-300">гарантий качества</p>
                <p className="text-sm text-red-400 mt-2">никто не возвращает деньги</p>
              </div>
            </div>

            {/* Solution Intro */}
            <div className="bg-gradient-hero p-8 rounded-3xl text-black">
              <h3 className="text-3xl font-black mb-4">А ТЕПЕРЬ ПРЕДСТАВЬТЕ...</h3>
              <div className="text-xl font-semibold space-y-2">
                <p>✅ Безлимитные мойки за ФИКСИРОВАННУЮ цену</p>
                <p>✅ Никаких очередей - QR и поехали</p>
                <p>✅ Гарантия возврата денег</p>
                <p>✅ 50+ элитных станций в сети</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Urgency */}
      <section className="py-20 bg-gradient-hero text-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Urgency */}
            <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-block mb-8">
              <span className="font-black text-lg">⚠️ ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ ⚠️</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              ПОСЛЕДНИЙ ШАНС<br />
              получить безлимит за <span className="text-5xl lg:text-7xl">15,000₸</span>
            </h2>
            
            <p className="text-xl lg:text-2xl mb-8 font-bold">
              Цена поднимется до 25,000₸ уже через 7 дней!<br />
              <span className="text-lg font-medium">Сэкономьте 120,000₸ в год - действуйте СЕЙЧАС</span>
            </p>
            
            {/* CTA Stack */}
            <div className="space-y-6">
              <Button variant="default" size="xl" className="px-16 py-8 text-2xl font-black bg-black text-primary hover:bg-neutral-900 border-4 border-black">
                <Zap className="w-8 h-8 mr-4" />
                АКТИВИРОВАТЬ БЕЗЛИМИТ СЕЙЧАС
              </Button>
              
              <div className="text-black/80 space-y-2">
                <p className="font-semibold">🎯 Активация за 60 секунд</p>
                <p className="font-semibold">💳 Безопасная оплата через Kaspi Pay</p>
                <p className="font-semibold">🛡️ Гарантия возврата денег 30 дней</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-gradient-primary mb-4">Washly</div>
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
            <p>&copy; 2024 Washly. Сделано с ❤️ в Казахстане.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;