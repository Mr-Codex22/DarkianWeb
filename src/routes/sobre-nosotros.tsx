import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre Nosotros — Darkian" },
      { name: "description", content: "Conoce a Darkian: equipo desde Cúcuta, Colombia que crea software para educación, IA y comunidades digitales." },
      { property: "og:title", content: "Sobre Nosotros — Darkian" },
      { property: "og:description", content: "Equipo de software desde Cúcuta enfocado en educación, IA y comunidades digitales." },
    ],
  }),
  component: SobreNosotros,
});

function SobreNosotros() {
  return (
    <article className="mx-auto max-w-[1600px] px-6 sm:px-10 pt-32 pb-24">
      <header className="grid md:grid-cols-12 gap-8 border-t border-border pt-6">
        <p className="eyebrow md:col-span-2">Sobre Nosotros</p>
        <h1 className="md:col-span-10 text-4xl md:text-7xl leading-[1.05]">
          Software para educar, automatizar y crecer.
        </h1>
      </header>

      <div className="mt-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-2"><p className="eyebrow">Quiénes</p></div>
        <p className="md:col-span-7 text-lg leading-relaxed">
          Darkian es un equipo desde <strong>Cúcuta, Colombia</strong> que desarrolla soluciones de software para
          educación y comunidades digitales. Construimos bots avanzados para Discord, sistemas de IA, productos propios
          y herramientas para desarrolladores.
        </p>
      </div>

      <div className="mt-24 grid md:grid-cols-2 border-t border-border">
        <div className="group py-12 px-6 border-b border-border transition-colors hover:bg-card luminous-hover md:border-r">
          <p className="eyebrow">Misión</p>
          <p className="mt-6 text-base leading-relaxed">
            Hacer que la tecnología eduque y automatice, reduciendo tareas repetitivas para equipos y comunidades
            digitales.
          </p>
        </div>
        <div className="group py-12 px-6 border-b border-border transition-colors hover:bg-card luminous-hover">
          <p className="eyebrow">Visión</p>
          <p className="mt-6 text-base leading-relaxed">
            Ser referentes en software educativo y bots inteligentes en Latinoamérica, con productos open-source y de
            mercado.
          </p>
        </div>
      </div>

      <div className="mt-24 grid md:grid-cols-4 border-t border-border">
        {[
          { n: "+5", l: "Años construyendo" },
          { n: "3", l: "Productos en producción" },
          { n: "24/7", l: "Uptime y soporte" },
          { n: "100%", l: "Remoto" },
        ].map((s, idx) => (
          <div key={s.l} className={`group py-12 px-6 border-b border-border transition-colors hover:bg-card luminous-hover ${idx !== 0 ? "md:border-l" : ""}`}>
            <p className="font-display text-4xl">{s.n}</p>
            <p className="eyebrow mt-3">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 grid md:grid-cols-12 gap-8 border-t border-border pt-6">
        <p className="eyebrow md:col-span-2">Enfoque</p>
        <div className="md:col-span-10 grid sm:grid-cols-3 gap-12">
          {[
            { t: "Educación", d: "Software que enseña: simuladores, IA aplicada y herramientas para el aula como Simustra." },
            { t: "Automatización", d: "Bots y workflows que eliminan tareas repetitivas en comunidades y empresas." },
            { t: "Open source", d: "Paquetes y experimentos públicos en Labs para que la comunidad construya sobre ellos." },
          ].map((v) => (
            <div key={v.t} className="group py-12 px-6 border-b border-border transition-colors hover:bg-card luminous-hover">
              <p className="text-lg font-medium">{v.t}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 grid md:grid-cols-12 gap-8 border-t border-border pt-6">
        <p className="eyebrow md:col-span-2">Explora</p>
        <div className="md:col-span-10 flex flex-wrap gap-x-10 gap-y-4">
          <Link to="/labs" className="link-underline text-lg">Labs →</Link>
          <Link to="/simustra" className="link-underline text-lg">Simustra →</Link>
          <Link to="/contacto" className="link-underline text-lg">Contacto →</Link>
        </div>
      </div>

      <div className="mt-24 grid md:grid-cols-12 gap-8 items-end border-t border-border pt-6">
        <p className="eyebrow md:col-span-2">Siguiente</p>
        <h2 className="md:col-span-7 text-3xl md:text-5xl leading-[1.05]">¿Trabajamos juntos?</h2>
        <Link to="/contacto" className="md:col-span-3 link-underline text-sm">Iniciar conversación →</Link>
      </div>
    </article>
  );
}
