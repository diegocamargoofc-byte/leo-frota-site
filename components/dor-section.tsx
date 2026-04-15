"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const painPoints = [
  "Depende de indicação.",
  "Não tem previsibilidade.",
  "Vê gente pior sendo mais reconhecida.",
]

export function DorSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation()
  const { ref: punchlineRef, isVisible: punchlineVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0d1117] py-32 px-6 md:py-44 overflow-hidden">
      {/* Blend from prova */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none" />
      {/* Subtle side glow */}
      <div className="absolute -left-80 top-1/4 w-[600px] h-[600px] bg-rose-500/[0.05] rounded-full blur-[180px]" />

      <div className="relative mx-auto max-w-4xl">

        {/* Eyebrow + headline */}
        <div ref={titleRef} className={`scroll-fade-in ${titleVisible ? "visible" : ""}`}>
          <p className="mb-8 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-rose-400/60">
            O Problema
          </p>
          <h2 className="text-5xl font-black leading-[1.04] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
            Você é bom<br />
            <span className="text-white/25">no que faz.</span>
          </h2>
        </div>

        {/* Pain statements — editorial, no cards */}
        <div
          ref={listRef}
          className={`mt-20 md:mt-28 scroll-fade-in ${listVisible ? "visible" : ""}`}
        >
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-baseline gap-8 border-t border-white/[0.06] py-8 md:py-10"
            >
              <span className="shrink-0 font-mono text-[0.65rem] font-semibold text-white/20 tracking-[0.15em]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-2xl font-semibold text-white/50 md:text-3xl lg:text-4xl leading-snug tracking-tight">
                {point}
              </p>
            </div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* Punchline */}
        <div
          ref={punchlineRef}
          className={`mt-20 md:mt-28 scroll-fade-in ${punchlineVisible ? "visible" : ""}`}
        >
          <p className="mb-5 text-lg text-white/30 md:text-xl">
            O problema não é competência.
          </p>
          <p
            className="text-5xl font-black tracking-tight md:text-7xl lg:text-[5.5rem]"
            style={{
              background: "linear-gradient(135deg, #67e8f9 0%, #38bdf8 50%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            É posicionamento.
          </p>
        </div>

      </div>
    </section>
  )
}
