export function MyOpinion() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4 sm:px-0">
        <div className="text-xs tracking-[0.3em] text-[#d4af37] opacity-80">РАЗДЕЛ 06</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">Моето мнение</h1>
        <p className="text-[#b8b5b0] leading-relaxed">
          Личен размисъл за живота в България преди 1989 г.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8 px-4 sm:px-0">
        <div className="bg-[#1f1b17] border-l-4 border-[#d4af37] p-6 sm:p-8 rounded-sm">
          <div className="space-y-6 text-[#b8b5b0] leading-relaxed text-sm sm:text-base">
            <p>
              След като разгледах как са живели хората в България преди 1989 г., разбрах, че животът тогава е бил много различен от днешния. Имало е някои хубави неща, но и доста трудности.
            </p>

            <p>
              От една страна, хората са имали сигурна работа и безплатно образование и здравеопазване. Това е давало спокойствие на много семейства.
            </p>

            <p>
              От друга страна, не е имало достатъчно свобода. Хората не са можели да говорят открито за всичко, нито да пътуват свободно в чужбина. Това според мен е било голям недостатък.
            </p>

            <p>
              Най-интересното за мен беше, че различните хора си спомнят този период по различен начин. Някои го описват като спокоен, а други – като труден и ограничаващ.
            </p>

            <p>
              Според мен е важно да познаваме този период, за да разбираме по-добре как се е развила България и защо днес имаме повече свободи.
            </p>

            <p className="pt-4 border-t border-[#4a443d] italic">
              Този проект ми помогна да науча повече за миналото и да чуя истински истории от хора, които са живели тогава.
            </p>
          </div>
        </div>

        <div className="text-center space-y-4 pt-8">
          <div className="inline-block bg-[#1f1b17] border border-[#4a443d] px-4 sm:px-6 py-3 rounded-sm">
            <p className="text-sm tracking-wide text-[#d4af37]">
              "Тези, които не могат да си спомнят миналото, са осъдени да го повторят."
            </p>
            <p className="text-xs text-[#b8b5b0] mt-2 opacity-60">— Джордж Сантаяна</p>
          </div>
        </div>
      </div>
    </div>
  );
}
