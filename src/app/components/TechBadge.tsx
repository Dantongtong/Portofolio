export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="px-2 py-1 text-sm bg-slate-100 border border-slate-300 rounded-md">
      {label}
    </span>
  );
}
