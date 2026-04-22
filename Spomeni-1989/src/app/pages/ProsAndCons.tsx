import { Check, X } from "lucide-react";

export function ProsAndCons() {
  const pros = [
    {
      title: "Гарантирана заетост",
      description: "Всеки имаше работа и доходи. Безработица почти не съществуваше.",
    },
    {
      title: "Безплатно образование",
      description: "Всички нива на образование, включително университетското, бяха напълно безплатни.",
    },
    {
      title: "Безплатно здравеопазване",
      description: "Медицинските грижи бяха предоставяни от държавата безплатно за гражданите.",
    },
    {
      title: "Социално равенство",
      description: "Малка разлика в доходите между работниците. Всички имаха сходен стандарт на живот.",
    },
    {
      title: "Жилищна помощ",
      description: "Държавата осигуряваше достъпни жилища за работниците и семействата.",
    },
    {
      title: "Социални придобивки за почивка",
      description: "Работниците получаваха платен отпуск и достъп до държавни почивни станции.",
    },
  ];

  const cons = [
    {
      title: "Липса на свобода на словото",
      description: "Гражданите не можеха да критикуват правителството или да изразяват опозиционни политически възгледи.",
    },
    {
      title: "Контролирани медии",
      description: "Всички вестници, телевизия и радио бяха цензурирани и контролирани от държавата.",
    },
    {
      title: "Икономически дефицити",
      description: "Дългите опашки и празните рафтове бяха често срещани. Много стоки липсваха.",
    },
    {
      title: "Ограничения за пътуване",
      description: "Гражданите не можеха да пътуват свободно в чужбина. Паспортите се контролираха от държавата.",
    },
    {
      title: "Ограничен избор на кариера",
      description: "Държавата разпределяше работните места. Хората имаха малък избор за кариерния си път.",
    },
    {
      title: "Наблюдение и страх",
      description: "Тайните служби наблюдаваха гражданите. Страхът да бъдеш докладван беше постоянен.",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4 sm:px-0">
        <div className="text-xs tracking-[0.3em] text-[#d4af37] opacity-80">РАЗДЕЛ 04</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">Предимства и недостатъци</h1>
        <p className="text-[#b8b5b0] leading-relaxed">
          Балансиран преглед на положителните и отрицателните аспекти на комунистическото управление в България
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-0">
        {/* Pros Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[#4a6d4a]">
            <div className="p-2 bg-[#2d3f2d] border border-[#4a6d4a] rounded-sm">
              <Check className="w-5 h-5 text-[#7fb77f]" />
            </div>
            <h2 className="text-xl sm:text-2xl tracking-wide">Положителни аспекти</h2>
          </div>

          {pros.map((pro, index) => (
            <div
              key={index}
              className="bg-[#1f1b17] border border-[#4a6d4a] p-4 sm:p-6 rounded-sm space-y-2"
            >
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#7fb77f] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="tracking-wide mb-1">{pro.title}</h3>
                  <p className="text-sm text-[#b8b5b0] leading-relaxed">{pro.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cons Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[#6d4a4a]">
            <div className="p-2 bg-[#3f2d2d] border border-[#6d4a4a] rounded-sm">
              <X className="w-5 h-5 text-[#b77f7f]" />
            </div>
            <h2 className="text-xl sm:text-2xl tracking-wide">Отрицателни аспекти</h2>
          </div>

          {cons.map((con, index) => (
            <div
              key={index}
              className="bg-[#1f1b17] border border-[#6d4a4a] p-4 sm:p-6 rounded-sm space-y-2"
            >
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#b77f7f] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="tracking-wide mb-1">{con.title}</h3>
                  <p className="text-sm text-[#b8b5b0] leading-relaxed">{con.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12 sm:mt-16 border-l-2 border-[#d4af37] pl-4 sm:pl-6 mx-4 sm:mx-auto">
        <p className="text-[#b8b5b0] leading-relaxed text-sm sm:text-base">
          Разбирането на историята изисква да се разгледат и двете страни. Докато комунистическата система осигуряваше определена
          сигурност и ползи, тя също така ограничаваше основни свободи, които много хора ценят. Различните хора са преживели този период
          различно въз основа на своите обстоятелства, убеждения и лични преживявания.
        </p>
      </div>
    </div>
  );
}
