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
    <section className="relative bg-[#0d1117] py-32 px-6 md:py-44 overflow-hidden">
      {/* Blend from oferta section */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#08080c] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-3xl">
        <div ref={titleRef} className={`scroll-fade-in ${titleVisible ? "visible" : ""}`}>
          <p className="mb-8 text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-cyan-400/60">
            Dúvidas
          </p>
          <h2 className="mb-16 text-center text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Perguntas<br className="md:hidden" /> Frequentes
          </h2>
        </div>

        <div ref={accordionRef} className={`scroll-fade-in ${accordionVisible ? "visible" : ""}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 transition-all duration-300 data-[state=open]:border-cyan-500/30 data-[state=open]:bg-cyan-500/5 hover:border-white/20"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-medium text-white hover:no-underline group-data-[state=open]:text-cyan-100">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-white/60 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
