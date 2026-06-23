import { useEffect, useState } from "react";

export interface Slide {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  location?: string;
  objectPosition?: string;
}

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [slides.length]);

  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setI((v) => (v + 1) % slides.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Proyectos destacados de Darkian"
      className="relative w-full h-screen min-h-[680px] overflow-hidden bg-black"
    >
      {slides.map((s, idx) => (
        <div
          key={idx}
          aria-hidden={idx !== i}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt={s.title}
            width={1920}
            height={1080}
            loading={idx === 0 ? "eager" : "lazy"}
            className="size-full object-cover"
            style={{ objectPosition: s.objectPosition ?? "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />
        </div>
      ))}

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 pb-16 sm:pb-20">
          <p className="eyebrow !text-white/70">{slides[i].eyebrow}</p>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl text-white max-w-4xl leading-[1.05]">
            {slides[i].title}
          </h1>
          <p className="mt-6 max-w-xl text-sm sm:text-base text-white/80 leading-relaxed">
            {slides[i].description}
          </p>
          {slides[i].location && (
            <p className="mt-8 eyebrow !text-white/60">{slides[i].location}</p>
          )}
        </div>
      </div>

      {/* Side arrows — glyph only */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors font-pixel text-[18px] leading-none cursor-pointer"
      >‹</button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors font-pixel text-[18px] leading-none cursor-pointer"
      >›</button>

      {/* Bottom bar */}
      <div className="absolute bottom-8 left-6 sm:left-10 right-6 sm:right-10 flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Ir al slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-[3px] transition-all ${idx === i ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
        <span className="font-pixel text-[10px] tracking-[0.2em] text-white/80">
          {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
