export const metadata = {
  title: "Siddhant Shitole | Resume",
  description:
    "Resume of Siddhant Shitole, backend engineer focused on scalable systems and applied AI.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-28">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Resume
          </h1>
          <p className="text-gray mt-2">
            Backend & Systems Engineer · Applied AI
          </p>
          <p className="text-gray mb-8 leading-relaxed">
  This page contains my complete resume, including my education,
  technical skills, and project experience. I’m always open to
  feedback and opportunities.
</p>
        </div>

      </div>

      {/* Resume viewer */}
      <div className="border border-white/10 rounded-xl overflow-hidden bg-black/40 backdrop-blur">
        <iframe
          src="/resume.pdf"
          className="w-full h-[85vh]"
          title="Resume"
        />
      </div>
    </main>
  );
}
