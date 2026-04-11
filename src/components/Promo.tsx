import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Розовый декор"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(180,60,100,0.5) 0%, rgba(100,30,60,0.6) 100%)" }} />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-pink-200 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        The Green Dacha · Встречаемся в 15:00
      </h3>

      <div className="absolute bottom-12 right-6 z-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-right">
        <p
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Подарки — только конверты,<br />
          <span className="italic text-pink-200">если захотите</span>
        </p>
        <p className="text-pink-100 text-sm md:text-base mt-4 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
          Мне важнее всего ваше присутствие и наши объятия.
          Но если захотите порадовать меня — буду безмерно благодарна.
        </p>
      </div>
    </div>
  );
}
