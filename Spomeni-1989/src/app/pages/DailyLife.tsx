import { Briefcase, School, ShoppingCart, Tv } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function DailyLife() {
  const topics = [
    {
      icon: Briefcase,
      title: "Работа и професии",
      content: "Държавата гарантираше работа на всеки. Безработица практически не съществуваше, но работниците имаха малък избор в кариерата си. Държавата разпределяше работните места въз основа на нуждите и образованието. Заплатите бяха ниски, но стабилни, и имаше малко неравенство в доходите. Хората работеха в държавни фабрики, ферми и офиси.",
    },
    {
      icon: School,
      title: "Училищен живот",
      content: "Образованието беше безплатно и задължително до гимназията. Училищата следваха строги учебни програми, определени от правителството, със силен фокус върху науката, математиката и комунистическата идеология. Учениците носеха униформи и изучаваха руски като втори език. Висшето образование беше достъпно, но с голяма конкуренция.",
    },
    {
      icon: ShoppingCart,
      title: "Магазини и дефицити",
      content: "Магазините бяха държавна собственост с фиксирани цени. Дългите опашки бяха чести, особено за месо, плодове и други качествени стоки. Много артикули се даваха с купони или просто липсваха. Хората използваха връзки и черния пазар, за да се сдобият с по-добри продукти. Пазаруването изискваше търпение и планиране.",
    },
    {
      icon: Tv,
      title: "Медии и телевизия",
      content: "Всички медии бяха контролирани от държавата. Имаше само един телевизионен канал, който излъчваше пропаганда, новини и одобрено забавление. Чуждите медии бяха забранени или строго цензурирани. Хората тайно слушаха нелегални западни радиостанции. Вестниците печатаха само одобрена от правителството информация.",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4 sm:px-0">
        <div className="text-xs tracking-[0.3em] text-[#d4af37] opacity-80">РАЗДЕЛ 01</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">Ежедневие</h1>
        <p className="text-[#b8b5b0] leading-relaxed">
          Как обикновените българи живееха, работеха, учеха и прекарваха времето си при комунистическата система
        </p>
      </div>

      {/* Supporting Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 sm:px-0">
        <div className="relative overflow-hidden rounded-sm border border-[#4a443d]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1680634658361-1e3a483d2138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Vintage classroom"
            className="h-48 sm:h-64 w-full object-cover grayscale opacity-80"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1f1b17] to-transparent p-4">
            <p className="text-xs tracking-wide text-[#b8b5b0]">Образователна система</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-sm border border-[#4a443d]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1728074136649-e21f04bcb997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Bulgaria building"
            className="h-48 sm:h-64 w-full object-cover grayscale opacity-80"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1f1b17] to-transparent p-4">
            <p className="text-xs tracking-wide text-[#b8b5b0]">Градска архитектура</p>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <div
              key={index}
              className="bg-[#1f1b17] border border-[#4a443d] p-6 sm:p-8 rounded-sm space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#2a2520] border border-[#4a443d] rounded-sm">
                  <Icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="text-xl tracking-wide">{topic.title}</h3>
              </div>
              <p className="text-[#b8b5b0] leading-relaxed">{topic.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
