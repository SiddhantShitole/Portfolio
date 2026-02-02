import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  href: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="block border border-white/10 rounded-lg p-6 hover:border-white/30 transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-white/70 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 border border-white/20 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
