import Link from "next/link";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  slug: string;          // 站内详情页
  externalLink?: string; // GitHub / Demo
}

export default function ProjectCard({
  title,
  description,
  impact,
  tech,
  slug,
  externalLink,
}: ProjectCardProps) {
  return (
    <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition">
      {/* 点击标题 / 描述 → 站内详情页 */}
      <Link href={`/projects/${slug}`} className="block group">
        <h2 className="text-xl font-semibold group-hover:underline">
          {title}
        </h2>

        <p className="text-slate-700 mt-2">{description}</p>
        <p className="mt-2 text-indigo-600 font-medium">
          Impact: {impact}
        </p>
      </Link>

      {/* 技术栈 */}
      <div className="flex flex-wrap gap-2 mt-3">
        {tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>

      {/* 操作按钮 */}
      <div className="mt-4 flex gap-4 text-sm">
        {externalLink ? (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-indigo-600"
          >
            Details →
          </a>
        ) :
        <Link
          href={`/projects/${slug}`}
          className="text-slate-600 hover:text-indigo-600"
        >
          Details →
        </Link>
        }
      </div>
    </div>
  );
}
