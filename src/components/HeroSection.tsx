import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, QrCode, Shield } from "lucide-react";
import heroVideo from "@/assets/hero-car-wash-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 bg-black" aria-labelledby="hero-heading">
      {/* Hero Video with proper accessibility */}
      <div className="absolute inset-0 opacity-80" aria-hidden="true">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Problem/Pain Hook */}
          <Badge variant="secondary" className="mt-16 mb-10 px-6 py-3 text-sm font-bold border border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
            ПРЕКРАТИТЕ ПЕРЕПЛАЧИВАТЬ ЗА МОЙКУ
          </Badge>
          
          {/* Main Headline - Problem Focused */}
          <h1 id="hero-heading" className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9]">
            Как мыть машину 
            <span className="text-gradient-hero block">БЕЗЛИМИТНО</span>
            за 15,000₸ в месяц
          </h1>
          
          {/* Value Proposition */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium max-w-3xl mx-auto">
            Вместо того чтобы платить 2,500₸ за каждую мойку (75,000₸+ в месяц), 
            получите <span className="text-primary font-bold">БЕЗЛИМИТНЫЙ</span> доступ к 50+ премиальным станциям
          </p>

          {/* Social Proof Numbers */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto" role="group" aria-label="Статистика Washly">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2" aria-label="Более 10 тысяч">10К+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2" aria-label="Более 50">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Элитных станций</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Доступ</div>
            </div>
          </div>
          
          {/* Primary CTA */}
          <div className="space-y-4 mb-8">
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-xl font-bold"
              aria-label="Получить безлимитную подписку на мойку автомобиля"
            >
              <QrCode className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" aria-hidden="true" />
              ПОЛУЧИТЬ БЕЗЛИМИТ СЕЙЧАС
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground px-2">
              <span aria-hidden="true">⚡</span> Активация за 2 минуты <span aria-hidden="true">•</span> <span aria-hidden="true">🎯</span> Первая мойка БЕСПЛАТНО
            </p>
          </div>

          {/* Risk Reversal */}
          <div className="bg-card border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
              <span className="text-lg font-bold text-primary">ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Если не сэкономите минимум 30,000₸ в первый месяц - вернем ВСЕ деньги. Без вопросов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
