import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Countdown() {
  const target = new Date("2026-06-21T15:00:00");

  const getTimeLeft = () => {
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex gap-6 justify-center mt-8">
      {[
        { value: time.days, label: "дней" },
        { value: time.hours, label: "часов" },
        { value: time.minutes, label: "минут" },
        { value: time.seconds, label: "секунд" },
      ].map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            {pad(value)}
          </span>
          <span className="text-xs uppercase tracking-widest text-pink-200 mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/6b2e7fb1-4451-4177-8c79-24da03307885/bucket/7b6ab4d1-d30c-494f-9429-d9607e8c61cd.jpg"
          alt="Made in 1996"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(120,40,80,0.45) 0%, rgba(80,20,50,0.65) 100%)" }} />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-pink-200 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          21 июня 2026 · The Green Dacha
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Девочки,<br />мне 30!
        </h1>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-90 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
          Самый нежный юбилей в кругу самых родных девчонок.<br />
          Зелёная дача, розовый цвет, смех до слёз и чувство, что это и есть счастье.
        </p>
        <Countdown />
        <a
          href="#rsvp"
          className="inline-block mt-10 border border-white text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-pink-700 transition-all duration-300"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Подтвердить участие
        </a>
      </div>
    </div>
  );
}