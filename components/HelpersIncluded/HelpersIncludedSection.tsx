import { Link2Icon } from "lucide-react";
import Link from "next/link";

const helpers = [
    { name: ".contact()", desc: "Form submissions and inquiries", docsUrl: "/docs#contact" },
    { name: ".deploy()", desc: "Deployment notifications", docsUrl: "/docs#deploy" },
    { name: ".error()", desc: "Runtime error alerts", docsUrl: "/docs#error" },
    { name: ".feedback()", desc: "User experience feedback", docsUrl: "/docs#feedback" },
    { name: ".bug()", desc: "Bug reports with context", wide: true, docsUrl: "/docs#bug" },
];


export default function HelpersIncludedSection() {
    return (
        <section className="relative isolate w-full overflow-hidden px-6 py-20" id="docs">

            {/* background blob */}
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2
                                    h-60 w-90 sm:h-80 sm:w-130 lg:h-105 lg:w-180
                                    -z-10 rounded-[50%] blur-3xl"
                style={{
                    background:
                        "radial-gradient(at center, rgba(88,101,242,0.22), rgba(88,101,242,0.1), transparent 70%)",
                }}
            />

            <div className="mb-10 text-center">
                <h2 className="text-2xl font-semibold text-white">Helpers included</h2>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                    Prebuilt helpers for common notification patterns.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
                {helpers.map((h) => (
                    <div
                        key={h.name}
                        className={`group flex items-center justify-between rounded-xl border border-white/10 bg-white/5
                             px-4 py-3 transition hover:border-blue-500/30 hover:bg-white/10 backdrop-blur-3xl
                             ${h.wide ? "md:col-span-2" : ""}`}
                    >
                        <div>
                            <p className=" text-base sm:text-lg font-semibold text-white font-mono">{h.name}</p>
                            <p className="mt-1 text-xs sm:text-sm text-zinc-400">{h.desc}</p>
                        </div>
                        <Link href={h.docsUrl} className="text-sm sm:text-base text-zinc-400 hover:text-white inline-flex items-center gap-2">Docs <Link2Icon size={18} /></Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
