import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, DollarSign } from "lucide-react";
import partnerHeroVideo from "@/assets/partner-hero-video.mp4";

const successStats = [
  { number: "50+", label: "Партнерских станций", sublabel: "и растем каждый день" },
  { number: "300%", label: "Средний рост выручки", sublabel: "за первые 6 месяцев" },
  { number: "10К+", label: "Активных клиентов", sublabel: "с растущими потребностями" },
  { number: "24/7", label: "Работа без выходных", sublabel: "автоматическая система" }
];

const PartnerHero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 bg-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={partnerHeroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center text-white [&_*]:drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <Badge variant="secondary" className="mt-16 mb-6 px-6 py-3 text-sm font-bold border border-primary/20 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            ТОЛЬКО ДЛЯ ВЛАДЕЛЬЦЕВ АВТОМОЕК
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] animate-fade-in">
            Как зарабатывать
            <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] block">1,500,000₸+</span>
            в месяц на автомойке
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 font-medium max-w-4xl mx-auto animate-fade-in">
            Забудьте про пустые дни и проблемы с персоналом. <span className="text-primary font-bold">Washly</span> 
            привлечет <span className="text-primary font-bold">10,000+ готовых платить клиентов</span> прямо к вашей мойке
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/80 uppercase tracking-wide font-semibold">{stat.label}</div>
                <div className="text-xs text-white/60">{stat.sublabel}</div>
              </div>
            ))}
          </div>
          
          <div className="space-y-4 mb-8 animate-fade-in">
            <Button variant="default" size="lg" className="w-full sm:w-auto px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-xl font-bold shadow-lg hover:shadow-xl transition-all">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
              СТАТЬ ПАРТНЕРОМ WASHLY
            </Button>
            <p className="text-xs sm:text-sm text-white/70 px-2">
              ⚡ Подключение за 24 часа • 🎯 Первая неделя БЕСПЛАТНО • 💰 Без стартовых взносов
            </p>
          </div>

          <div className="bg-card border border-primary/20 rounded-2xl p-6 max-w-3xl mx-auto shadow-lg animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-primary">ГАРАНТИЯ РЕЗУЛЬТАТА</span>
            </div>
            <p className="text-white/80 text-sm">
              Если не увеличим ваш поток клиентов минимум в 2 раза за первый месяц - 
              работаем БЕСПЛАТНО до достижения результата
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerHero;
