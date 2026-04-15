"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Icons removed. The content is strong enough without decorative containers.
const contents = [
  {
    title: "Posicionamento Estratégico",
    description: "Defina seu território no mercado",
  },
  {
    title: "Percepção de Valor",
    description: "Como ser visto como autoridade",
  },
  {
    title: "Comunicação de Impacto",
    description: "Fale para quem precisa ouvir",
  },
  {
    title: "Atração de Oportunidades",
    description: "Clientes vindo até você",
  },
  {
    title: "Networking Estratégico",
    description: "Conexões que geram negócios",
  },
  {
    title: "Ação Imediata",
    description: "Saia aplicando no mesmo dia",
  },
]

export function ConteudoSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0a0a0f] py-28 md:py-40 overflow-hidden">
      {/* Section separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0d1117] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,71,0.05) 0%, rgba(0,150,200,0.04) 50%, transparent 70%)" }} />
      <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(99,102,241,0.04)" }} />
      {/* Bottom blend into autoridade */}
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />

      <div className="relative px-6 sm:px-8 lg:px-12 xl:px-20">

        {/* Header — split layout (kept, it works) */}
        <div
          ref={titleRef}
          className={`mb-16 md:mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between scroll-stagger ${titleVisible ? "visible" : ""}`}
        >
          <div className="scroll-item stagger-1">
            <h2 className="text-5xl font-black leading-[1.04] tracking-tight text-white md:text-6xl lg:text-7xl">
              O que você<br />vai aprender.
            </h2>
          </div>

          <p className="scroll-item stagger-2 text-base text-white/55 leading-relaxed md:max-w-[200px] md:text-right md:pb-1 shrink-0">
            Direto ao ponto.<br />
            <span style={{ color: "rgba(212,168,71,0.72)", fontWeight: 600 }}>Sem enrolação.</span>
          </p>
        </div>

        {/* Text-only grid — no icons, no icon boxes.
            Gold-tinted borders tie into the page's color system. */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-16 xl:gap-x-24 scroll-stagger ${gridVisible ? "visible" : ""}`}
        >
          {contents.map((item, index) => (
            <div
              key={index}
              className="scroll-item group flex flex-col gap-2 border-t py-8 md:py-9"
              style={{
                borderColor: "rgba(212,168,71,0.12)",
                transitionDelay: `${index * 70}ms`,
              }}
            >
              <span
                className="font-mono font-bold"
                style={{ fontSize: "0.58rem", letterSpacing: "0.18em", color: "rgba(212,168,71,0.45)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-300 tracking-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm text-white/52 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
          {/* Bottom border seals both columns */}
          <div className="border-t" style={{ borderColor: "rgba(212,168,71,0.12)" }} />
          <div className="border-t hidden md:block" style={{ borderColor: "rgba(212,168,71,0.12)" }} />
        </div>

      </div>
    </section>
  )
}
