"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const promises = [
  "Clareza absoluta do seu posicionamento",
  "Diagnóstico completo da sua imagem atual",
  "Ajustes práticos para aplicar imediatamente",
  "Como parar de depender de indicação",
]

export function PromessaSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0a0a0f] py-28 md:py-40 overflow-hidden">
      {/* Section separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-52 bg-gradient-to-b from-[#0d1117] to-transparent pointer-events-none" />
      {/* Bottom blend into sobre */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, rgba(212,168,71,0.04) 50%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(0,150,200,0.04)" }} />

      {/* ══ Full-bleed 2-col split — headline left, promises right ══ */}
      <div
        ref={sectionRef}
        className={`relative px-6 sm:px-8 lg:px-12 xl:px-20 scroll-stagger ${sectionVisible ? "visible" : ""}`}
      >
        <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-20 xl:gap-28 lg:items-start">

          {/* Left — headline block, sticky on desktop */}
          <div className="lg:sticky lg:top-24">
            {/* Gold pill — consistent with hero / prova / dor */}
            <div className="scroll-item stagger-1 from-left mb-9">
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "5px 14px 5px 10px",
                border: "1px solid rgba(212,168,71,0.22)",
                borderRadius: "100px",
                background: "linear-gradient(135deg, rgba(212,168,71,0.06) 0%, transparent 100%)",
              }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D4A847", boxShadow: "0 0 6px rgba(212,168,71,0.60)", flexShrink: 0 }} />
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(212,168,71,0.78)" }}>
                  A Solução
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2
              className="scroll-item stagger-2 font-black leading-[0.93] tracking-[-0.04em] text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              O que você vai<br />
              <span style={{ color: "rgba(255,255,255,0.36)" }}>sair sabendo.</span>
            </h2>

            <p className="scroll-item stagger-3 mt-8 text-lg text-white/55 md:text-xl leading-relaxed">
              Em{" "}
              <span style={{ color: "#D4A847", fontWeight: 600 }}>4 horas</span>{" "}
              de evento presencial.
            </p>
          </div>

          {/* Right — promise list with vertical gold bars
              Structurally different from DorSection (horizontal border-t rows).
              Vertical bars = affirmative, columns = solution energy. */}
          <div className="mt-14 lg:mt-0">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="scroll-item group flex items-start gap-6 py-7 border-t"
                style={{
                  borderColor: "rgba(255,255,255,0.07)",
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {/* Vertical accent bar */}
                <div style={{
                  width: "2px", flexShrink: 0, minHeight: "28px",
                  background: "rgba(212,168,71,0.24)",
                  borderRadius: "2px", marginTop: "4px",
                  transition: "background 0.3s ease",
                }}
                  // brighten on parent hover via JS — CSS group-hover doesn't reach style props
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(212,168,71,0.55)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(212,168,71,0.24)" }}
                />
                <p className="text-xl font-semibold text-white/72 group-hover:text-white transition-colors duration-300 md:text-2xl lg:text-3xl leading-snug tracking-tight">
                  {promise}
                </p>
              </div>
            ))}
            <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }} />
          </div>

        </div>
      </div>
    </section>
  )
}
