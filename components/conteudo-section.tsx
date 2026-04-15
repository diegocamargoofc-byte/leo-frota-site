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
    <section className="relative bg-[#0a0a0f] py-24 px-6 md:py-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        <div ref={titleRef} className={`scroll-fade-in ${titleVisible ? "visible" : ""}`}>
          <h2 className="mb-4 text-center text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            O que você vai aprender
          </h2>
          <p className="mb-16 text-center text-lg text-white/50">
            Conteúdo direto ao ponto. <span className="text-cyan-400">Sem enrolação.</span>
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 scroll-fade-in ${gridVisible ? "visible" : ""}`}
        >
          {contents.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-transparent hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 transition-all duration-300 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-cyan-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 group-hover:text-white/70 transition-colors">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
