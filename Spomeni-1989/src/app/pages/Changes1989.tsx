import { Calendar } from "lucide-react";

export function Changes1989() {
  const timelineEvents = [
    {
      date: "10 ноември 1989 г.",
      title: "Смяна на ръководството",
      description:
        "Тодор Живков, който управлява България в продължение на 35 години, е принуден да подаде оставка. Това поставя началото на края на комунистическото управление в страната.",
      phase: "Начало",
    },
    {
      date: "Декември 1989 г.",
      title: "Формиране на опозиция",
      description:
        "Създаден е Съюзът на демократичните сили (СДС), който обединява различни опозиционни движения и се превръща в основна политическа сила срещу комунистическата партия.",
      phase: "Организация",
    },
    {
      date: "Януари 1990 г.",
      title: "Премахване на Член 1",
      description:
        "Премахнат е Член 1 от конституцията, който гарантира ръководната роля на Българската комунистическа партия, с което се слага край на еднопартийната система.",
      phase: "Реформа",
    },
    {
      date: "Юни 1990 г.",
      title: "Първи многопартийни избори",
      description:
        "Провеждат се първите многопартийни избори след десетилетия еднопартийно управление. Гражданите могат да избират между различни политически партии.",
      phase: "Демокрация",
    },
    {
      date: "1991 г.",
      title: "Нова конституция",
      description:
        "Приета е нова демократична конституция, която установява България като парламентарна република и гарантира основни човешки права и свободи.",
      phase: "Нова ера",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4 sm:px-0">
        <div className="text-xs tracking-[0.3em] text-[#d4af37] opacity-80">РАЗДЕЛ 05</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">Промените от 1989 г.</h1>
        <p className="text-[#b8b5b0] leading-relaxed">
          Как България премина от комунистическо управление към демокрация и ключовите събития, които оформиха тази трансформация
        </p>
      </div>

      {/* Context */}
      <div className="max-w-4xl mx-auto border-l-2 border-[#d4af37] pl-4 sm:pl-6 space-y-4">
        <h2 className="text-xl sm:text-2xl tracking-wide">Падането на комунизма</h2>
        <p className="text-[#b8b5b0] leading-relaxed">
          Годината 1989 беляза повратна точка в европейската история. В цяла Източна Европа комунистическите
          правителства се разпадаха. Берлинската стена падна през ноември 1989 г., а България скоро последва
          със собствен мирен преход. Тези промени настъпиха след десетилетия на икономически проблеми, обществено
          недоволство и натиск от реформаторски движения вътре в самата Комунистическа партия.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <div className="h-px bg-[#4a443d] flex-1" />
          <h2 className="text-lg sm:text-xl tracking-wide">Хронология на събитията</h2>
          <div className="h-px bg-[#4a443d] flex-1" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-[#4a443d]" />

          <div className="space-y-8 sm:space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-12 sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-6 top-2 w-5 h-5 rounded-full border-2 border-[#d4af37] bg-[#2a2520]" />

                <div className="bg-[#1f1b17] border border-[#4a443d] p-4 sm:p-6 rounded-sm space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <Calendar className="w-4 h-4 text-[#d4af37]" />
                    <span className="text-sm tracking-wide text-[#d4af37]">{event.date}</span>
                    <span className="text-xs tracking-[0.2em] text-[#b8b5b0] opacity-60">
                      {event.phase}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl tracking-wide">{event.title}</h3>
                  <p className="text-[#b8b5b0] leading-relaxed text-sm sm:text-base">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-4xl mx-auto mt-12 sm:mt-16 space-y-6">
        <h2 className="text-xl sm:text-2xl tracking-wide text-center">Въздействие върху българското общество</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-[#1f1b17] border border-[#4a443d] p-4 sm:p-6 rounded-sm space-y-3">
            <h3 className="tracking-wide">Политическа свобода</h3>
            <p className="text-sm text-[#b8b5b0] leading-relaxed">
              Гражданите получиха правото да гласуват свободно, да създават политически партии и да изразяват мненията си
              без страх от преследване.
            </p>
          </div>

          <div className="bg-[#1f1b17] border border-[#4a443d] p-4 sm:p-6 rounded-sm space-y-3">
            <h3 className="tracking-wide">Икономически промени</h3>
            <p className="text-sm text-[#b8b5b0] leading-relaxed">
              Преходът към пазарна икономика донесе както възможности, така и предизвикателства, включително
              безработица, но и предприемачество.
            </p>
          </div>

          <div className="bg-[#1f1b17] border border-[#4a443d] p-4 sm:p-6 rounded-sm space-y-3">
            <h3 className="tracking-wide">Отворени граници</h3>
            <p className="text-sm text-[#b8b5b0] leading-relaxed">
              Българите вече можеха да пътуват свободно в чужбина, да имат достъп до западни медии и да се свързват с
              по-широкия свят.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
