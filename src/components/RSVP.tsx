import { useState } from "react";

interface FormData {
  name: string;
  composition: string;
  drinks: string[];
  drinkCustom: string;
}

const drinkOptions = [
  "Шампанское / игристое",
  "Белое вино",
  "Красное вино",
  "Водка / крепкий алкоголь",
  "Пиво / сидр",
  "Не пью алкоголь",
];

const compositionOptions = [
  "Я буду одна",
  "Я на девичник, муж на дачу",
  "Я на девичник, муж и ребёнок/дети на дачу",
];

export default function RSVP() {
  const [form, setForm] = useState<FormData>({
    name: "",
    composition: "",
    drinks: [],
    drinkCustom: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleDrink = (drink: string) => {
    setForm((prev) => ({
      ...prev,
      drinks: prev.drinks.includes(drink)
        ? prev.drinks.filter((d) => d !== drink)
        : [...prev.drinks, drink],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowModal(true);
  };

  return (
    <div id="rsvp" className="min-h-screen px-6 py-20 flex items-center justify-center" style={{ backgroundColor: "#fdf4f7" }}>
      <div className="w-full max-w-xl">
        <h3
          className="uppercase text-xs tracking-widest mb-3"
          style={{ color: "#c06080", fontFamily: "'Montserrat', sans-serif" }}
        >
          Важные моменты
        </h3>
        <h2
          className="text-3xl md:text-5xl mb-3 leading-tight"
          style={{ color: "#3d1f2c", fontFamily: "'Playfair Display', serif" }}
        >
          Анкета для гостей
        </h2>
        <p className="text-sm mb-10 leading-relaxed" style={{ color: "#8a4f65", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
          Заполни, пожалуйста, чтобы я могла подготовиться к нашей встрече ♡
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          {/* Имя */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest" style={{ color: "#8a4f65", fontFamily: "'Montserrat', sans-serif" }}>
              Имя <span style={{ color: "#c06080" }}>*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Например, Екатерина"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border-b bg-transparent py-3 px-0 text-base outline-none placeholder-pink-200 transition-colors focus:border-pink-400"
              style={{ borderColor: "#e8a0b8", color: "#3d1f2c", fontFamily: "'Montserrat', sans-serif" }}
            />
          </div>

          {/* Состав */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest" style={{ color: "#8a4f65", fontFamily: "'Montserrat', sans-serif" }}>
              В каком составе планируете быть?
            </label>
            <div className="relative">
              <select
                value={form.composition}
                onChange={(e) => setForm({ ...form, composition: e.target.value })}
                className="w-full border-b bg-transparent py-3 px-0 text-base outline-none appearance-none cursor-pointer"
                style={{ borderColor: "#e8a0b8", color: form.composition ? "#3d1f2c" : "#e8a0b8", fontFamily: "'Montserrat', sans-serif" }}
              >
                <option value="" disabled style={{ color: "#e8a0b8" }}>Выберите вариант</option>
                {compositionOptions.map((opt) => (
                  <option key={opt} value={opt} style={{ color: "#3d1f2c" }}>{opt}</option>
                ))}
              </select>
              <span className="absolute right-0 top-3 pointer-events-none" style={{ color: "#c06080" }}>▾</span>
            </div>
          </div>

          {/* Напитки */}
          <div className="flex flex-col gap-3">
            <label className="text-xs uppercase tracking-widest" style={{ color: "#8a4f65", fontFamily: "'Montserrat', sans-serif" }}>
              Что будете пить из алкоголя? <span className="normal-case tracking-normal text-xs" style={{ color: "#c06080" }}>(можно несколько)</span>
            </label>
            <div className="flex flex-col gap-3">
              {drinkOptions.map((drink) => (
                <label key={drink} className="flex items-center gap-3 cursor-pointer group">
                  <span
                    className="w-5 h-5 border flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{
                      borderColor: form.drinks.includes(drink) ? "#c06080" : "#e8a0b8",
                      backgroundColor: form.drinks.includes(drink) ? "#c06080" : "transparent",
                    }}
                    onClick={() => toggleDrink(drink)}
                  >
                    {form.drinks.includes(drink) && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "#3d1f2c", fontFamily: "'Montserrat', sans-serif" }}
                    onClick={() => toggleDrink(drink)}
                  >
                    {drink}
                  </span>
                </label>
              ))}

              {/* Свой вариант */}
              <label className="flex items-center gap-3 cursor-pointer">
                <span
                  className="w-5 h-5 border flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{
                    borderColor: form.drinks.includes("custom") ? "#c06080" : "#e8a0b8",
                    backgroundColor: form.drinks.includes("custom") ? "#c06080" : "transparent",
                  }}
                  onClick={() => toggleDrink("custom")}
                >
                  {form.drinks.includes("custom") && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <input
                  type="text"
                  placeholder="Свой вариант"
                  value={form.drinkCustom}
                  onChange={(e) => {
                    setForm({ ...form, drinkCustom: e.target.value });
                    if (e.target.value && !form.drinks.includes("custom")) {
                      setForm((prev) => ({ ...prev, drinkCustom: e.target.value, drinks: [...prev.drinks, "custom"] }));
                    }
                  }}
                  className="flex-1 border-b bg-transparent py-1 px-0 text-sm outline-none placeholder-pink-200"
                  style={{ borderColor: "#e8a0b8", color: "#3d1f2c", fontFamily: "'Montserrat', sans-serif" }}
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 py-4 text-white text-xs uppercase tracking-widest transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: "#c06080", fontFamily: "'Montserrat', sans-serif" }}
          >
            Отправить
          </button>
        </form>
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ backgroundColor: "rgba(60,20,40,0.7)", backdropFilter: "blur(4px)" }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="text-center px-10 py-12 max-w-sm w-full"
            style={{ backgroundColor: "#fdf4f7" }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-4xl mb-4">♡</p>
            <h3
              className="text-2xl md:text-3xl mb-4"
              style={{ color: "#3d1f2c", fontFamily: "'Playfair Display', serif" }}
            >
              Спасибо, милая!
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#8a4f65", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Жду тебя и крепко обнимаю!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="text-xs uppercase tracking-widest px-8 py-3 transition-colors"
              style={{ backgroundColor: "#c06080", color: "white", fontFamily: "'Montserrat', sans-serif" }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
