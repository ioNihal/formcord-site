

export default function CodeCard() {
    return (
        <div className="bg-linear-to-br from-zinc-950 to-zinc-900 rounded-2xl p-5 
                text-sm text-zinc-200 ring-2 ring-blue-200/10">
            <div className="mb-3 flex items-center justify-between text-[10px] text-zinc-400">
                <span>contact.ts</span>
                <span>formcord</span>
            </div>
            <pre className="whitespace-pre-wrap leading-5">
                {`import { formcord } from "formcord";

await formcord.contact({
    subject: "New Submission",
    email: "hello@formcord.dev",
    message: "Ready to integrate",
});`}
            </pre>
        </div>
    )
}
