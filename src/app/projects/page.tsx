import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>

      <p className="text-white/70 mb-12 max-w-2xl">
        A selection of projects focused on backend systems, AI, and
        real-world problem solving.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            tech={project.tech}
            href={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </main>
  );
}
