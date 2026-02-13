import { highlight } from "@/lib/highlight";


export default async function CodeCard() {
    const code = `import { formcord } from "formcord";

await formcord.contact({
  subject: "New Submission",
  email: "hello@formcord.dev",
  message: "Ready to integrate",
});`;

    const html = await highlight(code);

    return (
        <div className="bg-linear-to-br from-zinc-950 to-zinc-900 rounded-2xl p-5 
                text-sm text-zinc-200 ring-2 ring-blue-200/10">
            <div className="mb-3 flex items-center justify-between text-[10px] text-zinc-400">
                <span>contact.ts</span>
                <span>formcord</span>
            </div>
            <div
                className=" overflow-x-auto [&_pre]:bg-transparent!"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    )
}
