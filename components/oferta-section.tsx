"use client"

import { Clock, ArrowRight, AlertTriangle, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function OfertaSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section data-section="oferta" className="relative bg-gradient-to-b from-[#08080c] via-[#0a0a10] to-[#08080c] py-20 px-6 md:py-28 overflow-hidden">
      {/* Background glows - subtle cyan and indigo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-indigo-500/5 rounded-full blur-[80px]" />

      <div 
        ref={contentRef}
        className={`relative mx-auto max-w-lg text-center scroll-fade-in ${contentVisible ? "visible" : ""}`}
      >
        {/* Urgency badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/30 px-5 py-2.5 text-sm font-medium text-red-400">
          <AlertTriangle className="h-4 w-4" />
          Vagas limitadas
        </div>

        {/* Main offer card */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-indigo-500/5 to-transparent p-8 md:p-12 shadow-[0_0_60px_rgba(99,102,241,0.08)]">
          {/* Price anchoring */}
          <p className="mb-2 text-lg text-white/50">
            <span className="line-through">De R$317</span>
            <span className="mx-2">por</span>
          </p>

          {/* Main price */}
          <div className="mb-1">
            <span className="text-6xl md:text-7xl font-bold text-white">R$197</span>
          </div>

          {/* Installment option */}
          <p className="mb-2 text-base md:text-lg text-cyan-400 font-medium">
            ou <span className="text-cyan-300">12x de R$20,37</span>
          </p>

          {/* Lot indicator */}
          <p className="mb-4 text-sm text-white/50">
            1º Lote • Preço promocional
          </p>

          {/* Urgency text */}
          <p className="mb-6 text-sm font-medium text-amber-400 flex items-center justify-center gap-2">
            <Clock className="h-4 w-4" />
            Últimas vagas desse lote
          </p>

          {/* CTA Button with breathing animation */}
          <Button
            asChild
            size="lg"
            className="btn-premium w-full min-h-14 md:min-h-16 h-auto rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] px-6 py-4 text-sm md:text-base font-bold text-white shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] animate-[gradient-shift_3s_ease_infinite] hover:scale-[1.02] transition-transform"
          >
            <a
              href="https://pay.kiwify.com.br/P5bPQp4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap items-center justify-center gap-2 text-center leading-snug"
            >
              <span>Quero garantir minha vaga por R$197</span>
              <ArrowRight className="h-5 w-5 shrink-0" />
            </a>
          </Button>

          {/* Social proof below button */}
          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-white/40">
            <Users className="h-4 w-4 text-white/50" />
            <span>+500 profissionais já transformaram sua imagem</span>
          </div>
        </div>

        {/* Trust badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/40">
          <Shield className="h-4 w-4" />
          <span>Pagamento 100% seguro</span>
        </div>
      </div>
    </section>
  )
}
