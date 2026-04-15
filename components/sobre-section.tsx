"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SobreSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0d1117] py-32 px-6 md:py-44 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[160px]"
        style={{ background: "radial-gradient(ellipse, rgba(14,165,233,0.05) 0%, rgba(99,102,241,0.04) 50%, transparent 70%)" }}
      />

      <div
        ref={contentRef}
        className={`relative mx-auto max-w-4xl scroll-fade-in ${contentVisible ? "visible" : ""}`}
      >
        <p className="mb-10 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-cyan-400/60">
          O Evento
        </p>

        {/* Strikethroughs — bold, editorial */}
        <div className="mb-14 space-y-3">
          <p className="text-3xl font-black text-white/[0.15] line-through decoration-rose-400/20 decoration-[3px] md:text-5xl lg:text-6xl tracking-tight leading-tight">
            Palestra motivacional.
          </p>
          <p className="text-3xl font-black text-white/[0.15] line-through decoration-rose-400/20 decoration-[3px] md:text-5xl lg:text-6xl tracking-tight leading-tight">
            Sobre postar mais.
          </p>
        </div>

        {/* Divider */}
        <div className="mb-14 flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/40" />
        </div>

        {/* Main statement */}
        <p className="text-3xl font-black leading-[1.1] text-white tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
          Construir uma imagem que{" "}
          <span className="relative inline-block">
            <span
              className="relative z-10"
              style={{
                background: "linear-gradient(135deg, #67e8f9 0%, #38bdf8 55%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              gera oportunidade
            </span>
            <span className="absolute -inset-2 bg-cyan-400/8 blur-2xl rounded-lg" />
          </span>{" "}
          <span className="text-white/35">antes de você vender.</span>
        </p>
      </div>
    </section>
  )
}
