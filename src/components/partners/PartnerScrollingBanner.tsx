const scrollingMessages = [
  "🚀 Средний рост выручки 300% за 6 месяцев",
  "💰 Более 50 партнерских станций уже зарабатывают с нами",
  "⚡ Подключение за 24 часа без стартовых взносов",
  "🎯 10,000+ готовых клиентов ждут вашу мойку",
  "📈 Гарантия увеличения потока клиентов в 2 раза",
  "💎 Первая неделя работы БЕСПЛАТНО для новых партнеров",
  "🔥 Автоматизация 80% операций - меньше головной боли",
  "✅ Стабильный доход даже в низкий сезон"
];

const PartnerScrollingBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden relative">
      <div className="flex animate-scroll-banner whitespace-nowrap">
        {/* First set of messages */}
        {scrollingMessages.map((message, index) => (
          <span
            key={`first-${index}`}
            className="inline-flex items-center px-8 text-sm font-bold"
          >
            {message}
          </span>
        ))}
        {/* Duplicate set for seamless loop */}
        {scrollingMessages.map((message, index) => (
          <span
            key={`second-${index}`}
            className="inline-flex items-center px-8 text-sm font-bold"
          >
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PartnerScrollingBanner;
