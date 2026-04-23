"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Escalating visual weight — each item heavier than the last.
// The third line is the gut-punch: it deserves full opacity and maximum weight.
const painPoints = [
  { text: "Depende de indicação.",                     opacity: 0.44, weight: "font-medium"   },
  { text: "Não tem previsibilidade.",                  opacity: 0.64, weight: "font-semibold" },
  { text: "Vê gente pior sendo mais reconhecida.",     opacity: 0.92, weight: "font-black"    },
]

// Cascading asymmetric indent — creates lateral rhythm without changing copy.
// Mobile: uniform. Asymmetry kicks in at sm+.
const ROW_INDENT = [
  "pl-6 sm:pl-8  lg:pl-12  xl:pl-20",
  "pl-6 sm:pl-20 lg:pl-44  xl:pl-60",
  "pl-6 sm:pl-12 lg:pl-24  xl:pl-36",
] as const

export function DorSection() {
  const { ref: titleRef,     isVisible: titleVisible }     = useScrollAnimation()
  const { ref: listRef,      isVisible: listVisible }      = useScrollAnimation()
  const { ref: punchlineRef, isVisible: punchlineVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0d1117] py-28 md:py-40 overflow-hidden">

      {/* ── Background layers ──────────────────────────────────────────────── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-56 bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
      {/* Indigo bridge at bottom — echoes Promessa's indigo/gold before the transition */}
      <div className="absolute bottom-0 right-0 w-[420px] h-[260px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 65%)" }} />
      <div className="absolute -left-80 top-1/4 w-[600px] h-[600px] bg-rose-500/[0.09] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/3 w-[400px] h-[400px] bg-rose-900/[0.07] rounded-full blur-[140px] pointer-events-none" />

      {/* ══════════════════════════════════════════════════════════════════════
          BLOCK 1 — HEADLINE
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={titleRef}
        className={`relative px-6 sm:px-8 lg:px-12 xl:px-20 scroll-stagger ${titleVisible ? "visible" : ""}`}
      >
        {/* Gold pill */}
        <div className="scroll-item stagger-1 from-left mb-9">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "5px 14px 5px 10px",
            border: "1px solid rgba(212,168,71,0.22)",
            borderRadius: "100px",
            background: "linear-gradient(135deg, rgba(212,168,71,0.06) 0%, transparent 100%)",
          }}>
            <div style={{
              width: 5, height: 5, borderRadius: "50%",
              background: "#D4A847", boxShadow: "0 0 6px rgba(212,168,71,0.60)", flexShrink: 0,
            }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(212,168,71,0.78)" }}>
              O Problema
            </span>
          </div>
        </div>

        {/* Headline — full weight assertion, then the qualifier fades to near-nothing.
            "Você é bom" = confident statement.
            "no que faz." = italic whisper. Implies: but that's not enough. */}
        <h2
          className="scroll-item stagger-2 font-black leading-[0.93] tracking-[-0.04em]"
          style={{ fontSize: "clamp(3.8rem, 10.5vw, 9rem)" }}
        >
          <span style={{ color: "#ffffff" }}>Você é bom</span>
          <br />
          <span style={{ color: "rgba(255,255,255,0.15)", fontStyle: "italic" }}>no que faz.</span>
        </h2>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          BLOCK 2 — PAIN POINTS  (no counters — raw admissions, not a list)
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={listRef}
        className={`mt-20 md:mt-28 scroll-stagger ${listVisible ? "visible" : ""}`}
      >
        {painPoints.map((point, index) => (
          <div
            key={index}
            className={`scroll-item border-t pr-6 sm:pr-10 lg:pr-16 py-11 md:py-14 ${ROW_INDENT[index]}`}
            style={{
              borderColor: `rgba(244,63,94,${index === 2 ? "0.22" : "0.13"})`,
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <p
              className={`${point.weight} leading-snug tracking-tight`}
              style={{
                fontSize: "clamp(1.8rem, 4.8vw, 4.2rem)",
                color: `rgba(255,255,255,${point.opacity})`,
              }}
            >
              {point.text}
            </p>
          </div>
        ))}
        {/* Closing border — slightly heavier than the separators */}
        <div
          className="scroll-item border-t"
          style={{
            borderColor: "rgba(244,63,94,0.14)",
            transitionDelay: `${painPoints.length * 100}ms`,
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          BLOCK 3 — PUNCHLINE  (pivot → revelation)
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={punchlineRef}
        className={`mt-24 md:mt-36 scroll-stagger ${punchlineVisible ? "visible" : ""}`}
      >
        {/* Setup — the pivot line. Bigger than before: it's doing real work. */}
        <p
          className="scroll-item stagger-1 hidden md:block text-right pr-6 sm:pr-8 lg:pr-12 xl:pr-20 mb-8"
          style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.45rem)", color: "rgba(255,255,255,0.30)", letterSpacing: "-0.01em" }}
        >
          O problema não é competência.
        </p>
        <p
          className="scroll-item stagger-1 md:hidden px-6 mb-8"
          style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.38)" }}
        >
          O problema não é competência.
        </p>

        {/* Gold thread — a visual breath before the revelation */}
        <div className="scroll-item stagger-2 px-6 sm:px-8 lg:px-12 xl:px-20 mb-5">
          <div style={{ width: "44px", height: "1px", background: "linear-gradient(to right, rgba(212,168,71,0.50), transparent)" }} />
        </div>

        {/* Payoff — the revelation. Full scale, full weight. */}
        <p
          className="scroll-item stagger-3 px-6 sm:px-8 lg:px-12 xl:px-20 font-black tracking-[-0.04em] leading-[0.88] whitespace-nowrap"
          style={{
            fontSize: "clamp(1.6rem, 8.5vw, 9.5rem)",
            background: "linear-gradient(135deg, #67e8f9 0%, #38bdf8 50%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          É posicionamento.
        </p>
      </div>

    </section>
  )
}
