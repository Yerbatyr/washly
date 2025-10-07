import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Zap, Heart, TrendingUp, Globe } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      location: "Алматы / Удаленно",
      type: "Полная занятость",
      department: "Инженерия"
    },
    {
      title: "Product Manager",
      location: "Алматы",
      type: "Полная занятость",
      department: "Продукт"
    },
    {
      title: "Marketing Manager",
      location: "Алматы",
      type: "Полная занятость",
      department: "Маркетинг"
    },
    {
      title: "Partnership Manager",
      location: "Алматы",
      type: "Полная занятость",
      department: "Бизнес развитие"
    }
  ];

  return (
    <>
      <SEO 
        title="Карьера - Washly"
        description="Присоединяйтесь к команде Washly! Открытые вакансии в быстрорастущем технологическом стартапе в Казахстане."
      />
      
      <div className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Карьера в <span className="text-gradient-primary">Washly</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Присоединяйтесь к нашей команде и помогите изменить индустрию автомоек в Казахстане
            </p>
          </div>

          {/* Why Join Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Почему Washly?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Быстрый рост",
                  desc: "Мы растем на 30% каждый месяц. Растите вместе с нами!"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Инновации",
                  desc: "Работайте с новейшими технологиями и инструментами"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Команда",
                  desc: "Талантливая и дружная команда профессионалов"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Культура",
                  desc: "Открытая культура, где ценится каждый сотрудник"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Влияние",
                  desc: "Ваша работа влияет на тысячи пользователей"
                },
                {
                  icon: <Briefcase className="w-8 h-8" />,
                  title: "Гибкость",
                  desc: "Гибкий график и возможность удаленной работы"
                }
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Что мы предлагаем</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Конкурентная зарплата и бонусы",
                "Опционы компании для всех сотрудников",
                "Медицинская страховка",
                "Бесплатная подписка Washly Premium",
                "Обучение и развитие за счет компании",
                "Современный офис в центре Алматы",
                "Корпоративные мероприятия и тимбилдинги",
                "Возможность карьерного роста"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                    ✓
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Открытые вакансии</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span>📍 {position.location}</span>
                          <span>•</span>
                          <span>⏰ {position.type}</span>
                          <span>•</span>
                          <span>🏢 {position.department}</span>
                        </div>
                      </div>
                      <Button variant="default">
                        Подать заявку
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Не нашли подходящую вакансию? Отправьте свое резюме!
            </p>
            <Button size="lg" variant="outline">
              Отправить резюме
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
