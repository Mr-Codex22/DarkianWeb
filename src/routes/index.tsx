import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroCarousel, type Slide } from "@/components/hero-carousel";
import heroTeam from "@/assets/hero-team.jpg";
import heroKamae from "@/assets/hero-kamae.jpg";
import heroAi from "@/assets/hero-ai.jpg";
import logoKamae from "@/assets/logo-kamae.png";
import logoDrakons from "@/assets/logo-drakons.png";
import logoElalda from "@/assets/logo-elalda.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Darkian — La revolución del software" },
      { name: "description", content: "Darkian desarrolla bots avanzados de Discord, sistemas de IA y productos como Simustra, DarkPro y Dark Tickets para comunidades y aulas." },
      { property: "og:title", content: "Darkian — Bots, IA y software educativo" },
      { property: "og:description", content: "Bots de Discord, IA y herramientas educativas. Cúcuta, Colombia." },
      { property: "og:image", content: heroTeam },
      { name: "twitter:image", content: heroTeam },
    ],
  }),
  component: Index,
});

const SLIDES: Slide[] = [
  {
    image: heroTeam,
    eyebrow: "Darkian / Equipo",
    title: "Software que transforma comunidades",
    description: "Desarrollamos soluciones de alto impacto para educación, comunidades digitales y automatización empresarial.",
    location: "Cúcuta, Colombia",
  },
  {
    image: heroKamae,
    eyebrow: "Cliente / Dojo Kamae",
    title: "Tecnología al servicio del deporte",
    description: "Sistema de gestión y automatización para Dojo Kamae. Comunidad digital, tickets y soporte en tiempo real.",
    location: "Cúcuta, Colombia",
    objectPosition: "50% 20%",
  },
  {
    image: heroAi,
    eyebrow: "Labs / Ingeniería",
    title: "Código desde cualquier lugar",
    description: "El equipo de Darkian trabaja desde donde se necesite. Ingeniería remota, entregas puntuales.",
    location: "En movimiento",
    objectPosition: "50% 30%",
  },
];

const PRODUCTS = [
  { name: "DarkPro", tag: "Bot", desc: "Bot multifuncional con traducción automática, moderación inteligente y tickets." },
  { name: "Dark Tickets", tag: "Sistema", desc: "Tickets avanzados con respuestas automáticas 24/7." },
  { name: "Simustra", tag: "Educación", desc: "Simulador para aprender de forma divertida en aulas." },
  { name: "advanced-cmd", tag: "Paquete", desc: "Paquete discord.js para eventos, comandos e interacciones." },
  { name: "handler_events", tag: "Paquete", desc: "Manejador de eventos personalizado usado por el equipo." },
  { name: "AI Suite", tag: "IA", desc: "Chatbots e integraciones de IA para negocios y redes sociales." },
];

const SERVICES = [
  { n: "01", title: "Sistemas de IA", desc: "Chatbots empresariales, simuladores educativos y sistemas de notas con IA. Integración directa a flujos de negocio." },
  { n: "02", title: "Automatización Discord", desc: "Bots a medida: moderación inteligente, tickets, comandos avanzados y uptime 24/7 garantizado." },
  { n: "03", title: "Automatización de Procesos", desc: "Reducción de tareas repetitivas en equipos y comunidades. Workflows personalizados para cada cliente." },
  { n: "04", title: "Desarrollo de Productos", desc: "De la idea al producto: arquitectura, ingeniería y mantenimiento continuo con nuestro equipo." },
];

const CLIENTS = [
  {
    name: "Dojo Kamae",
    logo: logoKamae,
    sector: "Deporte / Artes marciales",
    desc: "Gestión y automatización de la comunidad: tickets, soporte en tiempo real y notificaciones para alumnos.",
  },
  {
    name: "The Drakons",
    logo: logoDrakons,
    sector: "Comunidad / Gaming",
    desc: "Bots a medida con moderación inteligente, roles automáticos y eventos para su servidor de Discord.",
  },
  {
    name: "ELALDA",
    logo: logoElalda,
    sector: "Comunidad digital",
    desc: "Automatización de procesos y soporte continuo para mantener activa su comunidad 24/7.",
  },
];
const STACK = ["TypeScript", "React", "Node.js", "Bun", "Discord.js", "PostgreSQL", "MongoDB"];
const TECH_COLORS: Record<string, string> = {
  "TypeScript": "#3178C6",
  "React": "#61DAFB",
  "Node.js": "#339933",
  "Bun": "#fbf0df",
  "Discord.js": "#5865F2",
  "PostgreSQL": "#4169E1",
  "MongoDB": "#47A248",
};

