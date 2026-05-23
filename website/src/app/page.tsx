import Link from "next/link"

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <header className="mb-16">
        <h1 className="text-6xl font-semibold tracking-tight mb-3">
          Visual Linear Algebra
        </h1>
        <p style={{ color: "var(--muted)" }} className="text-base leading-relaxed">
          Notes and interactive visualizations from Gilbert Strang&apos;s{" "}
          <span style={{ color: "var(--foreground)" }}>18.06 Linear Algebra</span>{" "}
          lectures at MIT. Built to understand, not just to watch.
        </p>
      </header>

      <section>
        <h2 style={{ color: "var(--muted)" }} className="text-xs uppercase tracking-widest mb-6">
          Lectures
        </h2>

        <div className="space-y-8">
          <Link href="/lecture/1" className="block group">
            <div className="border-t border-white/10 pt-6 -mx-3 px-3 py-4 rounded-lg transition-colors group-hover:bg-white/[0.03]">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-mono" style={{ color: "var(--accent)" }}>01</span>
                <span className="text-xs" style={{ color: "var(--muted)" }}>row · column · matrix</span>
              </div>
              <h3 className="text-lg font-medium mb-1">The Geometry of Linear Equations</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Three ways to see the same system: lines intersecting, vectors combining, a matrix acting on a vector.
              </p>
            </div>
          </Link>
        </div>
      </section>

    </main >
  );
}
