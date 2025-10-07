import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      <SEO 
        title="О нас - Washly"
        description="Узнайте больше о Washly - революционном сервисе автомоек в Казахстане. Наша миссия, ценности и команда."
      />
      
      <div className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              О <span className="text-gradient-primary">Washly</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы меняем индустрию автомоек в Казахстане, делая их доступными, удобными и технологичными
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Сделать автомойку доступной каждому автовладельцу в Казахстане через инновационную модель безлимитной подписки и современные технологии.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Наше видение</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Стать №1 сервисом автомоек в Центральной Азии, создавая экосистему, которая объединяет водителей и автомойки по всему региону.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Наша история</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Washly был основан в 2024 году группой технологических энтузиастов и предпринимателей, которые устали от дорогих и неудобных автомоек.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мы заметили, что средний автовладелец в Алматы тратит более 75,000₸ в месяц на автомойки, при этом сталкиваясь с неудобным графиком работы и непрозрачным ценообразованием.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Так родилась идея Washly - безлимитная подписка на автомойки с единой ценой, удобным приложением и сетью проверенных партнеров по всему городу.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Наши ценности</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Забота о клиентах",
                  desc: "Мы ставим потребности наших клиентов на первое место"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Партнерство",
                  desc: "Мы строим долгосрочные отношения с нашими мойками"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Инновации",
                  desc: "Мы используем технологии для улучшения сервиса"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Качество",
                  desc: "Мы гарантируем высокое качество каждой мойки"
                }
              ].map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-12 text-center">Наши достижения</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10K+", label: "Активных клиентов" },
                { number: "50+", label: "Партнерских моек" },
                { number: "100K+", label: "Выполненных моек" },
                { number: "12M₸", label: "Сэкономлено клиентами" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
