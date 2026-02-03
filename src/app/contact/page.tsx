export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-white/70 mb-12 max-w-2xl">
        I’m open to internship opportunities, collaborations,
        and technical discussions. The best way to reach me
        is via email or LinkedIn.
      </p>

      <div className="space-y-6">
        {/* Email */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Email</h2>
          <a
            href="mailto:siddhantshitole0@gmail.com"
            className="text-white/80 hover:text-white transition"
          >
            siddhantshitole0@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div>
          <h2 className="text-lg font-semibold mb-1">LinkedIn</h2>
          <a
            href="https://www.linkedin.com/in/siddhant-shitole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            linkedin.com/in/siddhant-shitole
          </a>
        </div>

        {/* GitHub */}
        <div>
          <h2 className="text-lg font-semibold mb-1">GitHub</h2>
          <a
            href="https://github.com/SiddhantShitole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            github.com/SiddhantShitole
          </a>
        </div>
      </div>
    </main>
  );
}
