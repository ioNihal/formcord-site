import InfiniteSlide from "./InfiniteSlidingClientSection";



const themeTokens = [
    ["title", "Embed title prefix"],
    ["author", "Name and icon in header"],
    ["color", "Sidebar accent color"],
    ["footer", "Footer text"],
    ["timestamp", "Auto-add timestamps"],
];

export default function ThemingSection() {
    return (
        <section className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">

                <div className="pt-6">
                    <h2 className="text-2xl lg:text-4xl font-semibold text-white">Theming</h2>
                    <p className="mt-2 text-sm lg:text-lg text-zinc-400">
                        Match your brand. Every embed, every time.
                    </p>

                    <div className="mt-8 space-y-3 text-zinc-300">
                        {themeTokens.map(([k, v]) => (
                            <div key={k} className="flex items-center gap-4">
                                <span className=" rounded-md border font-mono border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-xs text-blue-300">
                                    {k}
                                </span>
                                <span className="text-xs text-zinc-400">{v}</span>
                            </div>
                        ))}
                    </div>
                </div>


                <InfiniteSlide />
            </div>
        </section >
    );
}
