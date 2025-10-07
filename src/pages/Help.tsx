import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Help = () => {
  const faqCategories = [
    {
      category: "Начало работы",
      questions: [
        {
          q: "Как начать пользоваться Washly?",
          a: "Скачайте приложение Washly из App Store или Google Play, зарегистрируйтесь, выберите подходящий план подписки и начните пользоваться услугами автомоек из нашей сети."
        },
        {
          q: "Какие документы нужны для регистрации?",
          a: "Для регистрации вам понадобится только номер телефона и email. Никаких дополнительных документов не требуется."
        },
        {
          q: "Сколько стоит подписка?",
          a: "Безлимитная подписка стоит 15,000₸ в месяц. Первая мойка бесплатно! Также доступен тариф с оплатой за каждую мойку - 2,000₸."
        }
      ]
    },
    {
      category: "Использование сервиса",
      questions: [
        {
          q: "Как пользоваться QR-кодом?",
          a: "Откройте приложение Washly, нажмите кнопку 'Начать мойку', покажите QR-код сотруднику мойки. Код обновляется каждые 60 секунд для безопасности."
        },
        {
          q: "Сколько раз я могу мыть машину?",
          a: "При безлимитной подписке вы можете мыть машину неограниченное количество раз в месяц без дополнительных платежей."
        },
        {
          q: "Как найти ближайшую мойку?",
          a: "В приложении Washly есть карта со всеми партнерскими мойками. Вы можете увидеть расстояние, время работы и загруженность каждой мойки."
        }
      ]
    },
    {
      category: "Оплата и подписка",
      questions: [
        {
          q: "Какие способы оплаты доступны?",
          a: "Мы принимаем Kaspi Pay и банковские карты (Visa, Mastercard). Оплата производится автоматически каждый месяц."
        },
        {
          q: "Можно ли отменить подписку?",
          a: "Да, вы можете отменить подписку в любой момент через приложение. Подписка будет активна до конца оплаченного периода."
        },
        {
          q: "Что если я не использовал подписку в этом месяце?",
          a: "К сожалению, неиспользованные мойки не переносятся на следующий месяц. Однако вы всегда можете поставить подписку на паузу."
        }
      ]
    },
    {
      category: "Технические вопросы",
      questions: [
        {
          q: "Приложение не работает, что делать?",
          a: "Попробуйте перезапустить приложение или переустановить его. Если проблема сохраняется, свяжитесь с нашей поддержкой."
        },
        {
          q: "QR-код не сканируется",
          a: "Убедитесь, что у вас стабильное интернет-соединение и яркость экрана на максимуме. QR-код обновляется каждые 60 секунд."
        },
        {
          q: "Как обновить данные карты?",
          a: "Зайдите в настройки приложения → Способы оплаты → Изменить карту. Следуйте инструкциям на экране."
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Центр помощи - Washly"
        description="Ответы на часто задаваемые вопросы о сервисе Washly. Узнайте, как пользоваться приложением и решить возможные проблемы."
      />
      
      <div className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Центр <span className="text-gradient-primary">помощи</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Найдите ответы на часто задаваемые вопросы или свяжитесь с нашей службой поддержки
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Позвонить</h3>
                <p className="text-sm text-muted-foreground mb-4">Пн-Вс 9:00-21:00</p>
                <Button variant="outline" size="sm">
                  +7 (700) 123-45-67
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">Ответим в течение 24 часов</p>
                <Button variant="outline" size="sm">
                  info@washly.kz
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Чат</h3>
                <p className="text-sm text-muted-foreground mb-4">Онлайн поддержка 24/7</p>
                <Button variant="outline" size="sm">
                  Начать чат
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Часто задаваемые вопросы</h2>
            
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem key={qIndex} value={`item-${catIndex}-${qIndex}`}>
                      <AccordionTrigger>{item.q}</AccordionTrigger>
                      <AccordionContent>
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
