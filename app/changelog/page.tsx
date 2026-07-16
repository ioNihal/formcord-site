import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Changelog",
    description: "Release history and updates for Formcord.",
    openGraph: {
        title: "Formcord Changelog",
        description: "Release history and updates for Formcord.",
        images: [
            {
                url: "https://rendercard.vercel.app/api/rendercard?title=Formcord+Changelog&description=Release+history+and+updates+for+Formcord.&theme=glass&accent=%235865F2&site=formcord.vercel.app/changelog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Formcord Changelog",
        description: "Release history and updates for Formcord.",
        images: [
            "https://rendercard.vercel.app/api/rendercard?title=Formcord+Changelog&description=Release+history+and+updates+for+Formcord.&theme=glass&accent=%235865F2&site=formcord.vercel.app/changelog",
        ],
    },
};

export default function ChangelogPage() {
    return (
        <main className="mx-auto w-full max-w-4xl px-6 py-20 text-zinc-300">
            <header className="space-y-4 border-b border-zinc-800 pb-10">
                <p className="text-xs uppercase tracking-widest text-gray-300">Updates</p>
                <h1 className="text-4xl font-semibold text-white md:text-5xl">Changelog</h1>
                <p className="max-w-2xl text-base text-zinc-400">
                    Keep track of new features, bug fixes, and API changes.
                </p>
            </header>

            <div className="mt-12 space-y-16">
                <section>
                    <div className="mb-4 flex items-baseline gap-4">
                        <h2 className="text-3xl font-semibold text-white">v2.1.1</h2>
                        <span className="text-sm text-zinc-500">July 2026</span>
                    </div>
                    <div className="space-y-4">
                        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
                            <li><strong>NEW:</strong> Added automatic normalization for standard browser/runtime <code className="text-zinc-200">File</code> and <code className="text-zinc-200">Blob</code> objects directly inside <code className="text-zinc-200">validateFiles</code> (no upfront manual mapping required).</li>
                            <li><strong>NEW:</strong> Added <code className="text-zinc-200">"batch_rejected"</code> to validation error reasons when using all-or-nothing validation (<code className="text-zinc-200">ignoreInvalid: false</code>).</li>
                            <li><strong>NEW:</strong> Added strict type checking for unrecognized file formats (triggers <code className="text-zinc-200">"invalid_file_type"</code> reason).</li>
                            <li><strong>FIX:</strong> Filtered out null/undefined elements from file arrays to prevent TypeError crashes.</li>
                            <li><strong>FIX:</strong> Optimized batch validation performance by using <code className="text-zinc-200">push</code> instead of <code className="text-zinc-200">unshift</code>.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="mb-4 flex items-baseline gap-4">
                        <h2 className="text-3xl font-semibold text-white">v2.1.0</h2>
                        <span className="text-sm text-zinc-500">July 2026</span>
                    </div>
                    <div className="space-y-4">
                        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
                            <li><strong>NEW:</strong> Added native file upload and media attachment support (PDFs, logs, images, and text content) using standard Web APIs.</li>
                            <li><strong>NEW:</strong> Added a standalone <code className="text-zinc-200">validateFiles</code> helper function to easily run file size/count checks or custom validation rules.</li>
                            <li><strong>NEW:</strong> Supports human-readable size limits (e.g. <code className="text-zinc-200">"25mb"</code>, <code className="text-zinc-200">"2mb"</code>) in the validation helper.</li>
                            <li><strong>FIX:</strong> Refined deprecation warnings to avoid false warnings on valid V2 text/attachment sends.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="mb-4 flex items-baseline gap-4">
                        <h2 className="text-3xl font-semibold text-white">v2.0.1</h2>
                        <span className="text-sm text-zinc-500">May 2026</span>
                    </div>
                    <div className="space-y-4">
                        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
                            <li><strong>FIX:</strong> Added runtime deprecation warning for <code className="text-zinc-200">v1.x</code> syntax (<code className="text-zinc-200">theme</code>, <code className="text-zinc-200">content</code>) to help users smoothly migrate to the V2 <code className="text-zinc-200">data</code> API without silent failures.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="mb-4 flex items-baseline gap-4">
                        <h2 className="text-3xl font-semibold text-white">v2.0.0</h2>
                        <span className="text-sm text-zinc-500">May 2026</span>
                    </div>
                    <div className="space-y-4">
                        <p className="text-zinc-300">
                            <strong>BREAKING CHANGE:</strong> Standardized field naming across the board. To eliminate confusion between top-level text, embed styling, and form fields, we introduced a strict hierarchical API.
                        </p>
                        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
                            <li><code className="text-zinc-200">content</code> is now <code className="text-zinc-200">text</code>.</li>
                            <li><code className="text-zinc-200">theme</code> is now <code className="text-zinc-200">embed</code>.</li>
                            <li>All arbitrary parameters like <code className="text-zinc-200">subject</code>, <code className="text-zinc-200">email</code>, and <code className="text-zinc-200">message</code> must be placed inside the <code className="text-zinc-200">data</code> object.</li>
                            <li><strong>NEW:</strong> Introduced a unified <code className="text-zinc-200">formcord.send()</code> method for fully custom notifications.</li>
                            <li><strong>NEW:</strong> The <code className="text-zinc-200">data</code> property automatically transforms arbitrary key-value pairs into beautifully formatted Discord embed fields (up to Discord's 25 field limit).</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="mb-4 flex items-baseline gap-4">
                        <h2 className="text-3xl font-semibold text-white">v1.0.0</h2>
                        <span className="text-sm text-zinc-500">Early 2026</span>
                    </div>
                    <div className="space-y-4">
                        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
                            <li>Initial release.</li>
                            <li>Universal Discord notifications using standard Web APIs.</li>
                            <li>Included 5 core helpers: <code className="text-zinc-200">contact</code>, <code className="text-zinc-200">error</code>, <code className="text-zinc-200">deploy</code>, <code className="text-zinc-200">feedback</code>, and <code className="text-zinc-200">bug</code>.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}
