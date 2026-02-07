export default function LabsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">Labs</h1>

      <p className="text-white/70 max-w-2xl mb-12">
        This section contains experiments, prototypes, and technical
        explorations where I test ideas, compare approaches, and
        document learnings.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-white/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            CNN vs Vision Transformer
          </h2>
          <p className="text-white/70 text-sm">
            Compared accuracy, training time, and inference latency
            on a small medical image dataset.
          </p>
        </div>

        <div className="border border-white/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            API Performance Benchmark
          </h2>
          <p className="text-white/70 text-sm">
            Measured REST API response times with and without
            caching and indexing strategies.
          </p>
        </div>
      </div>
    </main>
  );
}
