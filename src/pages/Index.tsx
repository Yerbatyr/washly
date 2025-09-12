import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin, QrCode, Zap, Users, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/hero-car-wash.jpg";
import Header from "@/components/Header";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import FeatureSection from "@/components/FeatureSection";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Hormozi Style */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-background">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Problem/Pain Hook */}
            <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm font-bold border border-primary/20">
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
                <div className="text-sm text-neutral-400 uppercase tracking-wide">5000+</div>
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

            {/* Floating Testimonials */}
            <div className="mt-12 relative">
              {/* Central testimonial */}
              <div className="bg-black/10 rounded-2xl p-6 max-w-2xl mx-auto z-10 relative animate-fade-in">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-primary">
                    АК
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">Асылбек Казбеков</div>
                    <div className="text-black/60 text-sm">Предприниматель</div>
                    <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-lg font-semibold">
                  "Экономлю 60,000₸ каждый месяц! Мою машину 3 раза в неделю и плачу как за 6 моек в обычной мойке"
                </p>
              </div>

              {/* Floating testimonial 1 - Top Left */}
              <div className="absolute -top-8 -left-4 lg:-left-16 bg-white/90 backdrop-blur-sm rounded-xl p-4 max-w-xs shadow-lg animate-scale-in hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold shadow-secondary">
                    МА
                  </div>
                  <div>
                    <div className="font-semibold text-black">Марат А.</div>
                    <div className="text-xs text-black/60">Таксист</div>
                  </div>
                </div>
                <p className="text-sm text-black">"Мою 15 раз в месяц, плачу как за 6! Невероятно!"</p>
                <div className="text-yellow-500 text-xs mt-2">⭐⭐⭐⭐⭐</div>
              </div>

              {/* Floating testimonial 2 - Top Right */}
              <div className="absolute -top-4 -right-4 lg:-right-20 bg-white/90 backdrop-blur-sm rounded-xl p-4 max-w-xs shadow-lg animate-fade-in delay-300 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold shadow-accent">
                    АЖ
                  </div>
                  <div>
                    <div className="font-semibold text-black">Айгерим Ж.</div>
                    <div className="text-xs text-black/60">Менеджер</div>
                  </div>
                </div>
                <p className="text-sm text-black">"QR код - это магия! 30 секунд и готово"</p>
                <div className="text-yellow-500 text-xs mt-2">⭐⭐⭐⭐⭐</div>
              </div>

              {/* Floating testimonial 3 - Bottom Left */}
              <div className="absolute -bottom-8 -left-8 lg:-left-24 bg-white/90 backdrop-blur-sm rounded-xl p-4 max-w-xs shadow-lg animate-scale-in delay-500 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-primary">
                    ДС
                  </div>
                  <div>
                    <div className="font-semibold text-black">Даулет С.</div>
                    <div className="text-xs text-black/60">IT директор</div>
                  </div>
                </div>
                <p className="text-sm text-black">"Экономлю 80,000₸ в год. Жена тоже подключилась!"</p>
                <div className="text-yellow-500 text-xs mt-2">⭐⭐⭐⭐⭐</div>
              </div>

              {/* Floating testimonial 4 - Bottom Right */}
              <div className="absolute -bottom-4 -right-8 lg:-right-28 bg-white/90 backdrop-blur-sm rounded-xl p-4 max-w-xs shadow-lg animate-fade-in delay-700 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold shadow-secondary">
                    ЖК
                  </div>
                  <div>
                    <div className="font-semibold text-black">Жанна К.</div>
                    <div className="text-xs text-black/60">Врач</div>
                  </div>
                </div>
                <p className="text-sm text-black">"Качество мойки как в премиуме, а цена - копейки"</p>
                <div className="text-yellow-500 text-xs mt-2">⭐⭐⭐⭐⭐</div>
              </div>

              {/* Floating testimonial 5 - Middle Left */}
              <div className="absolute top-1/2 -left-12 lg:-left-32 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 max-w-xs shadow-lg animate-scale-in delay-200 hover:scale-105 transition-transform duration-300 hidden lg:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold shadow-accent">
                    БТ
                  </div>
                  <div>
                    <div className="font-semibold text-black">Бауржан Т.</div>
                    <div className="text-xs text-black/60">Бизнесмен</div>
                  </div>
                </div>
                <p className="text-sm text-black">"3 автомобиля - один тариф. Гениально!"</p>
                <div className="text-yellow-500 text-xs mt-2">⭐⭐⭐⭐⭐</div>
              </div>

              {/* Floating testimonial 6 - Middle Right */}
              <div className="absolute top-1/2 -right-12 lg:-right-36 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 max-w-xs shadow-lg animate-fade-in delay-600 hover:scale-105 transition-transform duration-300 hidden lg:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold shadow-glow">
                    СН
                  </div>
                  <div>
                    <div className="font-semibold text-black">Сабина Н.</div>
                    <div className="text-xs text-black/60">Дизайнер</div>
                  </div>
                </div>
                <p className="text-sm text-black">"Машина всегда чистая, а кошелек полный!"</p>
                <div className="text-yellow-500 text-xs mt-2">⭐⭐⭐⭐⭐</div>
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
    </div>;
};
export default Index;