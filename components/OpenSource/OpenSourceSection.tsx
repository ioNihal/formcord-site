import Image from "next/image";
import { Star, GitFork } from "lucide-react";
import Link from "next/link";

export default function OpenSourceSection() {
    return (
        <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
            <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5
                 px-3 py-2 md:text-lg text-zinc-300 font-mono">
                    <Image
                        src="/github-mark-white.svg"
                        alt="GitHub"
                        width={24}
                        height={24}
                        className="opacity-80"
                    />
                    Open Source
                </div>

                <h2 className="mt-6 text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                    Built in the open. MIT licensed.
                </h2>
                <p className="mx-auto mt-3 max-w-sm sm:max-w-xl text-xs lg:text-sm text-zinc-400">
                    Star us on GitHub, fork the repo, or contribute. Formcord is free forever.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Link
                        className="inline-flex items-center gap-2 rounded-full bg-[#5865F2] px-5 py-2 
                        text-xs lg:text-sm font-medium text-white hover:brightness-110"
                        href="https://github.com/ioNihal/formcord"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Star size={16} />
                        Star on GitHub
                    </Link>
                    <Link
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2
                         text-xs lg:text-sm text-zinc-200 hover:border-blue-400/30 hover:bg-blue-400/10"
                        href="https://github.com/ioNihal/formcord/fork"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitFork size={16} />
                        Fork
                    </Link>
                </div>
            </div>
        </section>
    );
}
