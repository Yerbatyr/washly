import { CheckCircle, Zap } from "lucide-react";

const PartnerRequirements = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-6">
              Требования к партнерам
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы работаем только с качественными мойками для поддержания репутации сети
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border-2 border-primary/20 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Обязательные требования
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Действующая автомойка с оборудованием",
                  "Стабильное электричество и интернет",
                  "Готовность к установке QR-системы",
                  "Соблюдение стандартов качества Washly"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border-2 border-secondary/20 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2" />
                Мы предоставляем
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "QR-оборудование и установку БЕСПЛАТНО",
                  "10,000+ готовых клиентов с первого дня",
                  "Маркетинг и продвижение вашей станции",
                  "Техподдержку и обучение персонала"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerRequirements;
