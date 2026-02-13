import CodeBlock from "./CodeBlock";

type HelperCardProps = {
  id: string;
  title: string;
  description: string;
  params: [string, string][];
  code: string;
};

export default async function HelperCard({
  id,
  title,
  description,
  params,
  code,
}: HelperCardProps) {
  return (
    <div id={id} className="space-y-3 min-w-0">
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm text-zinc-400">
        {description}
      </p>

      <ul className="list-disc pl-5 text-xs text-zinc-400">
        {params.map(([key, value]) => (
          <li key={key}>
            <span className="text-white">{key}</span> - {value}
          </li>
        ))}
      </ul>

      <CodeBlock code={code} />
    </div>
  );
}
