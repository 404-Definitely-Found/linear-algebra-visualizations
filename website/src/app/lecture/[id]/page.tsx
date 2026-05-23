'use client'
import Link from "next/link"
import RowPicture from "@/components/RowPicture"

export default function LecturePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      <nav className="mb-12">
        <Link
          href="/"
          className="text-sm transition-colors"
          style={{ color: "var(--muted)" }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          ← Visual Linear Algebra
        </Link>
      </nav>

      <header className="mb-16">
        <span className="text-xs font-mono mb-4 block tracking-widest uppercase" style={{ color: "var(--accent)" }}>
          Lecture 01
        </span>
        <h1 className="text-4xl font-semibold tracking-tight mb-5">
          The Geometry of Linear Equations
        </h1>
        <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
          The central idea: a system of linear equations has three different geometric interpretations.
          Each reveals something the others hide.
        </p>
      </header>

      <section className="space-y-16">

        <div>
          <div className="border-t border-white/10 pt-8 mb-4">
            <h2 className="text-lg font-medium mb-1">Row Picture</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Each equation is a line. The solution is where they intersect.
            </p>
          </div>
          <div className="h-80">
            <RowPicture />
          </div>
        </div>

        <div>
          <div className="border-t border-white/10 pt-8 mb-4">
            <h2 className="text-lg font-medium mb-1">Column Picture</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Each column is a vector. The solution is the linear combination that reaches the target.
            </p>
          </div>
          <div
            className="h-80 rounded-lg flex items-center justify-center text-sm"
            style={{ border: '1px dashed #ffffff15', color: 'var(--muted)' }}
          >
            coming soon
          </div>
        </div>

        <div>
          <div className="border-t border-white/10 pt-8 mb-4">
            <h2 className="text-lg font-medium mb-1">Matrix Form</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              The same system written as Ax = b — one matrix, one unknown vector, one right-hand side.
            </p>
          </div>
          <div
            className="h-40 rounded-lg flex items-center justify-center text-sm"
            style={{ border: '1px dashed #ffffff15', color: 'var(--muted)' }}
          >
            coming soon
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <h2 className="text-sm uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>Notes</h2>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Handwritten notes will appear here.
          </p>
        </div>

      </section>

    </main>
  )
}
