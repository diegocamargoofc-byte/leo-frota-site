"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CtaFinalSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section data-section="cta-final" className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#0a1628] py-28 px-6 md:py-36">
      {/* Dramatic background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div
        ref={contentRef}
        className={`relative mx-auto max-w-3xl text-center scroll-scale-in ${contentVisible ? "visible" : ""}`}
      >
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
          A decisão é simples:
        </h2>

        <p className="mb-4 text-xl text-white/50 md:text-2xl">
          Continuar esperando ser descoberto
        </p>

        <p className="mb-14 text-xl font-semibold text-white md:text-2xl lg:text-3xl">
          ou começar a{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              construir sua autoridade hoje.
            </span>
            <span className="absolute -inset-2 bg-cyan-400/20 blur-xl rounded-lg" />
          </span>
        </p>

        <Button
          asChild
          size="lg"
          className="btn-premium h-16 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] px-12 text-lg font-bold text-white shadow-[0_0_50px_rgba(34,211,238,0.4)] hover:shadow-[0_0_80px_rgba(34,211,238,0.6)]"
        >
          <a href="https://pay.kiwify.com.br/P5bPQp4" target="_blank" rel="noopener noreferrer">
            Quero transformar minha imagem
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>

        <p className="mt-8 text-sm text-white/40">
          Vagas limitadas. Primeiro lote com o menor valor.
        </p>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/30 text-sm">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Garantia de reembolso</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Suporte dedicado</span>
          </div>
        </div>
      </div>
    </section>
  )
}
