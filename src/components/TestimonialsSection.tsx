import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Асылбек Казбеков",
      role: "Предприниматель",
      avatar: "АК",
      text: "Экономлю 60,000₸ каждый месяц! Мою машину 3 раза в неделю и плачу как за 6 моек в обычной мойке",
      gradient: "bg-gradient-primary"
    },
    {
      name: "Марат Абдуллаев",
      role: "Таксист",
      avatar: "МА",
      text: "Мою 15 раз в месяц, плачу как за 6! Невероятно!",
      gradient: "bg-gradient-secondary"
    },
    {
      name: "Айгерим Жакупова",
      role: "Менеджер",
      avatar: "АЖ",
      text: "QR код - это магия! 30 секунд и готово",
      gradient: "bg-gradient-accent"
    },
    {
      name: "Даулет Сарсенбаев",
      role: "IT директор",
      avatar: "ДС",
      text: "Экономлю 80,000₸ в год. Жена тоже подключилась!",
      gradient: "bg-primary"
    },
    {
      name: "Жанна Касымова",
      role: "Врач",
      avatar: "ЖК",
      text: "Качество мойки как в премиуме, а цена - копейки",
      gradient: "bg-secondary"
    },
    {
      name: "Бауржан Темирбеков",
      role: "Бизнесмен",
      avatar: "БТ",
      text: "3 автомобиля - один тариф. Гениально!",
      gradient: "bg-accent"
    },
    {
      name: "Сабина Нурмуханбетова",
      role: "Дизайнер",
      avatar: "СН",
      text: "Машина всегда чистая, а кошелек полный!",
      gradient: "bg-gradient-hero"
    },
    {
      name: "Алмат Оспанов",
      role: "Банкир",
      avatar: "АО",
      text: "Сервис мирового уровня прямо в Алматы",
      gradient: "bg-gradient-primary"
    },
    {
      name: "Динара Есимова",
      role: "Юрист",
      avatar: "ДЕ",
      text: "Забыла что такое грязная машина!",
      gradient: "bg-gradient-secondary"
    },
    {
      name: "Руслан Кадыров",
      role: "Логист",
      avatar: "РК",
      text: "Экономия времени и денег - то что нужно",
      gradient: "bg-gradient-accent"
    },
    {
      name: "Камила Бекмуханова",
      role: "Блогер",
      avatar: "КБ",
      text: "Уже всем друзьям посоветовала ShineGo",
      gradient: "bg-primary"
    },
    {
      name: "Ерлан Токтаров",
      role: "Инженер",
      avatar: "ЕТ",
      text: "Технологии будущего уже сегодня!",
      gradient: "bg-secondary"
    }
  ];

  // Разделяем отзывы на три ряда
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);
  const row3 = testimonials.slice(8, 12);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <Card className="min-w-[300px] mx-4 bg-card/80 backdrop-blur-sm border border-border/50 hover:scale-105 transition-transform duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 rounded-full ${testimonial.gradient} flex items-center justify-center text-white font-bold shadow-lg`}>
            {testimonial.avatar}
          </div>
          <div>
            <div className="font-semibold text-foreground">{testimonial.name}</div>
            <div className="text-sm text-foreground/60">{testimonial.role}</div>
            <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
        <p className="text-foreground/80 text-sm leading-relaxed">"{testimonial.text}"</p>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Что говорят наши <span className="text-gradient-primary">клиенты</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Более 10,000 довольных пользователей уже экономят деньги и время с ShineGo
          </p>
        </div>
      </div>

      {/* Движущиеся ряды отзывов */}
      <div className="space-y-8">
        {/* Первый ряд - движется влево */}
        <div className="relative">
          <div className="flex animate-[scroll-left_30s_linear_infinite] hover:pause">
            {[...row1, ...row1, ...row1].map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Второй ряд - движется вправо */}
        <div className="relative">
          <div className="flex animate-[scroll-right_35s_linear_infinite] hover:pause">
            {[...row2, ...row2, ...row2].map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Третий ряд - движется влево */}
        <div className="relative">
          <div className="flex animate-[scroll-left_40s_linear_infinite] hover:pause">
            {[...row3, ...row3, ...row3].map((testimonial, index) => (
              <TestimonialCard key={`row3-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Градиенты по краям для плавного исчезновения */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default TestimonialsSection;