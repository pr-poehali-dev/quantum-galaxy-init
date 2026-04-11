export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between" style={{ backgroundColor: "#2a0e1a" }}>
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm tracking-widest" style={{ color: "#c06080", fontFamily: "'Montserrat', sans-serif" }}>
                  Вечер
                </h3>
                <span className="text-sm sm:text-base" style={{ color: "#f2c4d4" }}>21 июня 2026</span>
                <span className="text-sm sm:text-base" style={{ color: "#f2c4d4" }}>Начало в 15:00</span>
                <span className="text-sm sm:text-base" style={{ color: "#f2c4d4" }}>The Green Dacha</span>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm tracking-widest" style={{ color: "#c06080", fontFamily: "'Montserrat', sans-serif" }}>
                  Дресс-код
                </h3>
                <span className="text-sm sm:text-base" style={{ color: "#f2c4d4" }}>Любой розовый</span>
                <span className="text-sm sm:text-base" style={{ color: "#f2c4d4" }}>Уютно и красиво</span>
                <span className="text-sm sm:text-base italic" style={{ color: "#f2c4d4" }}>Только наши девочки</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1
                className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 font-bold tracking-tight"
                style={{ color: "#c06080", fontFamily: "'Playfair Display', serif" }}
              >
                МНЕ 30!
              </h1>
              <p className="text-sm sm:text-base" style={{ color: "#8a4f65", fontFamily: "'Montserrat', sans-serif" }}>
                с любовью ♡ 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
