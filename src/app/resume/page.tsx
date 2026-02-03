export default function ResumePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-8">Resume</h1>

      <div className="border border-white/10 rounded-lg overflow-hidden">
        <iframe
          src="/resume.pdf"
          className="w-full h-[85vh]"
          title="Resume"
        />
      </div>
    </main>
  );
}
