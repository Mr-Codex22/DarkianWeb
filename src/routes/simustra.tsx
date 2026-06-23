import { createFileRoute, Link } from "@tanstack/react-router";
import heroSimustra from "@/assets/hero-simustra.jpg";

export const Route = createFileRoute("/simustra")({
  head: () => ({
    meta: [
      { title: "Simustra — Simulador educativo de Darkian" },
      { name: "description", content: "Simustra es el simulador educativo de Darkian para aprender de forma divertida en aulas con IA y simuladores históricos." },
      { property: "og:title", content: "Simustra — Aprender simulando" },
      { property: "og:description", content: "Simulador educativo de Darkian para aulas, con IA y experiencias interactivas." },
      { property: "og:image", content: heroSimustra },
      { name: "twitter:image", content: heroSimustra },
    ],
  }),
  component: Simustra,
});

function Simustra() {
  return (
    <>
      <section className="relative w-full h-screen min-h-[680px] overflow-hidden bg-black">
        <img src={heroSimustra} alt="Simustra en uso en un aula" width={1920} height={1080} className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 pb-16 sm:pb-20">
            <p className="eyebrow !text-white/70">Producto / Simustra</p>
            <h1 className="mt-4 text-5xl sm:text-7xl md:text-8xl text-white leading-[1.05]">Simustra</h1>
            <p className="mt-6 max-w-xl text-sm sm:text-base text-white/80 leading-relaxed">
              Simulador educativo para aulas. Aprende jugando con simuladores históricos y experiencias adaptativas
              impulsadas por IA.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 py-24 grid md:grid-cols-3 border-t border-border">
        {[
          { t: "Aulas", d: "Diseñado para docentes y estudiantes. Activa la participación con dinámicas tipo videojuego." },
          { t: "IA", d: "Generación de simuladores históricos y preguntas adaptativas mediante modelos de IA." },
          { t: "Notas", d: "Sistema integrado para evaluar progreso, asistencia y participación en tiempo real." },
        ].map((b, idx) => (
          <div key={b.t} className={`py-12 px-6 ${idx !== 0 ? "md:border-l border-border" : ""}`}>
            <p className="eyebrow">{b.t}</p>
            <p className="mt-6 text-base leading-relaxed">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 py-24 border-t border-border">
        <header className="grid md:grid-cols-12 items-end mb-12">
          <p className="eyebrow md:col-span-2">Cómo funciona</p>
          <h2 className="md:col-span-7 text-2xl md:text-3xl">Del tema a la experiencia en minutos.</h2>
        </header>
        <div className="grid md:grid-cols-3 border-t border-border">
          {[
            { n: "01", t: "Elige el tema", d: "El docente selecciona el contenido y el periodo histórico o materia a simular." },
            { n: "02", t: "La IA construye", d: "Simustra genera el escenario, personajes y preguntas adaptativas automáticamente." },
            { n: "03", t: "El aula juega", d: "Los estudiantes participan en tiempo real mientras se registran notas y asistencia." },
          ].map((s, idx) => (
            <div key={s.n} className={`py-12 px-6 border-b border-border ${idx !== 0 ? "md:border-l" : ""}`}>
              <p className="eyebrow">{s.n}</p>
              <h3 className="text-xl mt-6">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 py-24 border-t border-border grid md:grid-cols-12 gap-8 items-end">
        <p className="eyebrow md:col-span-2">Demo</p>
        <h2 className="md:col-span-7 text-3xl md:text-5xl leading-[1.05]">Llévalo a tu aula.</h2>
        <div className="md:col-span-3 flex flex-col gap-3">
          <Link to="/contacto" className="link-underline text-sm">Solicitar demo →</Link>
          <a href="https://simustra.co" className="link-underline text-sm text-muted-foreground">simustra.co →</a>
        </div>
      </section>
    </>
  );
}
