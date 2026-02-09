"use client";

import { ArrowRight } from "lucide-react";

export default function ButtonWithScroll() {
    function handleClick() {
        const el = document.getElementById("docs");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 
            text-sm sm:text-base lg:text-lg text-zinc-200 hover:border-blue-600/30 hover:bg-blue-600/10 font-medium"
        >
            Get Started
            <ArrowRight size={20} className="text-zinc-400" />
        </button>
    );
}
