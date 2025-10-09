import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import partnerHeroVideo from "@/assets/partner-hero-video.mp4";

const PartnerHero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 bg-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => {
          // Gracefully handle video loading errors
          e.currentTarget.style.display = 'none';
        }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={partnerHeroVideo} type="video/mp4" />
      </video>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center text-white [&_*]:drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <Badge variant="secondary" className="mt-16 mb-6 px-6 py-3 text-sm font-bold border border-primary/20 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            ТОЛЬКО ДЛЯ ВЛАДЕЛЬЦЕВ АВТОМОЕК
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] animate-fade-in">
            Как зарабатывать
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-primary bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] block">1,500,000₸+</span>
            в месяц на автомойке
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 font-medium max-w-4xl mx-auto animate-fade-in">
            Забудьте про пустые дни и проблемы с персоналом. <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-primary bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] font-bold">Washly</span>{" "}
            привлечет <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-primary bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] font-bold">10,000+ готовых платить клиентов</span> прямо к вашей мойке
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerHero;
