import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, Globe, QrCode } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <QrCode className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient-primary">ShineGo</span>
            <Badge variant="outline" className="ml-2 text-xs">Beta</Badge>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Как работает
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Станции
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Тарифы
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Партнёры
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden sm:flex items-center space-x-1 text-sm">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <select className="bg-transparent border-none text-sm font-medium focus:outline-none">
                <option value="ru">РУ</option>
                <option value="kk">ҚАЗ</option>
                <option value="en">EN</option>
              </select>
            </div>

            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Войти
            </Button>
            
            <Button variant="hero" size="sm">
              Начать
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;