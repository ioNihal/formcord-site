type DocSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function DocSection({
  id,
  title,
  children,
}: DocSectionProps) {
  return (
    <section id={id} className="space-y-6 min-w-0">
      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}
