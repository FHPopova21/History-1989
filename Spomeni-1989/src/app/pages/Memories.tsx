import { Quote } from "lucide-react";

export function Memories() {
  const memories = [
    {
      quote: "Ставахме рано, за да се наредим на опашка за хляб и мляко. Понякога чакахме с часове, а когато дойдеше нашият ред, стоката вече беше свършила.",
      author: "Жена, родена 1960 г.",
      year: "Разказ за ежедневието",
    },
    {
      quote: "В училище всичко беше подредено и строго. Носехме униформи и ни учеха да уважаваме партията. Имаше дисциплина, но и много правила.",
      author: "Мъж, роден 1955 г.",
      year: "Спомен за училище",
    },
    {
      quote: "Всеки имаше работа и това даваше сигурност. Не печелехме много, но знаехме, че утре ще има къде да работим.",
      author: "Жена, родена 1952 г.",
      year: "Спомен за работа",
    },
    {
      quote: "Слушахме западна музика тайно. Това беше нещо забранено, но много интересно за нас младите.",
      author: "Мъж, роден 1965 г.",
      year: "Спомен за младостта",
    },
    {
      quote: "Не можеше да говориш свободно за политика. Хората внимаваха какво казват, защото можеше да има последствия.",
      author: "Жена, родена 1958 г.",
      year: "Спомен за свободата",
    },
    {
      quote: "Почивахме на море в държавни станции. Не беше лукс, но беше хубаво – всички заедно, без много излишни неща.",
      author: "Мъж, роден 1962 г.",
      year: "Спомен за почивките",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4 sm:px-0">
        <div className="text-xs tracking-[0.3em] text-[#d4af37] opacity-80">РАЗДЕЛ 02</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">Спомени на хората</h1>
        <p className="text-[#b8b5b0] leading-relaxed">
          Лични истории и спомени от тези, които са живели през комунистическия период
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 sm:px-0">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="bg-[#1f1b17] border border-[#4a443d] p-6 sm:p-8 rounded-sm space-y-6 relative"
          >
            <Quote className="w-12 h-12 text-[#d4af37] opacity-20 absolute top-6 right-6" />

            <p className="text-[#b8b5b0] leading-relaxed italic relative z-10">
              "{memory.quote}"
            </p>

            <div className="pt-4 border-t border-[#4a443d] space-y-1">
              <p className="tracking-wide">{memory.author}</p>
              <p className="text-sm text-[#d4af37] opacity-80">{memory.year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-12 sm:mt-16 border-l-2 border-[#d4af37] pl-4 sm:pl-6 mx-4 sm:mx-auto">
        <p className="text-sm text-[#b8b5b0] leading-relaxed italic">
          Тези спомени представят различни преживявания от различни хора. Докато някои аспекти на
          комунистическия живот осигуряваха сигурност и равенство, много хора също изпитваха трудности,
          ограничения и липса на свобода. Историята на всеки човек е уникална и ценна за разбирането на
          този сложен период от историята.
        </p>
      </div>
    </div>
  );
}
