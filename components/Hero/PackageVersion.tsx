import { getLatestFormcordVersion } from "@/lib/formcord";


export default async function PackageVersion() {
    const version = await getLatestFormcordVersion();
    return (
        <p className="inline-flex items-center gap-2 rounded-full bg-blurple/20 font-mono
                       animate-glow-pulse px-4 py-1.5 text-[10px] sm:text-xs text-zinc-300">
            v{version} stable
        </p>
    )
}