function Index() {
  return (
    <>
      <HeroCarousel slides={SLIDES} />

      {/* Trusted by */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-10">
          <p className="eyebrow text-muted-foreground/60 mb-8">Confían en nosotros</p>
          <div className="flex items-center gap-10 sm:gap-14 flex-wrap">
            {[
              { src: logoKamae, alt: "Dojo Kamae" },
              { src: logoDrakons, alt: "The Drakons" },
              { src: logoElalda, alt: "ELALDA" },
            ].map((l) => (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                className="h-12 w-auto object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 py-24 md:py-32 grid gap-12 md:grid-cols-12 items-start">
        <div className="md:col-span-2">
          <p className="eyebrow">01 / Empresa</p>
        </div>
        <div className="md:col-span-7">
          <h2 className="text-3xl md:text-5xl leading-[1.1]">
            Ingeniería de software de alto impacto desde Colombia.
          </h2>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Darkian desarrolla soluciones tecnológicas para educación, comunidades y empresas. IA aplicada, automatización y productos propios con soporte continuo.
          </p>
          <Link to="/sobre-nosotros" className="link-underline mt-6 inline-block text-sm">Conocer el equipo →</Link>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 py-16">
        <header className="grid md:grid-cols-12 items-end border-t border-border pt-6 mb-12">
          <p className="eyebrow md:col-span-2">02 / Servicios</p>
          <h2 className="md:col-span-7 text-2xl md:text-3xl">Lo que hacemos por ti</h2>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {SERVICES.map((s, idx) => (
            <article
              key={s.n}
              className={`group py-10 px-6 border-b border-border transition-colors hover:bg-card luminous-hover ${idx !== 0 ? "lg:border-l" : ""} ${idx % 2 !== 0 ? "md:border-l" : ""}`}
            >
              <div className="flex items-center justify-between">
                <p className="eyebrow">{s.n}</p>
                <span className="eyebrow opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="text-xl mt-6">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="productos" className="mx-auto max-w-[1600px] px-6 sm:px-10 py-24">
        <header className="grid md:grid-cols-12 items-end border-t border-border pt-6 mb-12">
          <p className="eyebrow md:col-span-2">03 / Productos</p>
          <h2 className="md:col-span-7 text-2xl md:text-3xl">Construido en casa</h2>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-border">
          {PRODUCTS.map((p, idx) => (
            <article
              key={p.name}
              className={`group py-10 px-6 border-b border-border transition-colors hover:bg-card luminous-hover ${idx % 3 !== 0 ? "lg:border-l" : ""} ${idx % 2 !== 0 ? "md:border-l lg:border-l" : ""}`}
            >
              <div className="flex items-center justify-between">
                <p className="eyebrow">{p.tag}</p>
                <span className="size-2 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl mt-6">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 py-16 grid md:grid-cols-12 gap-8 border-t border-border">
        <p className="eyebrow md:col-span-2 pt-6">04 / Stack</p>
        <ul className="md:col-span-10 pt-6 flex flex-wrap gap-x-8 gap-y-4 text-sm">
          {STACK.map((t) => (
            <li key={t} className="text-muted-foreground hover:text-[var(--tech-color)] transition-colors duration-300" style={{ "--tech-color": TECH_COLORS[t] } as React.CSSProperties}>{t}</li>
          ))}
        </ul>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 py-24">
        <header className="grid md:grid-cols-12 items-end border-t border-border pt-6 mb-12">
          <p className="eyebrow md:col-span-2">05 / Clientes</p>
          <h2 className="md:col-span-7 text-2xl md:text-3xl">Equipos que confían en Darkian</h2>
        </header>
        <div className="grid md:grid-cols-3 border-t border-border">
          {CLIENTS.map((c, idx) => (
            <div
              key={c.name}
              className={`group py-12 px-6 border-b border-border transition-colors hover:bg-card luminous-hover ${idx !== 0 ? "md:border-l" : ""}`}
            >
              <img
                src={c.logo}
                alt={c.name}
                className="h-12 w-auto object-contain grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              />
              <p className="eyebrow mt-8">{c.sector}</p>
              <h3 className="font-display text-2xl mt-3">{c.name}</h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 py-32 border-t border-border">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-2"><p className="eyebrow">06 / Contacto</p></div>
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-6xl leading-[1.05]">
              Cuéntanos tu próximo proyecto.
            </h2>
          </div>
          <div className="md:col-span-3 flex flex-col gap-4">
            <Link
              to="/contacto"
              className="inline-block border border-foreground px-6 py-3 font-pixel text-[9px] tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors text-center"
            >
              ESCRIBIR MENSAJE
            </Link>
            <a href="mailto:marketing@darkian.co" className="link-underline text-sm text-muted-foreground">marketing@darkian.co</a>
          </div>
        </div>
      </section>
    </>
  );
}
