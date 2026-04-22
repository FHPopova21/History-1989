import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Gallery() {
  const categories = [
    {
      title: "Технологии",
      images: [
        {
          src: "https://images.unsplash.com/photo-1609514235215-f7ee72e48cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          caption: "Пишещите машини бяха основната технология за писане",
        },
        {
          src: "https://images.unsplash.com/photo-1561714099-e24328457705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          caption: "Ръчни инструменти в офисите и домовете",
        },
      ],
    },
    {
      title: "Училище",
      images: [
        {
          src: "https://images.unsplash.com/photo-1680634658361-1e3a483d2138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          caption: "Ученици в униформи в класните стаи",
        },
        {
          src: "https://images.unsplash.com/photo-1617755403929-beee5daffbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          caption: "Училищни шкафчета и коридори",
        },
      ],
    },
    {
      title: "Ежедневие",
      images: [
        {
          src: "https://images.unsplash.com/photo-1603104482546-f5d8f66034d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          caption: "Градски улици и транспорт",
        },
        {
          src: "https://images.unsplash.com/photo-1756485433533-f3de5b3d28f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          caption: "Изоставена инфраструктура",
        },
      ],
    },
    {
      title: "Архитектура",
      images: [
        {
          src: "https://images.unsplash.com/photo-1728074136649-e21f04bcb997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          caption: "Бруталистични жилищни блокове",
        },
        {
          src: "https://images.unsplash.com/photo-1583413871034-7eefb99f78e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          caption: "Сгради от социалистическата ера",
        },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4 sm:px-0">
        <div className="text-xs tracking-[0.3em] text-[#d4af37] opacity-80">РАЗДЕЛ 03</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">Визуален архив</h1>
        <p className="text-[#b8b5b0] leading-relaxed">
          Фотографска колекция, изобразяваща различни аспекти на живота през комунистическия период
        </p>
      </div>

      <div className="space-y-12 sm:space-y-16 px-4 sm:px-0">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px bg-[#4a443d] flex-1" />
              <h2 className="text-xl sm:text-2xl tracking-wide">{category.title}</h2>
              <div className="h-px bg-[#4a443d] flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {category.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="group relative overflow-hidden rounded-sm border border-[#4a443d] bg-[#1f1b17]"
                >
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <ImageWithFallback
                      src={image.src}
                      alt={image.caption}
                      className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-[#1f1b17]">
                    <p className="text-sm text-[#b8b5b0] tracking-wide">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-12 sm:mt-16 text-center px-4">
        <p className="text-xs text-[#b8b5b0] opacity-60 tracking-wide">
          Изображенията са представителни за епохата и стила • За целите на историческата документация
        </p>
      </div>
    </div>
  );
}
