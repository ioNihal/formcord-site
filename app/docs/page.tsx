import { Metadata } from "next";
import CodeBlock from "@/components/Docs/CodeBlock";
import Link from "next/link";

const sections = [
    { id: "get-started", label: "Get started" },
    { id: "discord-setup", label: "Discord setup" },
    { id: "helpers", label: "Helpers" },
    { id: "delivery-status", label: "Delivery status" },
    { id: "media", label: "Media & Attachments" },
    { id: "theming", label: "Theming" },
    { id: "migration", label: "v1 to v2 Migration" },
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

await formcord.send({
  token: process.env.FORMCORD_DISCORD_TOKEN!,
  channelId: process.env.FORMCORD_DISCORD_CHANNEL!,
  data: {
    "Subject": "Hello",
    "Email": "me@example.com",
    "Message": "This is a test",
  }
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
                                Built-in helpers to standardize your payloads. All custom fields should go inside the <code>data</code> object.
                            </p>
                        </div>

                        {[
                            {
                                id: "contact",
                                title: "contact",
                                desc: "Form submissions and inquiries.",
                                params: [
                                    ["data.subject", "Subject of the contact message"],
                                    ["data.email", "Sender email address"],
                                    ["data.message", "Message body"],
                                    ["text", "Optional top message text"],
                                    ["embed", "Optional embed styling"],
                                ],
                                code: `formcord.contact({
  token,
  channelId,
  throwOnError,
  text,
  embed,
  data: {
    subject,
    email,
    message,
  }
});`,
                            },
                            {
                                id: "error",
                                title: "error",
                                desc: "Runtime errors with optional context.",
                                params: [
                                    ["error", "Error object or message"],
                                    ["data.source", "Where the error originated"],
                                    ["data.environment", "Runtime environment"],
                                    ["text", "Optional top message text"],
                                    ["embed", "Optional embed styling"],
                                ],
                                code: `formcord.error({
  token,
  channelId,
  error,
  throwOnError,
  text,
  embed,
  data: {
    source,
    environment,
  }
});`,
                            },
                            {
                                id: "deploy",
                                title: "deploy",
                                desc: "Deployment notifications.",
                                params: [
                                    ["data.project", "Project name"],
                                    ["data.environment", "Environment name"],
                                    ["data.url", "Deployment URL"],
                                    ["data.commit", "Commit SHA or ref"],
                                    ["text", "Optional top message text"],
                                    ["embed", "Optional embed styling"],
                                ],
                                code: `formcord.deploy({
  token,
  channelId,
  throwOnError,
  text,
  embed,
  data: {
    project,
    environment,
    url,
    commit,
  }
});`,
                            },
                            {
                                id: "feedback",
                                title: "feedback",
                                desc: "User feedback and ratings.",
                                params: [
                                    ["data.rating", "Rating value"],
                                    ["data.message", "Feedback text"],
                                    ["text", "Optional top message text"],
                                    ["embed", "Optional embed styling"],
                                ],
                                code: `formcord.feedback({
  token,
  channelId,
  throwOnError,
  text,
  embed,
  data: {
    rating,
    message,
  }
});`,
                            },
                            {
                                id: "bug",
                                title: "bug",
                                desc: "Bug reports with steps and context.",
                                params: [
                                    ["data.title", "Bug title"],
                                    ["data.steps", "Steps to reproduce"],
                                    ["data.browser", "Browser or client info"],
                                    ["text", "Optional top message text"],
                                    ["embed", "Optional embed styling"],
                                ],
                                code: `formcord.bug({
  token,
  channelId,
  throwOnError,
  text,
  embed,
  data: {
    title,
    steps,
    browser,
  }
});`,
                            },
                        ].map((h) => (
                            <div key={h.id} id={h.id} className="space-y-3 min-w-0">
                                <h3 className="text-xl font-semibold text-white">{h.title}</h3>
                                <p className="text-sm text-zinc-300">{h.desc}</p>
                                <ul className="list-disc pl-5 text-sm text-zinc-300">
                                    {h.params.map(([k, v]) => (
                                        <li key={k}>
                                            <span className="text-white">{k}</span> - {v as React.ReactNode}
                                        </li>
                                    ))}
                                </ul>
                                <CodeBlock title="TS" code={h.code} lang="ts" />
                            </div>
                        ))}
                    </section>

                    <section id="delivery-status" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Delivery status and debugging</h2>
                        <p className="text-sm text-zinc-300">
                            Formcord is fire-and-forget by default. Every notification method resolves with a simple <code>success</code> status when Discord accepts or rejects the request.
                        </p>
                        <CodeBlock title="TS" code={`const result = await formcord.contact({
  token,
  channelId,
  data: { subject, email, message }
});

if (!result.success) {
  // Show a fallback, retry, or record the failed notification.
}`} lang="ts" />
                        <p className="text-sm text-zinc-300">
                            Set <code>throwOnError: true</code> when you need Discord&apos;s original response for debugging.
                        </p>
                    </section>

                    <section id="media" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Media & Attachments</h2>
                        <p className="text-sm text-zinc-300">
                            Attach images, PDFs, logs, or text files directly using the optional <code>files</code> array. Formcord handles standard Discord upload constraints automatically (max 25MB combined size, max 10 files) and normalizes standard Web API <code>File</code> / <code>Blob</code> objects dynamically.
                        </p>
                        <CodeBlock title="TS" code={`import { formcord } from "formcord";
import fs from "node:fs/promises";

await formcord.send({
  token,
  channelId,
  text: "Attached multiple files of different types",
  files: [
    // Type 1: Raw Web API File/Blob objects (from client-side inputs or server parsers)
    rawBrowserFileObject,

    // Type 2: Plain Text Strings (logs, CSVs, markdowns)
    {
      name: "system-logs.txt",
      data: "INFO: Task started\\nERROR: Failed to save changes.",
      contentType: "text/plain"
    },

    // Type 3: Node Buffers / Uint8Arrays (local filesystem files)
    {
      name: "avatar.png",
      data: await fs.readFile("./public/avatar.png"),
      contentType: "image/png"
    },

    // Type 4: ArrayBuffers (remote asset fetch results)
    {
      name: "statement.pdf",
      data: await fetch("https://api.example.com/invoice.pdf").then(res => res.arrayBuffer()),
      contentType: "application/pdf"
    }
  ]
});`} lang="ts" />

                        <div className="pt-2">
                            <h3 className="text-lg font-semibold text-white">Custom Validation Helper</h3>
                            <p className="mt-1 text-sm text-zinc-300">
                                If you want custom constraints (e.g. limiting files to 5MB, setting a max count of 5, or enforcing all-or-nothing check policies), use the standalone <code>validateFiles</code> helper function:
                            </p>
                        </div>
                        <CodeBlock title="TS" code={`import { formcord, validateFiles } from "formcord";
import fs from "node:fs/promises";

// 1. Gather your files (Formcord File/Blob normalization runs automatically)
const attachments = [
  rawBrowserFileObject, 
  {
    name: "server_logs.txt",
    data: "DEBUG: Server running...",
    contentType: "text/plain"
  },
  {
    name: "invoice.pdf",
    data: await fetch("https://api.example.com/invoice.pdf").then(res => res.arrayBuffer()),
    contentType: "application/pdf"
  }
];

// 2. Validate the mixed list
const { valid, invalid } = validateFiles(attachments, {
  maxFileSize: "5mb",     // Max 5 MB per file
  maxTotalSize: "15mb",   // Max 15 MB combined total
  maxFileCount: 5,        // Max 5 files total
  ignoreInvalid: true,    // Keep valid files, skip bad ones (false = reject all on any failure)
  throwOnError: false,    // Return results gracefully (true = throw immediately)
  logWarnings: true       // Print warning logs to console
});

// 3. Handle validation errors
if (invalid.length > 0) {
  console.warn("Some files failed validation checks:", 
    invalid.map(i => \`\${i.file.name}: \${i.message}\`)
  );
}

// 4. Send the verified valid files
if (valid.length > 0) {
  await formcord.send({
    token,
    channelId,
    text: "Notification submission with attachments.",
    files: valid
  });
}`} lang="ts" />
                    </section>

                    <section id="theming" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Theming and custom fields</h2>
                        <p className="text-sm text-zinc-300">
                            Add a top message with <code>text</code>, customize embeds with{" "}
                            <code>embed</code>, and pass unlimited custom fields in <code>data</code>.
                        </p>
                        <CodeBlock title="TS" code={`formcord.contact({
  token,
  channelId,
  text: "New support request",
  embed: {
    title: "RenderCard Support Message",
    author: { name: "Anonymous User - 8f3a2d" },
    color: 0x5865f2,
    footer: { text: "System Notification" },
    timestamp: new Date().toISOString(),
  },
  data: {
    subject: "Hello",
    email: "me@example.com",
    message: "This is a test",
    "Extra Field": "Unlimited custom fields allowed"
  }
});`} lang="ts" />
                    </section>

                    <section id="migration" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">⚠️ Migration Guide (v1 to v2)</h2>
                        <p className="text-sm text-zinc-300">
                            Version 2.0.0 standardizes field names to prevent confusion between top-level text, embed styling, and form fields.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2 items-stretch">
                            <div className="space-y-2 flex flex-col">
                                <p className="text-xs font-semibold text-red-400">Before (v1.x)</p>
                                <CodeBlock className="h-full" title="TS" code={`formcord.contact({
  token,
  channelId,
  content: "Top message text",
  theme: { title: "My Title" },
  subject: "Hello",
  email: "me@example.com",
  message: "Test"
});`} lang="ts" />
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <p className="text-xs font-semibold text-green-400">After (v2.x)</p>
                                <CodeBlock className="h-full" title="TS" code={`formcord.contact({
  token,
  channelId,
  text: "Top message text",
  embed: { title: "My Title" },
  data: {
    subject: "Hello",
    email: "me@example.com",
    message: "Test"
  }
});`} lang="ts" />
                            </div>
                        </div>
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
