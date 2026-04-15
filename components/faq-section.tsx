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
    <section className="relative bg-[#0d1117] py-24 px-6 md:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative mx-auto max-w-3xl">
        <div ref={titleRef} className={`scroll-fade-in ${titleVisible ? "visible" : ""}`}>
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Perguntas Frequentes
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
