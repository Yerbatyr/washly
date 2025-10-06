import { Button } from "@/components/ui/button";
import { QrCode, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const partnerMessages = [
  "💰 Заработайте 1,500,000₸+ в месяц",
  "🚀 Рост выручки на 300% за 6 месяцев",
  "⚡ Подключение за 24 часа бесплатно",
  "🎯 10,000+ готовых клиентов для вашей мойки",
  "✅ Гарантия результата или работаем бесплатно"
];

const Header = () => {
  const location = useLocation();
  const isPartnersPage = location.pathname === '/partners';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Washly - Главная страница">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center" aria-hidden="true">
              <QrCode className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-2xl font-black">
              <span className="text-primary">Wash</span>
              <span className="text-foreground">ly</span>
            </div>
          </Link>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Тарифы
            </a>
            <Link to="/partners" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Партнерам
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Войти
            </Button>
            
            <Button variant="hero" size="sm" className="font-bold" aria-label="Начать экономить с Washly">
              <QrCode className="w-4 h-4 mr-2" aria-hidden="true" />
              НАЧАТЬ ЭКОНОМИТЬ
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" aria-label="Открыть меню">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Urgency Bar */}
      {isPartnersPage ? (
        <div className="bg-destructive text-destructive-foreground py-2 overflow-hidden relative" role="alert">
          <div className="flex animate-scroll-banner whitespace-nowrap">
            {/* First set */}
            {partnerMessages.map((message, index) => (
              <span key={`first-${index}`} className="inline-flex items-center px-8 text-sm font-bold">
                {message}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {partnerMessages.map((message, index) => (
              <span key={`second-${index}`} className="inline-flex items-center px-8 text-sm font-bold">
                {message}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-destructive text-destructive-foreground text-center py-2 text-sm font-bold" role="alert">
          <span aria-hidden="true">🚗</span> СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ: Безлимитные мойки за 15,000₸/месяц! Экономия до 70% на каждой мойке
        </div>
      )}
    </header>
  );
};

export default Header;