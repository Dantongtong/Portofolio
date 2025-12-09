import TechBadge from "./TechBadge";

interface ProjectCardProps {
    title: string;
    description: string;
    impact: string;
    tech: string[];
};

export default function ProjectCard({ title, description, impact, tech }:ProjectCardProps) {
  return (
    <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="text-slate-700 mt-2">{description}</p>

      <p className="mt-2 text-indigo-600 font-medium">Impact: {impact}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {tech.map((t: string) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </div>
  );
}
