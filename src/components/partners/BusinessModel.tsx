const BusinessModel = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-8 text-primary-foreground">
            Как это работает для вашего бизнеса
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "ПОДКЛЮЧЕНИЕ",
                description: "Устанавливаем QR-систему на вашей мойке за 1 день. Никаких сложностей - все делаем мы."
              },
              {
                step: "2",
                title: "ПОТОК КЛИЕНТОВ",
                description: "10,000+ наших клиентов получают доступ к вашей мойке. Постоянный поток без рекламных затрат."
              },
              {
                step: "3",
                title: "ДОХОДЫ РАСТУТ",
                description: "Получаете 70% с каждой мойки + премиум-тарифы. Средний партнер зарабатывает 1,5M₸+ в месяц."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl font-black mb-4 text-primary-foreground">{item.step}</div>
                <h3 className="text-xl font-bold mb-3 text-primary-foreground">{item.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/30 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-primary-foreground">💰 ВАШИ ДОХОДЫ С WASHLY</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: "70%", label: "с каждой мойки безлимитных клиентов" },
                { value: "100%", label: "с разовых моек через приложение" },
                { value: "+50%", label: "премиальные услуги (воск, полировка)" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                  <div className="text-3xl font-black text-green-400 mb-2">{item.value}</div>
                  <p className="text-sm text-primary-foreground/90">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
