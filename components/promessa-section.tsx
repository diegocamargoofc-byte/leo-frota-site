"use client"

import { Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const promises = [
  "Clareza absoluta do seu posicionamento",
  "Diagnóstico completo da sua imagem atual",
  "Ajustes práticos para aplicar imediatamente",
  "Como parar de depender de indicação",
]

export function PromessaSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0a0a0f] py-24 px-6 md:py-32 overflow-hidden">
      {/* Ambient glow - reduced and with indigo */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/3 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-3xl">
        <div ref={titleRef} className={`scroll-fade-in ${titleVisible ? "visible" : ""}`}>
          <h2 className="mb-4 text-center text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            O que você vai sair sabendo:
          </h2>
          <p className="mb-16 text-center text-lg text-white/50">
            Em <span className="text-cyan-400 font-semibold">4 horas</span> de evento presencial
          </p>
        </div>

        <div ref={cardsRef} className={`space-y-4 scroll-fade-in ${cardsVisible ? "visible" : ""}`}>
          {promises.map((promise, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 text-white shadow-lg shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-110">
                <Check className="h-5 w-5" strokeWidth={3} />
              </div>
              <p className="text-lg font-medium text-white/90">{promise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
