import { Button } from "@/components/ui/button";
import { Shield, DollarSign } from "lucide-react";

const successStats = [
  { number: "50+", label: "Партнерских станций", sublabel: "и растем каждый день" },
  { number: "300%", label: "Средний рост выручки", sublabel: "за первые 6 месяцев" },
  { number: "10К+", label: "Активных клиентов", sublabel: "с растущими потребностями" },
  { number: "24/7", label: "Работа без выходных", sublabel: "автоматическая система" }
];

const PartnerStats = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl lg:text-2xl mb-12 font-medium max-w-4xl mx-auto animate-fade-in">
            Забудьте про пустые дни и проблемы с персоналом. <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-primary bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] font-bold">Washly</span>{" "}
            привлечет <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-primary bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] font-bold">10,000+ готовых платить клиентов</span> прямо к вашей мойке
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl lg:text-4xl font-black text-green-400 mb-2">{stat.number}</div>
                <div className="text-sm text-foreground/80 uppercase tracking-wide font-semibold">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
          
          <div className="space-y-4 mb-8 animate-fade-in">
            <Button variant="default" size="lg" className="w-full sm:w-auto px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-xl font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all animate-[buttonGlow_2s_ease-in-out_infinite] shadow-[0_0_30px_rgba(34,197,94,0.6)]">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-white" />
              СТАТЬ ПАРТНЕРОМ WASHLY
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 sm:ml-3 text-white" />
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground px-2">
              ⚡ Подключение за 24 часа • 🎯 Первая неделя БЕСПЛАТНО • 💰 Без стартовых взносов
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-2 border-green-500/40 rounded-2xl p-6 max-w-3xl mx-auto shadow-lg shadow-green-500/20 animate-fade-in backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-lg font-bold text-green-400">ГАРАНТИЯ РЕЗУЛЬТАТА</span>
            </div>
            <p className="text-foreground text-sm">
              Если не увеличим ваш поток клиентов минимум в 2 раза за первый месяц - 
              работаем БЕСПЛАТНО до достижения результата
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerStats;
