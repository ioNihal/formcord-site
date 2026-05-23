import { highlight } from "@/lib/highlight";

type CodeBlockProps = {
    code: string;
    lang?: string;
    title?: string;
    className?: string;
};

export default async function CodeBlock({
    code,
    lang = "ts",
    title,
    className = "",
}: CodeBlockProps) {
    const html = await highlight(code, lang);

    return (
        <div className={`rounded-xl bg-zinc-950 ring-1 ring-white/10 overflow-hidden flex flex-col ${className}`}>
            {title && (
                <div className="px-4 py-2 text-xs text-zinc-400 border-b border-white/5 bg-zinc-900">
                    {title}
                </div>
            )}

            <div className="overflow-x-auto flex-1 [&_pre]:bg-transparent! [&_pre]:p-4 [&_pre]:m-0">
                <div dangerouslySetInnerHTML={{ __html: html }} className="h-full" />
            </div>
        </div>
    );
}
