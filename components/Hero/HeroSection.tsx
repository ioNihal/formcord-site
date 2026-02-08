import ButtonwithCopy from "./ButtonwithCopy";
import Stats from "./Stats";
import CodeCard from "./CodeCard";
import ButtonWithScroll from "./ButtonWithScroll";


export default function HeroSection() {
    return (
        <section className="relative isolate mx-auto w-full max-w-7xl overflow-hidden px-6 py-18 xl:20 2xl:py-46">


            {/* Background blobs */}
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                h-55 w-[320px] sm:h-75 sm:w-130 lg:h-90 lg:w-180
                bg-blue-600/10 rounded-br-full rounded-tl-full blur-3xl -z-10"
            />


            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-7">
                    <p className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 font-mono
                       animate-glow-pulse px-4 py-1.5 text-[10px] sm:text-xs text-zinc-300">
                        v1.0.0 stable
                    </p>
                    <h1 className="text-2xl lg:text-5xl 2xl:text-6xl font-bold leading-tight text-white md:text-6xl">
                        Ship notifications to Discord with one function.
                    </h1>
                    <p className="max-w-sm text-xs sm:text-sm text-zinc-400 md:text-lg">
                        Edge-safe. Node-safe. Zero dependencies. Best-effort delivery with
                        rate-limit handling.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ButtonwithCopy />
                        <ButtonWithScroll />
                    </div>
                    <Stats />
                </div>
                <CodeCard />
            </div>
        </section>
    )
}
