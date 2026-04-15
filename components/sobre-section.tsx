"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SobreSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0d1117] py-24 px-6 md:py-32 overflow-hidden">
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-[100px]" />

      <div
        ref={contentRef}
        className={`relative mx-auto max-w-3xl text-center scroll-fade-in ${contentVisible ? "visible" : ""}`}
      >
        <h2 className="mb-16 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Sobre o Evento
        </h2>

        <div className="space-y-4">
          <p className="text-xl text-white/70 md:text-2xl">
            <span className="font-semibold text-white/40 line-through decoration-red-500/50">
              Não é palestra motivacional.
            </span>
          </p>
          <p className="text-xl text-white/70 md:text-2xl">
            <span className="font-semibold text-white/40 line-through decoration-red-500/50">
              Não é sobre postar mais.
            </span>
          </p>
        </div>

        <div className="mx-auto my-12 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <div className="h-2 w-2 rounded-full bg-cyan-400" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>

        <p className="text-xl font-medium leading-relaxed text-white md:text-2xl lg:text-3xl">
          É sobre construir uma imagem que{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
              gera oportunidade
            </span>
            <span className="absolute -inset-1 bg-cyan-400/20 blur-lg rounded-lg" />
          </span>
          <br />
          <span className="text-white/60">antes de você vender.</span>
        </p>
      </div>
    </section>
  )
}
