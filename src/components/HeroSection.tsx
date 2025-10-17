import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, QrCode, Shield } from "lucide-react";
import heroVideo from "@/assets/hero-car-wash-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 bg-black" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }} aria-labelledby="hero-heading">
      {/* Hero Video with proper accessibility */}
      <div className="absolute opacity-100" style={{ top: 0, left: 0, width: '100vw', height: '100%', margin: 0, padding: 0 }} aria-hidden="true">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          onError={(e) => {
            // Gracefully handle video loading errors
            e.currentTarget.style.display = 'none';
          }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', margin: 0, padding: 0, display: 'block' }}
        />
      </div>
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" style={{ width: '100vw', height: '100%' }} aria-hidden="true" />
      
      <div className="w-full relative px-4" style={{ maxWidth: '100%' }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Problem/Pain Hook */}
          <Badge variant="secondary" className="mt-16 mb-10 px-6 py-3 text-sm font-bold border border-primary/30 bg-black/90 backdrop-blur-md text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
            <Sparkles className="w-4 h-4 mr-2 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]" aria-hidden="true" />
            ПРЕКРАТИТЕ ПЕРЕПЛАЧИВАТЬ ЗА МОЙКУ
          </Badge>
          
          {/* Main Headline - Problem Focused */}
          <h1 id="hero-heading" className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,1)]">
            <span className="bg-gradient-to-r from-green-500 via-green-300 to-green-500 bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] block drop-shadow-[0_4px_20px_rgba(0,0,0,1)]">БЕЗЛИМИТНАЯ МОЙКА</span>
            всего за 15,000₸
          </h1>
          
          {/* Value Proposition */}
          <p className="text-xl lg:text-2xl text-white mb-8 font-medium max-w-3xl mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
            50+ станций по всему Казахстану
          </p>

          {/* Social Proof Numbers */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto" role="group" aria-label="Статистика Washly">
            <div className="text-center">
              <div className="text-4xl font-black text-green-400 mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]" aria-label="Более 10 тысяч">10К+</div>
              <div className="text-sm text-white/80 uppercase tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-400 mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]" aria-label="Более 50">50+</div>
              <div className="text-sm text-white/80 uppercase tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">Элитных станций</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-400 mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">24/7</div>
              <div className="text-sm text-white/80 uppercase tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">Доступ</div>
            </div>
          </div>
          
          {/* Primary CTA */}
          <div className="space-y-4 mb-8">
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-xl font-bold bg-green-500 hover:bg-green-600 shadow-[0_0_30px_rgba(34,197,94,0.6)]"
              aria-label="Получить безлимит сейчас"
            >
              <QrCode className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" aria-hidden="true" />
              ПОЛУЧИТЬ БЕЗЛИМИТ СЕЙЧАС
            </Button>
            <p className="text-xs sm:text-sm text-white/80 px-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              <span aria-hidden="true">⚡</span> Активация за 2 минуты <span aria-hidden="true">•</span> <span aria-hidden="true">🎯</span> Первая мойка БЕСПЛАТНО
            </p>
          </div>

          {/* Risk Reversal */}
          <div className="backdrop-blur-md border border-green-500/40 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-green-400 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]" aria-hidden="true" />
              <span className="text-lg font-bold text-green-400 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ</span>
            </div>
            <p className="text-white text-sm drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
              Если не сэкономите минимум 30,000₸ в первый месяц - вернем ВСЕ деньги. Без вопросов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
