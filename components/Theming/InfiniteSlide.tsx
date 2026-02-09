import Image from "next/image";

const codeSamples = [
    `await formcord.contact({\n  subject: "Contact",\n  email: "hello@x.dev",\n  message: "New inquiry"\n});`,
    `await formcord.error({\n  error: "payment failed",\n  source: "api/charge"\n});`,
    `await formcord.deploy({\n  project: "formcord",\n  environment: "prod"\n});`,
    `await formcord.feedback({\n  rating: 5,\n  message: "Love it"\n});`,
    `await formcord.bug({\n  title: "Crash",\n  steps: "Click > Save"\n});`,
];

const DISCORD_EXAMPLES = [
    "bug",
    "contact",
    "deploy",
    "error",
    "feedback",
]


export default function InfiniteSlide() {
    return (
        <div className="grid grid-cols-2">
            <div className="relative group  h-75 overflow-hidden rounded-l-3xl border-4 border-r-0 border-white/10 bg-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                {/* vignette */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.45)_100%)]" />
                {/* fade top/bottom */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-black/70 to-transparent z-10" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-black/70 to-transparent z-10" />

                <div className="flex flex-col gap-3 animate-vertical-marquee group-hover:[animation-play-state:paused] p-2">
                    {[...codeSamples, ...codeSamples].map((code, i) => (
                        <div key={`code-${i}`} className="ring-3 ring-white/10 rounded-2xl p-5 text-xs text-zinc-200">
                            <div className="mb-3 flex items-center justify-between text-[10px] text-zinc-400">
                                <span>example.ts</span>
                                <span>formcord</span>
                            </div>
                            <pre className="whitespace-pre-wrap leading-5">{code}</pre>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative group  h-75 overflow-hidden rounded-r-3xl border-4 border-l-0 border-white/10 bg-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                {/* vignette */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.45)_100%)]" />
                {/* fade top/bottom */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-zinc-600/10 to-transparent z-10" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-zinc-600/10 to-transparent z-10" />

                <div className="flex flex-col gap-3 animate-vertical-marquee animation-reverse group-hover:[animation-play-state:paused] p-2">
                    {DISCORD_EXAMPLES.map((i) => (
                        <div
                            key={`${i}-example`}
                            className="relative overflow-hidden rounded-3xl ring-3 ring-white/10 bg-black/40 p-1"
                        >
                            <Image
                                src={`/examplesMessages/${i}.webp`}
                                alt={`${i}-example`}
                                height={140}
                                width={280}
                                className="h-auto w-full rounded-[22px] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
