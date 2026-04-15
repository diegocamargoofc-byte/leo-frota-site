"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "Preciso ter experiência prévia com marketing?",
    answer:
      "Não. O evento foi desenhado para profissionais que querem construir autoridade de forma autêntica, sem depender de técnicas complexas de marketing digital.",
  },
  {
    question: "O evento é presencial ou online?",
    answer:
      "O evento é 100% presencial. Acreditamos que a transformação real acontece quando você está presente, focado e conectado com outros profissionais que compartilham os mesmos objetivos.",
  },
  {
    question: "E se eu não puder comparecer?",
    answer:
      "Caso tenha algum imprevisto, entre em contato conosco até 7 dias antes do evento para solicitar reembolso integral ou transferência para a próxima edição.",
  },
]

export function FaqSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0d1117] py-28 md:py-40 overflow-hidden">
      {/* Section separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-56 bg-gradient-to-b from-[#08080c] to-transparent pointer-events-none" />
      {/* Primary ambient — present enough to give the section atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(0,150,200,0.08)" }} />
      {/* Warm gold secondary — bottom-right adds depth, bridges toward CtaFinal */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,71,0.06) 0%, transparent 65%)" }} />

      {/* ══ Asymmetric 2-col split — breaks the max-w-3xl centered pattern ══ */}
      <div className="relative px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 xl:gap-24 lg:items-start">

          {/* Left — headline block, sticky on desktop */}
          <div
            ref={titleRef}
            className={`lg:sticky lg:top-24 scroll-stagger ${titleVisible ? "visible" : ""}`}
          >
            {/* Gold pill */}
            <div className="scroll-item stagger-1 from-left mb-8">
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "5px 14px 5px 10px",
                border: "1px solid rgba(212,168,71,0.22)",
                borderRadius: "100px",
                background: "linear-gradient(135deg, rgba(212,168,71,0.06) 0%, transparent 100%)",
              }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D4A847", boxShadow: "0 0 6px rgba(212,168,71,0.60)", flexShrink: 0 }} />
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(212,168,71,0.78)" }}>
                  Dúvidas
                </span>
              </div>
            </div>

            <h2 className="scroll-item stagger-2 text-4xl font-black leading-[1.02] tracking-tight text-white md:text-5xl lg:text-6xl">
              Perguntas<br />Frequentes
            </h2>
          </div>

          {/* Right — accordion */}
          <div
            ref={accordionRef}
            className={`mt-12 lg:mt-0 scroll-stagger ${accordionVisible ? "visible" : ""}`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="scroll-item group rounded-2xl border border-white/[0.10] bg-white/[0.03] backdrop-blur-sm px-6 transition-all duration-300 data-[state=open]:border-amber-500/28 data-[state=open]:bg-amber-500/[0.04] hover:border-white/[0.20] hover:bg-white/[0.05]"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)", transitionDelay: `${index * 70}ms` }}
                >
                  <AccordionTrigger className="py-6 text-left text-lg font-semibold text-white/88 hover:no-underline hover:text-white group-data-[state=open]:text-white transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-white/68 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  )
}
