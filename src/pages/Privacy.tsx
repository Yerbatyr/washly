import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Политика конфиденциальности - Washly"
        description="Политика конфиденциальности Washly. Узнайте, как мы собираем, используем и защищаем вашу личную информацию."
      />
      
      <div className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8">Политика конфиденциальности</h1>
          <p className="text-muted-foreground mb-8">Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Введение</h2>
              <p className="text-muted-foreground leading-relaxed">
                Washly ("мы", "наш", "нас") уважает вашу конфиденциальность и обязуется защищать ваши личные данные. Эта Политика конфиденциальности объясняет, как мы собираем, используем, храним и защищаем вашу информацию при использовании нашего сервиса.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Какую информацию мы собираем</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Информация, которую вы предоставляете:</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Имя и фамилия</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты</li>
                <li>Информация о платежах (обрабатывается через безопасные платежные шлюзы)</li>
                <li>Информация об автомобиле (марка, модель, номер)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Автоматически собираемая информация:</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Данные о местоположении (с вашего согласия)</li>
                <li>Информация об устройстве (модель, операционная система, уникальные идентификаторы)</li>
                <li>История использования сервиса</li>
                <li>Логи и данные об использовании приложения</li>
                <li>Cookies и аналогичные технологии отслеживания</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Как мы используем вашу информацию</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мы используем собранную информацию для следующих целей:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Предоставление и поддержание работы Сервиса</li>
                <li>Обработка платежей и управление подписками</li>
                <li>Отправка уведомлений о вашей подписке и использовании сервиса</li>
                <li>Предоставление поддержки клиентам</li>
                <li>Улучшение и персонализация наших услуг</li>
                <li>Анализ использования для улучшения функциональности</li>
                <li>Предотвращение мошенничества и обеспечение безопасности</li>
                <li>Соблюдение юридических обязательств</li>
                <li>Отправка маркетинговых сообщений (с вашего согласия)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Передача информации третьим лицам</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мы можем передавать вашу информацию следующим третьим лицам:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Партнерские автомойки:</strong> Для предоставления услуг</li>
                <li><strong>Платежные процессоры:</strong> Kaspi Pay, Stripe для обработки платежей</li>
                <li><strong>Поставщики облачных услуг:</strong> Для хранения данных</li>
                <li><strong>Аналитические сервисы:</strong> Для анализа использования приложения</li>
                <li><strong>Правоохранительные органы:</strong> При наличии юридических оснований</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Мы требуем от всех третьих лиц соблюдения конфиденциальности и защиты ваших данных.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Безопасность данных</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мы применяем технические и организационные меры для защиты ваших данных:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Шифрование данных при передаче (SSL/TLS)</li>
                <li>Шифрование данных в хранилище</li>
                <li>Регулярные проверки безопасности</li>
                <li>Ограниченный доступ к личным данным</li>
                <li>Двухфакторная аутентификация для сотрудников</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Однако, несмотря на наши усилия, ни один метод передачи через интернет не является полностью безопасным.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Ваши права</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                В соответствии с законодательством Республики Казахстан вы имеете право:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Получить доступ к вашим личным данным</li>
                <li>Исправить неточные или неполные данные</li>
                <li>Удалить ваши данные ("право на забвение")</li>
                <li>Ограничить обработку ваших данных</li>
                <li>Возражать против обработки ваших данных</li>
                <li>Получить копию ваших данных в машиночитаемом формате</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Для реализации этих прав свяжитесь с нами по адресу: privacy@washly.kz
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Хранение данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы храним ваши личные данные только в течение периода, необходимого для достижения целей, указанных в этой Политике, или в соответствии с требованиями законодательства. После удаления вашей учетной записи мы удаляем или анонимизируем ваши данные в течение 90 дней.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мы используем cookies и аналогичные технологии для:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Запоминания ваших предпочтений</li>
                <li>Анализа использования сервиса</li>
                <li>Персонализации контента</li>
                <li>Обеспечения безопасности</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Вы можете управлять cookies через настройки вашего браузера.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Дети</h2>
              <p className="text-muted-foreground leading-relaxed">
                Наш Сервис не предназначен для лиц младше 18 лет. Мы сознательно не собираем личную информацию от детей. Если вы узнали, что ваш ребенок предоставил нам личную информацию, свяжитесь с нами.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Изменения в Политике</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы можем обновлять эту Политику конфиденциальности время от времени. Мы уведомим вас о существенных изменениях через приложение или по электронной почте. Дата последнего обновления указана вверху этой страницы.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Контакты</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Если у вас есть вопросы о нашей Политике конфиденциальности или обработке ваших данных, свяжитесь с нами:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>Email: privacy@washly.kz</li>
                <li>Телефон: +7 (700) 123-45-67</li>
                <li>Адрес: г. Алматы, проспект Достык 123</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Согласие</h2>
              <p className="text-muted-foreground leading-relaxed">
                Используя наш Сервис, вы соглашаетесь со сбором и использованием информации в соответствии с настоящей Политикой конфиденциальности.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
