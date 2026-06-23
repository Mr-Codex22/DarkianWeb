import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { sendContact } from "@/lib/api/contact.functions";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Darkian" },
      { name: "description", content: "Contacta a Darkian: marketing@darkian.co · +57 (302) 599 2010 · Cúcuta, Colombia. Cuéntanos tu proyecto." },
      { property: "og:title", content: "Contacto — Darkian" },
      { property: "og:description", content: "Escríbenos a marketing@darkian.co o llámanos al +57 (302) 599 2010." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [data, setData] = useState({ nombre: "", correo: "", mensaje: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContact({ data });
      setStatus("sent");
      setData({ nombre: "", correo: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="mx-auto max-w-[1600px] px-6 sm:px-10 pt-32 pb-24">
      <header className="grid md:grid-cols-12 gap-8 border-t border-border pt-6">
        <p className="eyebrow md:col-span-2">Contacto</p>
        <h1 className="md:col-span-10 text-4xl md:text-7xl leading-[1.05]">
          Cuéntanos tu próximo proyecto.
        </h1>
      </header>

      <div className="mt-20 grid md:grid-cols-12 gap-12 border-t border-border pt-12">
        <div className="md:col-span-5 space-y-8">
          <div>
            <p className="eyebrow">Email</p>
            <a href="mailto:marketing@darkian.co" className="link-underline mt-2 inline-block text-lg">marketing@darkian.co</a>
          </div>
          <div>
            <p className="eyebrow">Teléfono</p>
            <a href="tel:+573025992010" className="link-underline mt-2 inline-block text-lg">+57 (302) 599 2010</a>
          </div>
          <div>
            <p className="eyebrow">Ubicación</p>
            <p className="mt-2 text-lg">Cúcuta, Colombia · Equipo remoto</p>
          </div>
          <div>
            <p className="eyebrow">Horario</p>
            <p className="mt-2 text-lg">Lun – Vie · 9:00 – 18:00 (COT)</p>
          </div>
          <div>
            <p className="eyebrow">Redes</p>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
              <a href="https://discord.gg/darkian" className="link-underline text-lg hover:text-[var(--social-color)] transition-colors duration-300" style={{ "--social-color": "#5865F2" } as React.CSSProperties}>Discord</a>
              <a href="https://darkian.co" className="link-underline text-lg">darkian.co</a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Respondemos en menos de 24 horas hábiles. Cuéntanos el contexto, el alcance y los plazos de tu proyecto.
          </p>
        </div>

        <form onSubmit={submit} className="md:col-span-7 space-y-8">
          <label className="block">
            <span className="eyebrow">Nombre</span>
            <input
              required
              value={data.nombre}
              onChange={(e) => setData({ ...data, nombre: e.target.value })}
              className="mt-3 w-full bg-transparent border-b border-border py-3 text-base focus:outline-none focus:border-foreground transition-colors"
            />
          </label>
          <label className="block">
            <span className="eyebrow">Correo</span>
            <input
              required
              type="email"
              value={data.correo}
              onChange={(e) => setData({ ...data, correo: e.target.value })}
              className="mt-3 w-full bg-transparent border-b border-border py-3 text-base focus:outline-none focus:border-foreground transition-colors"
            />
          </label>
          <label className="block">
            <span className="eyebrow">Mensaje</span>
            <textarea
              required
              rows={5}
              value={data.mensaje}
              onChange={(e) => setData({ ...data, mensaje: e.target.value })}
              className="mt-3 w-full bg-transparent border-b border-border py-3 text-base focus:outline-none focus:border-foreground transition-colors resize-none"
            />
          </label>
          <button type="submit" disabled={status === "sending"} className="link-underline text-sm disabled:opacity-50">
            {status === "sending" ? "Enviando…" : "Enviar mensaje →"}
          </button>
          {status === "sent" && <p className="eyebrow">Mensaje enviado. Te respondemos pronto.</p>}
          {status === "error" && <p className="eyebrow text-red-500">Error al enviar. Escríbenos a marketing@darkian.co</p>}
        </form>
      </div>
    </section>
  );
}
