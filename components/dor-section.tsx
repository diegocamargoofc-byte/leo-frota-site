"use client"

import { AlertCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const painPoints = [
  "Depende de indicação",
  "Não tem previsibilidade",
  "Vê gente pior sendo mais reconhecida",
]

export function DorSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: highlightRef, isVisible: highlightVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0d1117] py-24 px-6 md:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Side glow */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/10 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <div ref={titleRef} className={`scroll-fade-in ${titleVisible ? "visible" : ""}`}>
          <h2 className="mb-12 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl text-balance">
            Você é bom no que faz.
            <br />
            <span className="text-white/50">Mas sua imagem não mostra isso.</span>
          </h2>
        </div>

        <div ref={cardsRef} className={`mb-12 space-y-4 scroll-fade-in ${cardsVisible ? "visible" : ""}`}>
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-left transition-all duration-500 hover:border-red-500/30 hover:bg-red-500/5"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/20 text-red-400 transition-all duration-300 group-hover:bg-red-500/30 group-hover:scale-110">
                <AlertCircle className="h-5 w-5" />
              </div>
              <p className="text-lg text-white/80 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div 
          ref={highlightRef}
          className={`rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-indigo-500/5 to-transparent p-10 backdrop-blur-sm scroll-scale-in ${highlightVisible ? "visible" : ""}`}
        >
          <p className="text-xl font-semibold text-white md:text-2xl">
            O problema{" "}
            <span className="text-white/50">não é competência.</span>
          </p>
          <p className="mt-3 text-2xl font-bold md:text-3xl lg:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              É posicionamento.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
