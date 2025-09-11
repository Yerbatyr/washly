import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <QrCode className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-2xl font-black">
              <span className="text-primary">Shine</span>
              <span className="text-foreground">Go</span>
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#pricing" className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors">
              Тарифы
            </a>
            <a href="#stations" className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors">
              Станции
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-neutral-300 hover:text-primary">
              Войти
            </Button>
            
            <Button variant="hero" size="sm" className="font-bold">
              <QrCode className="w-4 h-4 mr-2" />
              НАЧАТЬ ЭКОНОМИТЬ
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Urgency Bar */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-bold">
        🔥 ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ: Цена 15,000₸ действует только 7 дней! Потом будет 25,000₸
      </div>
    </header>
  );
};

export default Header;