const runtimes = [
  { name: "Next.js", sub: "Edge & Node" },
  { name: "Vercel", sub: "Functions" },
  { name: "Cloudflare", sub: "Workers" },
  { name: "Bun", sub: "Runtime" },
  { name: "Deno", sub: "Deploy" },
  { name: "Node.js", sub: "VPS" },
];

export default function RunsEverywhereSection() {
  return (
    <section className="w-full px-6 py-20">
      <div className="flex flex-col items-center gap-4 mx-auto max-w-7xl">
        <h2 className="text-2xl lg:text-4xl font-semibold text-white">Runs everywhere</h2>
        <p className="text-sm lg:text-base text-zinc-500">One codebase. Every runtime.</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:gap-8 text-xs text-zinc-300">
          {runtimes.map((r) => (
            <div
              key={r.name}
              className="flex-1 lg:flex-none flex flex-col items-center justify-center rounded-md border border-white/10 bg-white/5 px-8 py-4
               text-center hover:border-white/20 hover:bg-white/10"
            >
              <span className="md:text-lg font-medium text-white font-mono">{r.name}</span>
              <span className="mt-1 text-xs md:text-sm text-zinc-400">{r.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
