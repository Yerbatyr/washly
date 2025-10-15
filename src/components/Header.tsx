import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QrCode, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const partnerMessages = [
  "💰 Заработайте 1,500,000₸+ в месяц",
  "🚀 Рост выручки на 300% за 6 месяцев",
  "⚡ Подключение за 24 часа бесплатно",
  "🎯 10,000+ готовых клиентов для вашей мойки",
  "✅ Гарантия результата или работаем бесплатно"
];

const clientMessages = [
  "🔥 Безлимитные мойки за 15,000₸/месяц — экономия до 45,000₸",
  "💎 1,247 клиентов уже сэкономили 12,450,000₸ в этом месяце",
  "⚡ Цена 15,000₸ только 7 дней — потом 25,000₸",
  "🚗 Мойте авто сколько хотите — никаких лимитов и доплат",
  "✅ Попробуйте 7 дней бесплатно — отмените в любой момент",
  "🎯 327 моек по всему городу — всегда рядом с вами",
  "💰 Средний клиент экономит 70% на автомойках",
  "🏆 100% гарантия качества или деньги назад"
];

const Header = () => {
  const location = useLocation();
  const isPartnersPage = location.pathname === '/partners';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [qrDialogOpen, setQrDialogOpen] = useState(false);
  
  const appDownloadUrl = "https://washly.app/download"; // Replace with actual app download URL

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-border/20" role="banner">
      <div className="w-full px-2 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3" aria-label="Washly - Главная страница">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-xl flex items-center justify-center" aria-hidden="true">
              <QrCode className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="text-xl sm:text-2xl font-black">
              <span className="text-white">Wash</span>
              <span className="text-white">ly</span>
            </div>
          </Link>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
            <Link to="/" className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
              Главная
            </Link>
            <a href="#features" className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#pricing" className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
              Тарифы
            </a>
            <Link to="/partners" className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
              Партнерам
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-1 sm:gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-xs sm:text-sm px-2 sm:px-4 text-white/80 hover:text-white">
              Войти
            </Button>
            
            <Button 
              variant="hero" 
              size="sm" 
              className="font-bold text-xs sm:text-sm px-2 sm:px-4" 
              aria-label="Скачать приложение Washly"
              onClick={() => setQrDialogOpen(true)}
            >
              <QrCode className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
              <span className="hidden sm:inline ml-1 sm:ml-2">СКАЧАТЬ</span>
              <span className="hidden md:inline ml-1">ПРИЛОЖЕНИЕ</span>
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden p-2 text-white" aria-label="Открыть меню">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col gap-4 mt-8" aria-label="Мобильная навигация">
                  <Link 
                    to="/" 
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Главная
                  </Link>
                  <a 
                    href="#features" 
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Преимущества
                  </a>
                  <a 
                    href="#pricing" 
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Тарифы
                  </a>
                  <Link 
                    to="/partners" 
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Партнерам
                  </Link>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full justify-start"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Войти
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* QR Code Dialog */}
      <Dialog open={qrDialogOpen} onOpenChange={setQrDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Скачать приложение Washly</DialogTitle>
            <DialogDescription className="text-center">
              Отсканируйте QR-код камерой телефона
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center gap-6 py-6">
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <QRCodeSVG 
                value={appDownloadUrl}
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-xs">
              Наведите камеру телефона на QR-код для скачивания приложения
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;