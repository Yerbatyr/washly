import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <>
      <SEO 
        title="Безлимитная мойка авто за 15,000₸"
        description="Мойте машину безлимитно на 50+ станциях по всему Казахстану за фиксированную цену. Экономьте до 60,000₸ каждый месяц с Washly."
        keywords="автомойка алматы, безлимитная мойка, подписка на мойку, мойка автомобиля казахстан, дешевая мойка"
      />
      <StructuredData type="product" />
      
      <div className="min-h-screen bg-background w-full overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg">
          Перейти к основному содержанию
        </a>
        
        <Header />
        
        <main id="main-content">
          {/* Hero Section */}
          <HeroSection />

          {/* Features Section */}
          <FeatureSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

          {/* Subscription Plans */}
          <SubscriptionPlans />

          {/* Problem Agitation Section */}
          <section className="py-20 bg-card" aria-labelledby="problem-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 id="problem-heading" className="text-4xl lg:text-5xl font-black mb-8">
                  ХВАТИТ <span className="text-destructive">ВЫБРАСЫВАТЬ</span> деньги на мойку!
                </h2>
            
                {/* Pain Points */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                    <div className="text-destructive text-5xl font-black mb-4">2,500₸</div>
                    <p className="text-muted-foreground">за КАЖДУЮ мойку</p>
                    <p className="text-sm text-destructive mt-2">= 75,000₸+ в месяц</p>
                  </div>
                  
                  <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                    <div className="text-destructive text-5xl font-black mb-4">30мин</div>
                    <p className="text-muted-foreground">в очередях</p>
                    <p className="text-sm text-destructive mt-2">потраченное время</p>
                  </div>
                  
                  <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                    <div className="text-destructive text-5xl font-black mb-4">0</div>
                    <p className="text-muted-foreground">гарантий качества</p>
                    <p className="text-sm text-destructive mt-2">никто не возвращает деньги</p>
                  </div>
                </div>

                {/* Solution Intro */}
                <div className="bg-gradient-hero p-8 rounded-3xl">
                  <h3 className="text-3xl font-black mb-4 text-primary-foreground">А ТЕПЕРЬ ПРЕДСТАВЬТЕ...</h3>
                  <div className="text-xl font-semibold space-y-2 text-primary-foreground">
                    <p><span aria-hidden="true">✅</span> Безлимитные мойки за ФИКСИРОВАННУЮ цену</p>
                    <p><span aria-hidden="true">✅</span> Никаких очередей - QR и поехали</p>
                    <p><span aria-hidden="true">✅</span> Гарантия возврата денег</p>
                    <p><span aria-hidden="true">✅</span> 50+ элитных станций в сети</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section - Urgency */}
          <section className="py-20 bg-gradient-hero relative overflow-hidden" aria-labelledby="cta-heading">
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-4xl mx-auto">
                {/* Urgency */}
                <div className="bg-destructive text-destructive-foreground px-6 py-3 rounded-full inline-block mb-8">
                  <span className="font-black text-lg" role="alert"><span aria-hidden="true">⚠️</span> ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ <span aria-hidden="true">⚠️</span></span>
                </div>
                
                <h2 id="cta-heading" className="text-4xl lg:text-6xl font-black mb-6 leading-tight text-primary-foreground">
                  ПОСЛЕДНИЙ ШАНС<br />
                  получить безлимит за <span className="text-5xl lg:text-7xl">15,000₸</span>
                </h2>
                
                <p className="text-xl lg:text-2xl mb-8 font-bold text-primary-foreground">
                  Цена поднимется до 25,000₸ уже через 7 дней!<br />
                  <span className="text-lg font-medium">Сэкономьте 120,000₸ в год - действуйте СЕЙЧАС</span>
                </p>
                
                {/* CTA Stack */}
                <div className="space-y-6">
                  <Button 
                    variant="default" 
                    size="xl" 
                    className="w-full sm:w-auto px-4 sm:px-8 md:px-16 py-3 sm:py-5 md:py-8 text-sm sm:text-lg md:text-2xl font-black bg-card text-primary hover:bg-card/90 border-2 sm:border-4 border-card"
                    aria-label="Активировать безлимитную подписку на мойку"
                  >
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3 md:mr-4" aria-hidden="true" />
                    АКТИВИРОВАТЬ БЕЗЛИМИТ СЕЙЧАС
                  </Button>
                  
                  <div className="text-primary-foreground/80 space-y-2 text-sm sm:text-base">
                    <p className="font-semibold"><span aria-hidden="true">🎯</span> Активация за 60 секунд</p>
                    <p className="font-semibold"><span aria-hidden="true">💳</span> Безопасная оплата через Kaspi Pay</p>
                    <p className="font-semibold"><span aria-hidden="true">🛡️</span> Гарантия возврата денег 30 дней</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;