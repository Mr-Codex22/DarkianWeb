import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logo from "@/assets/darkian-logo.png";
import heroTeamUrl from "@/assets/hero-team.jpg?url";

const SITE_URL = "https://darkian.co";


const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-nosotros", label: "Sobre Nosotros" },
  { to: "/labs", label: "Labs" },
  { to: "/simustra", label: "Simustra" },
  { to: "/contacto", label: "Contacto" },
] as const;

function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={`block${className ? ` ${className}` : ""}`}>
      <img src={logo} alt="Darkian" className="h-16 w-auto" />
    </Link>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto flex max-w-[1600px] items-stretch justify-between px-6 sm:px-10">
        <Logo className="py-4" />
        <ul className="hidden md:flex items-stretch gap-8">
          {NAV.map((n) => (
            <li key={n.to} className="flex items-center">
              <Link
                to={n.to}
                className="nav-link"
                activeProps={{ className: "nav-link nav-link-active" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          aria-label="Abrir menú"
          className="md:hidden font-pixel text-[9px] tracking-[0.2em] text-foreground py-4"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "CERRAR" : "MENU"}
        </button>
      </nav>
      {open && (
        <ul className="md:hidden bg-background border-t border-border">
          {NAV.map((n) => (
            <li key={n.to} className="border-b border-border">
              <Link
                to={n.to}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 nav-link"
                activeProps={{ className: "block px-6 py-4 nav-link nav-link-active" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-6 text-sm text-muted-foreground max-w-xs leading-relaxed">
            La revolución del software. Desde Cúcuta, Colombia.
          </p>

        </div>
        <div>
          <p className="eyebrow mb-4">Contacto</p>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:marketing@darkian.co" className="link-underline">marketing@darkian.co</a></li>
            <li><a href="tel:+573025992010" className="link-underline">+57 (302) 599 2010</a></li>
            <li className="text-muted-foreground">Cúcuta, Colombia</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Redes</p>
          <ul className="space-y-2 text-sm">
            <li><a href="https://instagram.com/darkian.co" target="_blank" rel="noopener noreferrer" className="link-underline">Instagram</a></li>
            <li><a href="https://youtube.com/@darkianco" target="_blank" rel="noopener noreferrer" className="link-underline">YouTube</a></li>
            <li><a href="https://tiktok.com/@darkian.co" target="_blank" rel="noopener noreferrer" className="link-underline">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 px-6 sm:px-10 flex justify-between items-center">
        <span className="eyebrow">© {new Date().getFullYear()} Darkian</span>
        <span className="eyebrow">Cúcuta, Colombia</span>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="text-5xl md:text-7xl mt-4">PAGE NOT FOUND</h1>
          <Link to="/" className="link-underline mt-10 inline-block text-sm">Volver al inicio</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="eyebrow">Error</p>
        <h1 className="text-3xl mt-4">Algo salió mal</h1>
        <div className="mt-8 flex gap-6 justify-center text-sm">
          <button onClick={() => { router.invalidate(); reset(); }} className="link-underline">Reintentar</button>
          <a href="/" className="link-underline">Inicio</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Darkian — La revolución del software" },
      { name: "description", content: "Darkian construye bots de Discord, sistemas de IA y herramientas educativas como Simustra desde Cúcuta, Colombia." },
      { name: "author", content: "Darkian" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "apple-mobile-web-app-title", content: "Darkian" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
      { property: "og:site_name", content: "Darkian" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: "Darkian — Software, IA y bots de Discord" },
      { property: "og:description", content: "Equipo de software para educación y comunidades digitales. Bots avanzados de Discord, IA y productos propios." },
      { property: "og:image", content: `${SITE_URL}${heroTeamUrl}` },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1080" },
      { property: "og:locale", content: "es_CO" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@darkianco" },
      { name: "twitter:title", content: "Darkian — La revolución del software" },
      { name: "twitter:description", content: "Bots de Discord, IA y herramientas educativas desde Cúcuta, Colombia." },
      { name: "twitter:image", content: `${SITE_URL}${heroTeamUrl}` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "mask-icon", href: "/mask-icon.svg", color: "#0a0a0a" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Darkian",
          url: "https://darkian.co",
          email: "marketing@darkian.co",
          telephone: "+57-302-599-2010",
          address: { "@type": "PostalAddress", addressLocality: "Cúcuta", addressCountry: "CO" },
          description: "Equipo de software para educación y comunidades digitales.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-1"><Outlet /></main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
