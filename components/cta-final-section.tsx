"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CtaFinalSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section data-section="cta-final" className="relative overflow-hidden py-32 px-6 md:py-44" style={{
      background: "linear-gradient(180deg, #0d1117 0%, #0a0f1e 100%)"
    }}>
      {/* Blend from faq */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0d1117] to-transparent pointer-events-none" />

      {/* Large ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[180px]"
        style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)" }}
      />

      <div
        ref={contentRef}
        className={`relative mx-auto max-w-4xl text-center scroll-scale-in ${contentVisible ? "visible" : ""}`}
      >
        <p className="mb-10 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-cyan-400/60">
          Última Chance
        </p>

        {/* Main headline — big and editorial */}
        <h2 className="mb-6 text-5xl font-black leading-[1.04] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
          A decisão<br />é simples.
        </h2>

        {/* Two paths — typographic contrast */}
        <div className="mx-auto mb-16 max-w-2xl space-y-3">
          <p className="text-xl text-white/30 md:text-2xl lg:text-3xl tracking-tight">
            Continuar esperando ser descoberto.
          </p>
          <p className="text-xl font-bold text-white md:text-2xl lg:text-3xl tracking-tight">
            Ou construir sua{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #67e8f9 0%, #38bdf8 50%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              autoridade hoje.
            </span>
          </p>
        </div>

        {/* CTA */}
        <Button
          asChild
          size="lg"
          className="h-16 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] px-12 text-base font-bold text-white shadow-[0_0_60px_rgba(34,211,238,0.3)] hover:shadow-[0_0_90px_rgba(34,211,238,0.5)] animate-[gradient-shift_3s_ease_infinite] hover:scale-[1.02] transition-transform duration-300"
        >
          <a href="https://pay.kiwify.com.br/P5bPQp4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
            Quero transformar minha imagem
            <ArrowRight className="h-5 w-5" />
          </a>
        </Button>

        <p className="mt-8 text-sm text-white/25">
          Vagas limitadas. Primeiro lote com o menor valor.
        </p>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-white/20 text-xs font-medium uppercase tracking-widest">
          <span>Pagamento seguro</span>
          <span className="hidden md:block text-white/10">—</span>
          <span>Garantia de reembolso</span>
          <span className="hidden md:block text-white/10">—</span>
          <span>Suporte dedicado</span>
        </div>
      </div>
    </section>
  )
}
