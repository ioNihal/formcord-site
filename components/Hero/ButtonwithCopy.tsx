"use client";

import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";


export default function ButtonwithCopy() {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        if (copied) return;

        try {
            await navigator.clipboard.writeText("npm i formcord");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // no-op
        }
    }


    return (
        <button onClick={handleCopy} disabled={copied}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-mono *:cursor-pointer
            text-sm sm:text-base lg:text-lg font-semibold text-zinc-100 backdrop-blur hover:border-blue-600/30 hover:bg-blue-600/10 disabled:opacity-70">
            <Terminal size={14} className="text-zinc-400" />
            npm i formcord
            {copied ? <Check size={20} className="text-emerald-400" /> : <Copy size={20} className="text-gray-300" />}
        </button>
    )
}
