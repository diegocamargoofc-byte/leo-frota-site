"use client"

import { Target, Eye, Megaphone, TrendingUp, Users, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contents = [
  {
    icon: Target,
    title: "Posicionamento Estratégico",
    description: "Defina seu território no mercado",
  },
  {
    icon: Eye,
    title: "Percepção de Valor",
    description: "Como ser visto como autoridade",
  },
  {
    icon: Megaphone,
    title: "Comunicação de Impacto",
    description: "Fale para quem precisa ouvir",
  },
  {
    icon: TrendingUp,
    title: "Atração de Oportunidades",
    description: "Clientes vindo até você",
  },
  {
    icon: Users,
    title: "Networking Estratégico",
    description: "Conexões que geram negócios",
  },
  {
    icon: Zap,
    title: "Ação Imediata",
    description: "Saia aplicando no mesmo dia",
  },
]

export function ConteudoSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0a0a0f] py-32 px-6 md:py-44 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0d1117] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/[0.04] rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Header — split layout */}
        <div
          ref={titleRef}
          className={`mb-20 md:mb-28 flex flex-col gap-6 md:flex-row md:items-end md:justify-between scroll-fade-in ${titleVisible ? "visible" : ""}`}
        >
          <div>
            <p className="mb-8 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-cyan-400/60">
              Conteúdo
            </p>
            <h2 className="text-5xl font-black leading-[1.04] tracking-tight text-white md:text-6xl lg:text-7xl">
              O que você<br />vai aprender.
            </h2>
          </div>
          <p className="text-base text-white/35 leading-relaxed md:max-w-[200px] md:text-right md:pb-1 shrink-0">
            Direto ao ponto.<br />
            <span className="text-cyan-400/80">Sem enrolação.</span>
          </p>
        </div>

        {/* Feature grid — architectural, left-border treatment */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0 scroll-fade-in ${gridVisible ? "visible" : ""}`}
        >
          {contents.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group flex items-start gap-6 border-t border-white/[0.06] py-8 md:py-10"
              >
                <div className="shrink-0 mt-0.5 text-white/20 group-hover:text-cyan-400/70 transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-bold text-white/75 group-hover:text-white transition-colors duration-300 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
