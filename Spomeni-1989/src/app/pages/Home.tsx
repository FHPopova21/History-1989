import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-sm border border-[#4a443d]">
        <div className="relative h-[400px] sm:h-[500px]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1603104482546-f5d8f66034d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Bulgaria communist era street"
            className="h-full w-full object-cover grayscale opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a2520] via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="space-y-4 max-w-3xl">
            <div className="text-xs tracking-[0.3em] text-[#d4af37] opacity-80">
              1944 — 1989
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#e8e6e3] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
              Животът в България преди 1989
            </h1>
            <p className="text-base sm:text-lg tracking-wide text-[#b8b5b0] max-w-2xl mx-auto [text-shadow:_1px_1px_4px_rgb(0_0_0_/_60%)] px-4">
              Изследване на ежедневието през комунистическия период в България
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="border-l-2 border-[#d4af37] pl-4 sm:pl-6">
          <h2 className="text-xl sm:text-2xl tracking-wide mb-4">Исторически контекст</h2>
          <div className="space-y-4 text-[#b8b5b0] leading-relaxed">
            <p>
              От 1944 до 1989 г. България се намира под комунистическо управление като част от Източния блок.
              Българската комунистическа партия, начело с ръководители като Тодор Живков, контролира всеки
              аспект от обществото, включително икономиката, медиите, образованието и ежедневието.
            </p>
            <p>
              Този период е белязан както от постижения, така и от предизвикателства. Докато държавата осигурява
              гарантирана заетост, безплатно образование и здравеопазване, гражданите се сблъскват с ограничени лични
              свободи, контролирани медии, икономически дефицити и ограничения при пътуване и изразяване.
            </p>
            <p>
              Този архив изследва какъв е бил в действителност животът на обикновените българи през тези
              45 години, разглеждайки както положителните, така и отрицателните аспекти на комунистическата система
              преди демократичните промени през 1989 г.
            </p>
          </div>
        </div>

        {/* Key Themes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 sm:mt-12">
          <div className="bg-[#1f1b17] border border-[#4a443d] p-4 sm:p-6 rounded-sm">
            <div className="text-sm tracking-[0.2em] text-[#d4af37] mb-3">ОБЩЕСТВО</div>
            <h3 className="mb-2">Контролирана свобода</h3>
            <p className="text-sm text-[#b8b5b0] leading-relaxed">
              Животът е организиран около държавния контрол, колективната собственост и строгите социални правила.
            </p>
          </div>

          <div className="bg-[#1f1b17] border border-[#4a443d] p-4 sm:p-6 rounded-sm">
            <div className="text-sm tracking-[0.2em] text-[#d4af37] mb-3">ИКОНОМИКА</div>
            <h3 className="mb-2">Планова система</h3>
            <p className="text-sm text-[#b8b5b0] leading-relaxed">
              Централното планиране определя производството, цените и разпределението на всички стоки.
            </p>
          </div>

          <div className="bg-[#1f1b17] border border-[#4a443d] p-4 sm:p-6 rounded-sm">
            <div className="text-sm tracking-[0.2em] text-[#d4af37] mb-3">КУЛТУРА</div>
            <h3 className="mb-2">Държавно влияние</h3>
            <p className="text-sm text-[#b8b5b0] leading-relaxed">
              Образованието, медиите и изкуствата са оформени от комунистическата идеология и цензура.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
