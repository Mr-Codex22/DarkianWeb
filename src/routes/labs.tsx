import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/labs")({
  head: () => ({
    meta: [
      { title: "Labs — Darkian" },
      { name: "description", content: "Darkian Labs. Próximamente: la revolución del software." },
      { property: "og:title", content: "Labs — Darkian" },
      { property: "og:description", content: "Próximamente. La revolución del software." },
    ],
  }),
  component: Labs,
});

function Labs() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 sm:px-10 min-h-screen flex flex-col justify-center">
      <p className="eyebrow text-muted-foreground/60">Labs</p>
      <h1 className="mt-6 text-5xl sm:text-7xl md:text-8xl leading-[1.02]">
        Próximamente.
        <br />
        La revolución del software.
      </h1>
    </section>
  );
}
