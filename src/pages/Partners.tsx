import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Shield, 
  BarChart3, 
  Zap, 
  CheckCircle,
  QrCode,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import Header from "@/components/Header";

const Partners = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Рост выручки на 300%+",
      description: "Наши партнеры увеличивают доход в среднем на 300% в первые 6 месяцев благодаря постоянному потоку клиентов",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "10,000+ активных клиентов",
      description: "Мгновенный доступ к нашей базе из 10+ тысяч платящих клиентов без затрат на рекламу",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Оборачиваемость 24/7",
      description: "QR-система позволяет работать круглосуточно без персонала. Клиенты моются даже ночью",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Аналитика в реальном времени",
      description: "Полная статистика: сколько клиентов, в какое время, какие услуги. Управляйте данными, а не догадками",
      gradient: "from-orange-500 to-red-400"
    }
  ];

  const successStats = [
    { number: "50+", label: "Партнерских станций", sublabel: "и растем каждый день" },
    { number: "300%", label: "Средний рост выручки", sublabel: "за первые 6 месяцев" },
    { number: "10К+", label: "Активных клиентов", sublabel: "с растущими потребностями" },
    { number: "24/7", label: "Работа без выходных", sublabel: "автоматическая система" }
  ];

  const testimonials = [
    {
      name: "Алмат Назарбаев",
      position: "Владелец сети 'ChistoMax'",
      location: "Алматы",
      quote: "За 4 месяца с Washly мы увеличили выручку в 3.5 раза! Клиенты приезжают постоянно, система работает даже ночью. Лучшее решение для автомойки.",
      revenue: "+350% к выручке"
    },
    {
      name: "Дархан Касымов", 
      position: "Владелец 'AquaWash Pro'",
      location: "Нур-Султан",
      quote: "Забыл про проблемы с персоналом и пустые дни. QR-система Washly привлекла столько клиентов, что пришлось расширяться. Окупили вложения за 2 месяца!",
      revenue: "+280% к выручке"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-background">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Problem Hook */}
            <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm font-bold border border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              ТОЛЬКО ДЛЯ ВЛАДЕЛЬЦЕВ АВТОМОЕК
            </Badge>
            
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9]">
              Как зарабатывать
              <span className="text-gradient-hero block">1,500,000₸+</span>
              в месяц на автомойке
            </h1>
            
            {/* Value Proposition */}
            <p className="text-xl lg:text-2xl text-neutral-300 mb-8 font-medium max-w-4xl mx-auto">
              Забудьте про пустые дни и проблемы с персоналом. <span className="text-primary font-bold">Washly</span> 
              привлечет <span className="text-primary font-bold">10,000+ готовых платить клиентов</span> прямо к вашей мойке
            </p>

            {/* Success Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {successStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-neutral-300 uppercase tracking-wide font-semibold">{stat.label}</div>
                  <div className="text-xs text-neutral-500">{stat.sublabel}</div>
                </div>
              ))}
            </div>
            
            {/* Primary CTA */}
            <div className="space-y-4 mb-8">
              <Button variant="hero" size="xl" className="px-12 py-6 text-xl font-bold">
                <DollarSign className="w-6 h-6 mr-3" />
                СТАТЬ ПАРТНЕРОМ WASHLY
              </Button>
              <p className="text-sm text-neutral-400">
                ⚡ Подключение за 24 часа • 🎯 Первая неделя БЕСПЛАТНО • 💰 Без стартовых взносов
              </p>
            </div>

            {/* Risk Reversal */}
            <div className="bg-card border border-primary/20 rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold text-primary">ГАРАНТИЯ РЕЗУЛЬТАТА</span>
              </div>
              <p className="text-neutral-300 text-sm">
                Если не увеличим ваш поток клиентов минимум в 2 раза за первый месяц - 
                работаем БЕСПЛАТНО до достижения результата
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Что получают наши <span className="text-primary">партнеры</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Мы не просто подключаем к платформе. Мы делаем вашу автомойку самой прибыльной в городе.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-primary/20 bg-gradient-to-br from-card to-card/80 hover:scale-105">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-5 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-300 leading-relaxed text-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Истории <span className="text-primary">успеха</span> наших партнеров
            </h2>
            <p className="text-xl text-neutral-300">
              Реальные результаты реальных владельцев автомоек
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Revenue Badge */}
                    <Badge className="bg-green-600 text-white px-4 py-2 text-sm font-bold">
                      {testimonial.revenue}
                    </Badge>
                    
                    {/* Quote */}
                    <p className="text-lg text-neutral-200 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-primary/20">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{testimonial.name}</div>
                        <div className="text-primary text-sm font-medium">{testimonial.position}</div>
                        <div className="text-neutral-400 text-sm">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-gradient-hero text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              Как это работает для вашего бизнеса
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-black mb-4">1</div>
                <h3 className="text-xl font-bold mb-3">ПОДКЛЮЧЕНИЕ</h3>
                <p className="text-black/80">
                  Устанавливаем QR-систему на вашей мойке за 1 день. 
                  Никаких сложностей - все делаем мы.
                </p>
              </div>
              
              <div className="bg-black/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-black mb-4">2</div>
                <h3 className="text-xl font-bold mb-3">ПОТОК КЛИЕНТОВ</h3>
                <p className="text-black/80">
                  10,000+ наших клиентов получают доступ к вашей мойке. 
                  Постоянный поток без рекламных затрат.
                </p>
              </div>
              
              <div className="bg-black/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-black mb-4">3</div>
                <h3 className="text-xl font-bold mb-3">ДОХОДЫ РАСТУТ</h3>
                <p className="text-black/80">
                  Получаете 70% с каждой мойки + премиум-тарифы. 
                  Средний партнер зарабатывает 1,5M₸+ в месяц.
                </p>
              </div>
            </div>

            <div className="bg-black/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">💰 ВАШИ ДОХОДЫ С WASHLY</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-2xl font-black text-green-700 mb-2">70%</div>
                  <p className="text-sm">с каждой мойки безлимитных клиентов</p>
                </div>
                <div>
                  <div className="text-2xl font-black text-green-700 mb-2">100%</div>
                  <p className="text-sm">с разовых моек через приложение</p>
                </div>
                <div>
                  <div className="text-2xl font-black text-green-700 mb-2">+50%</div>
                  <p className="text-sm">премиальные услуги (воск, полировка)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                Требования к партнерам
              </h2>
              <p className="text-lg text-neutral-300">
                Мы работаем только с качественными мойками для поддержания репутации сети
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Обязательные требования
                </h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    Действующая автомойка с оборудованием
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    Стабильное электричество и интернет
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    Готовность к установке QR-системы
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    Соблюдение стандартов качества Washly
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Мы предоставляем
                </h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    QR-оборудование и установку БЕСПЛАТНО
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    10,000+ готовых клиентов с первого дня
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    Маркетинг и продвижение вашей станции
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    Техподдержку и обучение персонала
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-block mb-8">
              <span className="font-black text-lg">⚠️ ОГРАНИЧЕННОЕ КОЛИЧЕСТВО МЕСТ ⚠️</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              Осталось <span className="text-5xl lg:text-7xl">17 МЕСТ</span><br />
              в вашем городе
            </h2>
            
            <p className="text-xl lg:text-2xl mb-8 font-bold">
              Мы подключаем только лучшие мойки для эксклюзивности сети.<br />
              <span className="text-lg font-medium">Не упустите шанс стать частью самой прибыльной сети автомоек Казахстана!</span>
            </p>
            
            <div className="space-y-6">
              <Button variant="default" size="xl" className="px-16 py-8 text-2xl font-black bg-black text-primary hover:bg-neutral-900 border-4 border-black">
                <Phone className="w-8 h-8 mr-4" />
                ОСТАВИТЬ ЗАЯВКУ СЕЙЧАС
              </Button>
              
              <div className="text-black/80 space-y-2">
                <p className="font-semibold">📞 Звоните: +7 (777) 123-45-67</p>
                <p className="font-semibold">📧 Email: partners@washly.kz</p>
                <p className="font-semibold">⏰ Работаем 24/7 для партнеров</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-gradient-primary mb-4">Washly Partners</div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Присоединяйтесь к самой быстрорастущей сети автомоек в Казахстане.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Для партнеров</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Стать партнером</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Требования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доходы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="tel:+77771234567" className="hover:text-white transition-colors">+7 (777) 123-45-67</a></li>
                <li><a href="mailto:partners@washly.kz" className="hover:text-white transition-colors">partners@washly.kz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">База знаний</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  г. Алматы, ул. Абая, 150
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  24/7 горячая линия
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Быстрый ответ в течение часа
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-400">
            <p>&copy; 2024 Washly Partners. Растем вместе в Казахстане.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Partners;