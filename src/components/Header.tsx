interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          30 · июня · 2026
        </div>
        <nav className="flex gap-8">
          <a
            href="#details"
            className="text-white hover:text-pink-200 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Детали
          </a>
          <a
            href="#rsvp"
            className="text-white hover:text-pink-200 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Анкета
          </a>
        </nav>
      </div>
    </header>
  );
}
