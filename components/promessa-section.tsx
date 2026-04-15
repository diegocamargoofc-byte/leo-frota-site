"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const promises = [
  "Clareza absoluta do seu posicionamento",
  "Diagnóstico completo da sua imagem atual",
  "Ajustes práticos para aplicar imediatamente",
  "Como parar de depender de indicação",
]

export function PromessaSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0a0a0f] py-32 px-6 md:py-44 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0d1117] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/[0.04] rounded-full blur-[180px]" />

      <div className="relative mx-auto max-w-4xl">

        {/* Header */}
        <div ref={titleRef} className={`mb-20 md:mb-28 scroll-fade-in ${titleVisible ? "visible" : ""}`}>
          <p className="mb-8 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-cyan-400/60">
            A Solução
          </p>
          <h2 className="text-5xl font-black leading-[1.04] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
            O que você vai<br />
            <span className="text-white/25">sair sabendo.</span>
          </h2>
          <p className="mt-8 text-lg text-white/40 md:text-xl leading-relaxed">
            Em <span className="text-cyan-400 font-semibold">4 horas</span> de evento presencial.
          </p>
        </div>

        {/* Numbered list — editorial */}
        <div ref={listRef} className={`scroll-fade-in ${listVisible ? "visible" : ""}`}>
          {promises.map((promise, index) => (
            <div
              key={index}
              className="group flex items-start gap-10 md:gap-16 border-t border-white/[0.06] py-10 md:py-12 last:border-b last:border-white/[0.06]"
            >
              <span
                className="shrink-0 text-[3.5rem] font-black leading-none text-white/[0.06] tabular-nums select-none md:text-[4.5rem]"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 text-xl font-semibold text-white/55 group-hover:text-white/85 transition-colors duration-300 md:text-2xl lg:text-3xl leading-snug tracking-tight">
                {promise}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
