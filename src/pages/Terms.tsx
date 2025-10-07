import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <>
      <SEO 
        title="Условия использования - Washly"
        description="Условия использования сервиса Washly. Ознакомьтесь с правилами и условиями пользования нашим сервисом."
      />
      
      <div className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8">Условия использования</h1>
          <p className="text-muted-foreground mb-8">Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Настоящие Условия использования ("Условия") регулируют ваш доступ и использование сервиса Washly, включая наше мобильное приложение, веб-сайт и все связанные услуги (совместно именуемые "Сервис").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Используя наш Сервис, вы соглашаетесь с настоящими Условиями. Если вы не согласны с какой-либо частью Условий, вы не можете использовать наш Сервис.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Учетная запись</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Для использования определенных функций Сервиса вам необходимо создать учетную запись. Вы обязуетесь:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Предоставлять точную и актуальную информацию при регистрации</li>
                <li>Поддерживать безопасность вашей учетной записи</li>
                <li>Немедленно уведомлять нас о любом несанкционированном использовании</li>
                <li>Не передавать свою учетную запись третьим лицам</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Подписка и платежи</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>3.1 Планы подписки:</strong> Мы предлагаем различные планы подписки с разными уровнями доступа к услугам автомоек.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>3.2 Оплата:</strong> Оплата производится через Kaspi Pay или банковские карты. Подписка автоматически продлевается каждый месяц, если не отменена.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>3.3 Отмена:</strong> Вы можете отменить подписку в любое время через приложение. Отмена вступает в силу в конце текущего платежного периода.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>3.4 Возврат средств:</strong> Возврат средств возможен в течение 7 дней с момента первой оплаты, если вы не воспользовались услугами.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Использование Сервиса</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                При использовании Сервиса вы обязуетесь:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Соблюдать все применимые законы и правила</li>
                <li>Не использовать Сервис для мошеннических целей</li>
                <li>Не делиться своим QR-кодом с другими лицами</li>
                <li>Соблюдать правила и требования партнерских автомоек</li>
                <li>Не злоупотреблять безлимитной подпиской</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Права интеллектуальной собственности</h2>
              <p className="text-muted-foreground leading-relaxed">
                Все права на Сервис, включая программное обеспечение, дизайн, логотипы и контент, принадлежат Washly или нашим лицензиарам. Вы получаете ограниченную лицензию на использование Сервиса исключительно для личных целей.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Ограничение ответственности</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Сервис предоставляется "как есть". Мы не несем ответственности за:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Качество услуг, предоставляемых партнерскими автомойками</li>
                <li>Повреждения автомобиля, произошедшие на автомойке</li>
                <li>Задержки или недоступность Сервиса</li>
                <li>Потерю данных или несанкционированный доступ к вашей учетной записи</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Прекращение использования</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы оставляем за собой право приостановить или прекратить ваш доступ к Сервису в любое время без предварительного уведомления в случае нарушения настоящих Условий или подозрения в мошенничестве.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Изменения в Условиях</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы можем изменять настоящие Условия время от времени. Об изменениях мы уведомим вас через приложение или по электронной почте. Продолжение использования Сервиса после изменений означает ваше согласие с новыми Условиями.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Применимое право</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящие Условия регулируются законодательством Республики Казахстан. Все споры подлежат разрешению в судах города Алматы.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Контакты</h2>
              <p className="text-muted-foreground leading-relaxed">
                Если у вас есть вопросы по настоящим Условиям, свяжитесь с нами:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-4">
                <li>Email: legal@washly.kz</li>
                <li>Телефон: +7 (700) 123-45-67</li>
                <li>Адрес: г. Алматы, проспект Достык 123</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
