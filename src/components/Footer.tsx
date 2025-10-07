import { Link } from "react-router-dom";
import { QrCode, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <div className="text-xl font-bold">
                <span className="text-primary">Wash</span>
                <span className="text-foreground">ly</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Будущее автомойки уже здесь. Удобно, доступно и всегда под рукой.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+77001234567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+7 (700) 123-45-67</span>
              </a>
              <a href="mailto:info@washly.kz" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>info@washly.kz</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Алматы, Казахстан</span>
              </div>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Продукт</h3>
            <nav aria-label="Продукт">
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                    Преимущества
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                    Тарифы
                  </a>
                </li>
                <li>
                  <Link to="/partners" className="text-muted-foreground hover:text-primary transition-colors">
                    Сеть партнёров
                  </Link>
                </li>
                <li>
                  <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                    Как это работает
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Компания</h3>
            <nav aria-label="Компания">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                    Карьера
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-muted-foreground hover:text-primary transition-colors">
                    Стать партнёром
                  </Link>
                </li>
                <li>
                  <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Блог
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Поддержка</h3>
            <nav aria-label="Поддержка">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                    Центр помощи
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Условия использования
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Политика конфиденциальности
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Washly. Все права защищены. Сделано с любовью в Казахстане.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
