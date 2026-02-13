import { Metadata } from "next";
import CodeBlock from "@/components/Docs/CodeBlock";
import Link from "next/link";

const sections = [
    { id: "get-started", label: "Get started" },
    { id: "discord-setup", label: "Discord setup" },
    { id: "helpers", label: "Helpers" },
    { id: "theming", label: "Theming" },
    { id: "notes", label: "Notes" },
];

export const metadata: Metadata = {
    title: "Docs",
    description:
        "Formcord documentation: quick start, helpers, theming, and usage patterns.",
    openGraph: {
        title: "Formcord Docs",
        description:
            "Quick start, helpers, theming, and usage patterns for Formcord.",
        images: [
            {
                url: "https://rendercard.vercel.app/api/rendercard?title=Formcord+Docs&description=Quick+start%2C+helpers%2C+theming%2C+usage+patterns.&theme=glass&accent=%235865F2&site=formcord.vercel.app/docs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Formcord Docs",
        description:
            "Quick start, helpers, theming, and usage patterns for Formcord.",
        images: [
            "https://rendercard.vercel.app/api/rendercard?title=Formcord+Docs&description=Quick+start%2C+helpers%2C+theming%2C+usage+patterns.&theme=glass&accent=%235865F2&site=formcord.vercel.app/docs",
        ],
    },
};


export default function DocsPage() {
    return (
        <main className="mx-auto w-full max-w-6xl px-6 py-20 text-zinc-300">
            <header className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-gray-300">Docs</p>
                <h1 className="text-4xl font-semibold text-white md:text-5xl">Formcord</h1>
                <p className="max-w-2xl text-base text-zinc-300">
                    Universal Discord notifications with zero dependencies. Works in Edge,
                    serverless, and Node runtimes using only Web APIs.
                </p>
            </header>

            <div className="mt-12 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
                <aside className="hidden lg:block">
                    <div className="sticky top-24 space-y-3 text-sm text-zinc-300">
                        {sections.map((s) => (
                            <a key={s.id} href={`#${s.id}`} className="block hover:text-white">
                                {s.label}
                            </a>
                        ))}
                    </div>
                </aside>

                <div className="space-y-14 min-w-0">
                    <section id="get-started" className="space-y-6">
                        <h2 className="text-2xl font-semibold text-white">Get started</h2>

                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-widest text-gray-300">Install</p>
                            <CodeBlock title="bash" code={`npm install formcord`} lang="bash" />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-widest text-gray-300">
                                Environment variables
                            </p>
                            <CodeBlock title="ENV" code={`FORMCORD_DISCORD_TOKEN=xxxx
FORMCORD_DISCORD_CHANNEL=yyyy`} />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-widest text-gray-300">
                                First message
                            </p>
                            <CodeBlock title="TS" code={`import { formcord } from "formcord";

await formcord.contact({
  token: process.env.FORMCORD_DISCORD_TOKEN!,
  channelId: process.env.FORMCORD_DISCORD_CHANNEL!,
  subject: "Hello",
  email: "me@example.com",
  message: "This is a test",
});`} lang="ts" />
                        </div>
                    </section>

                    <section id="discord-setup" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Discord bot setup <span className="text-zinc-300 text-sm font-light italic">(quick and easy)</span></h2>
                        <ol className="list-decimal space-y-2 pl-5 text-sm text-zinc-300">
                            <li>Create an app and bot in the <Link className="text-white hover:underline"
                                href={"https://discord.com/developers/applications"}>
                                Discord Developer Portal</Link>.</li>
                            <li>Copy the bot token.</li>
                            <li>Invite the bot to your server with permission to send messages.</li>
                            <li>Get the channel ID (enable Developer Mode, then copy ID).</li>
                        </ol>
                    </section>

                    <section id="helpers" className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-white">Helpers</h2>
                            <p className="mt-1 text-sm text-zinc-300">
                                Five helpers for common notification patterns.
                            </p>
                        </div>

                        {[
                            {
                                id: "contact",
                                title: "contact",
                                desc: "Form submissions and inquiries.",
                                params: [
                                    ["subject", "Subject of the contact message"],
                                    ["email", "Sender email address"],
                                    ["message", "Message body"],
                                    ["content", "Optional top message"],
                                    ["theme", "Optional embed theming"],
                                ],
                                code: `formcord.contact({
  token,
  channelId,
  subject,
  email,
  message,
  throwOnError,
  content,
  theme,
});`,
                            },
                            {
                                id: "error",
                                title: "error",
                                desc: "Runtime errors with optional context.",
                                params: [
                                    ["error", "Error object or message"],
                                    ["source", "Where the error originated"],
                                    ["environment", "Runtime environment"],
                                    ["content", "Optional top message"],
                                    ["theme", "Optional embed theming"],
                                ],
                                code: `formcord.error({
  token,
  channelId,
  error,
  source,
  environment,
  throwOnError,
  content,
  theme,
});`,
                            },
                            {
                                id: "deploy",
                                title: "deploy",
                                desc: "Deployment notifications.",
                                params: [
                                    ["project", "Project name"],
                                    ["environment", "Environment name"],
                                    ["url", "Deployment URL"],
                                    ["commit", "Commit SHA or ref"],
                                    ["content", "Optional top message"],
                                    ["theme", "Optional embed theming"],
                                ],
                                code: `formcord.deploy({
  token,
  channelId,
  project,
  environment,
  url,
  commit,
  throwOnError,
  content,
  theme,
});`,
                            },
                            {
                                id: "feedback",
                                title: "feedback",
                                desc: "User feedback and ratings.",
                                params: [
                                    ["rating", "Rating value"],
                                    ["message", "Feedback text"],
                                    ["content", "Optional top message"],
                                    ["theme", "Optional embed theming"],
                                ],
                                code: `formcord.feedback({
  token,
  channelId,
  rating,
  message,
  throwOnError,
  content,
  theme,
});`,
                            },
                            {
                                id: "bug",
                                title: "bug",
                                desc: "Bug reports with steps and context.",
                                params: [
                                    ["title", "Bug title"],
                                    ["steps", "Steps to reproduce"],
                                    ["browser", "Browser or client info"],
                                    ["content", "Optional top message"],
                                    ["theme", "Optional embed theming"],
                                ],
                                code: `formcord.bug({
  token,
  channelId,
  title,
  steps,
  browser,
  throwOnError,
  content,
  theme,
});`,
                            },
                        ].map((h) => (
                            <div key={h.id} id={h.id} className="space-y-3 min-w-0">
                                <h3 className="text-xl font-semibold text-white">{h.title}</h3>
                                <p className="text-sm text-zinc-300">{h.desc}</p>
                                <ul className="list-disc pl-5 text-sm text-zinc-300">
                                    {h.params.map(([k, v]) => (
                                        <li key={k}>
                                            <span className="text-white">{k}</span> - {v}
                                        </li>
                                    ))}
                                </ul>
                                <CodeBlock title="TS" code={h.code} lang="ts" />
                            </div>
                        ))}
                    </section>

                    <section id="theming" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Theming and content</h2>
                        <p className="text-sm text-zinc-300">
                            Add a top message with <code>content</code> and customize embeds with{" "}
                            <code>theme</code>.
                        </p>
                        <CodeBlock title="TS" code={`formcord.contact({
  token,
  channelId,
  subject: "Hello",
  email: "me@example.com",
  message: "This is a test",
  content: "New support request",
  theme: {
    title: "RenderCard Support Message",
    author: { name: "Anonymous User - 8f3a2d" },
    color: 0x5865f2,
    footer: { text: "Email: me@example.com" },
    timestamp: new Date().toISOString(),
  },
});`} lang="ts" />
                    </section>

                    <section id="notes" className="space-y-3">
                        <h2 className="text-2xl font-semibold text-white">Notes</h2>
                        <ul className="list-disc space-y-1 pl-5 text-zinc-300">
                            <li>Uses only <code>fetch</code>, <code>URL</code>, and JSON.</li>
                            <li>Retries once on 429 rate limits.</li>
                            <li>Best effort delivery.</li>
                            <li>Requires a Discord bot token with permission to post.</li>
                            <li>Not a guaranteed delivery system for enterprise logging or auditing.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}
