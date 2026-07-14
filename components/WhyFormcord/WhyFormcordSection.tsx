import { Cloud, ShieldCheck, Zap, Paperclip } from "lucide-react";


export default function WhyFormcordSection() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-20" id="features">
            <div className="mb-10 text-center">
                <h2 className="text-2xl lg:text-4xl font-semibold text-white">Why Formcord</h2>
                <p className="mt-2 text-sm sm:text-base text-zinc-400">
                    A notification layer that respects your stack.
                </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5
                transition-all duration-300 hover:-translate-y-1 hover:border-blurple/45 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(115,138,219,0.12)]">
                    <div className="mb-3 inline-flex p-3 items-center justify-center rounded-lg bg-blurple/10 text-blurple
                    transition-colors duration-300 group-hover:bg-blurple/20 group-hover:text-blurple-300">
                        <Zap size={28} />
                    </div>
                    <h3 className="text-sm font-semibold text-white">Zero dependencies</h3>
                    <p className="mt-2 text-xs text-zinc-400">
                        Built on Web APIs only. No bloat, no supply chain risks.
                    </p>
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5
                transition-all duration-300 hover:-translate-y-1 hover:border-blurple/45 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(115,138,219,0.12)]">
                    <div className="mb-3 inline-flex p-3 items-center justify-center rounded-lg bg-blurple/10 text-blurple
                    transition-colors duration-300 group-hover:bg-blurple/20 group-hover:text-blurple-300">
                        <Cloud size={28} />
                    </div>
                    <h3 className="text-sm font-semibold text-white">Edge & serverless ready</h3>
                    <p className="mt-2 text-xs text-zinc-400">
                        Works everywhere - Vercel Edge, Cloudflare Workers, Deno, Bun.
                    </p>
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5
                transition-all duration-300 hover:-translate-y-1 hover:border-blurple/45 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(115,138,219,0.12)]">
                    <div className="mb-3 inline-flex p-3 items-center justify-center rounded-lg bg-blurple/10 text-blurple
                    transition-colors duration-300 group-hover:bg-blurple/20 group-hover:text-blurple-300">
                        <ShieldCheck size={28} />
                    </div>
                    <h3 className="text-sm font-semibold text-white">Best-effort delivery</h3>
                    <p className="mt-2 text-xs text-zinc-400">
                        Automatic rate-limit handling. Never lose a notification.
                    </p>
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5
                transition-all duration-300 hover:-translate-y-1 hover:border-blurple/45 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(115,138,219,0.12)]">
                    <div className="mb-3 inline-flex p-3 items-center justify-center rounded-lg bg-blurple/10 text-blurple
                    transition-colors duration-300 group-hover:bg-blurple/20 group-hover:text-blurple-300">
                        <Paperclip size={28} />
                    </div>
                    <h3 className="text-sm font-semibold text-white">Media attachments</h3>
                    <p className="mt-2 text-xs text-zinc-400">
                        Attach logs, PDFs, and files natively using standard Web APIs.
                    </p>
                </div>
            </div>
        </section>
    )
}
