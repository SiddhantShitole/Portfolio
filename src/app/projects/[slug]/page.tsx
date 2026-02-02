import { projects } from "@/data/projects";

type Params = {
  params: {
    slug: string;
  };
};

export default function ProjectCaseStudy({ params }: Params) {
  const project = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-2xl font-semibold">
          Project not found
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        {project.title}
      </h1>

      <p className="text-white/70 mb-10">
        {project.description}
      </p>

      {/* TECH STACK */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-sm px-3 py-1 border border-white/20 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">
          Problem
        </h2>

        <p className="text-white/70 leading-relaxed">
          Many real-world systems suffer from inefficiency,
          lack of automation, or delayed decision-making.
          This project was built to address a concrete,
          practical problem using reliable engineering
          and data-driven approaches.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">
          Solution
        </h2>

        <p className="text-white/70 leading-relaxed">
          I designed and implemented a system that combines
          backend services with intelligent processing to
          deliver accurate and efficient results. The focus
          was on scalability, correctness, and usability.
        </p>
      </section>

      {/* ARCHITECTURE */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">
          System Architecture
        </h2>

        <p className="text-white/70 leading-relaxed">
          The system follows a modular architecture with
          clear separation of concerns. The backend handles
          request processing and orchestration, while the
          core logic focuses on computation and analysis.
        </p>
      </section>

      {/* CHALLENGES */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">
          Challenges & Trade-offs
        </h2>

        <p className="text-white/70 leading-relaxed">
          Key challenges included performance optimization,
          handling edge cases, and balancing accuracy with
          response time. Several design trade-offs were made
          to ensure reliability under realistic constraints.
        </p>
      </section>

      {/* RESULTS */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">
          Results
        </h2>

        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Improved efficiency compared to manual workflows</li>
          <li>Consistent and reliable outputs</li>
          <li>Design ready for future scaling</li>
        </ul>
      </section>

      {/* FUTURE */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Future Improvements
        </h2>

        <p className="text-white/70 leading-relaxed">
          Planned improvements include better monitoring,
          optimization for higher loads, and extending the
          system with additional intelligent features.
        </p>
      </section>
    </main>
  );
}
