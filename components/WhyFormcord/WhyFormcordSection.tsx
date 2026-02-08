import { Cloud, ShieldCheck, Zap } from "lucide-react";


export default function WhyFormcordSection() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-20" id="features">
            <div className="mb-10 text-center">
                <h2 className="text-2xl lg:text-4xl font-semibold text-white">Why Formcord</h2>
                <p className="mt-2 text-sm sm:text-base text-zinc-400">
                    A notification layer that respects your stack.
                </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5
                transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]">
                    <div className="mb-3 inline-flex p-3 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400
                    transition-colors duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-300">
                        <Zap size={28} />
                    </div>
                    <h3 className="text-sm font-semibold text-white">Zero dependencies</h3>
                    <p className="mt-2 text-xs text-zinc-400">
                        Built on Web APIs only. No bloat, no supply chain risks.
                    </p>
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5
                transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]">
                    <div className="mb-3 inline-flex p-3 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400
                    transition-colors duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-300">
                        <Cloud size={28} />
                    </div>
                    <h3 className="text-sm font-semibold text-white">Edge & serverless ready</h3>
                    <p className="mt-2 text-xs text-zinc-400">
                        Works everywhere - Vercel Edge, Cloudflare Workers, Deno, Bun.
                    </p>
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5
                transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]">
                    <div className="mb-3 inline-flex p-3 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400
                    transition-colors duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-300">
                        <ShieldCheck size={28} />
                    </div>
                    <h3 className="text-sm font-semibold text-white">Best-effort delivery</h3>
                    <p className="mt-2 text-xs text-zinc-400">
                        Automatic rate-limit handling. Never lose a notification.
                    </p>
                </div>
            </div>
        </section>
    )
}
