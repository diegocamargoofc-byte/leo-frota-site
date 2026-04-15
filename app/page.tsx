import { HeroSection } from "@/components/hero-section"
import { ProvaSection } from "@/components/prova-section"
import { DorSection } from "@/components/dor-section"
import { PromessaSection } from "@/components/promessa-section"
import { SobreSection } from "@/components/sobre-section"
import { ConteudoSection } from "@/components/conteudo-section"
import { AutoridadeSection } from "@/components/autoridade-section"
import { OfertaSection } from "@/components/oferta-section"
import { FaqSection } from "@/components/faq-section"
import { CtaFinalSection } from "@/components/cta-final-section"
import { FloatingCta } from "@/components/floating-cta"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProvaSection />
      <DorSection />
      <PromessaSection />
      <SobreSection />
      <ConteudoSection />
      <AutoridadeSection />
      <OfertaSection />
      <FaqSection />
      <CtaFinalSection />
      <FloatingCta />
    </main>
  )
}
