export default function Featured() {
  return (
    <div id="details" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{ backgroundColor: "#fdf4f7" }}>
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Атмосфера праздника"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-xs tracking-widest" style={{ color: "#c06080", fontFamily: "'Montserrat', sans-serif" }}>
          Мои любимые девочки
        </h3>
        <p
          className="text-2xl lg:text-4xl mb-8 leading-snug"
          style={{ color: "#3d1f2c", fontFamily: "'Playfair Display', serif" }}
        >
          Тридцать лет — это та самая дата, когда хочется собрать вас всех вместе.
        </p>
        <p className="text-base leading-relaxed mb-6" style={{ color: "#6b3f53", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
          Я жду нашего смеха, долгих обнимашек и того чувства, когда «свои» рядом.
          Мы встретимся в The Green Dacha — там, где пахнет деревом и тишиной.
          Будем пить то, что любим, говорить о важном и не очень, танцевать под свой плейлист
          и просто быть собой.
        </p>
        <div className="border-l-2 pl-5 mb-8" style={{ borderColor: "#e8a0b8" }}>
          <p className="text-sm italic leading-relaxed" style={{ color: "#8a4f65", fontFamily: "'Playfair Display', serif" }}>
            Цвет нашего вечера — абсолютно любой розовый, такой же нежный, как мы с вами.
            Приходите в том, в чём вам будет уютно и красиво.
          </p>
        </div>
        <div className="p-5 rounded-sm" style={{ backgroundColor: "#fce8f0" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#6b3f53", fontFamily: "'Montserrat', sans-serif" }}>
            <span className="font-semibold">P.S.</span> Никаких мужчин и детей — только мы.
            Для них я придумала отдельный сюрприз на нашей даче в Осеченках,
            так что никто не будет скучать и отвлекать нас. 🌿
          </p>
        </div>
      </div>
    </div>
  );
}
