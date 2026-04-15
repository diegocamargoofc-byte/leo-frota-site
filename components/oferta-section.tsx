"use client"

import { ArrowRight, AlertTriangle, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function OfertaSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section
      data-section="oferta"
      className="relative py-32 px-6 md:py-44 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #12101f 0%, #0a0a10 50%, #08080c 100%)" }}
    >
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#12101f] to-transparent pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[160px]"
        style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, rgba(99,102,241,0.04) 50%, transparent 70%)" }}
      />

      <div
        ref={contentRef}
        className={`relative mx-auto max-w-xl scroll-fade-in ${contentVisible ? "visible" : ""}`}
      >
        <p className="mb-8 text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-amber-400/60">
          Oferta
        </p>

        {/* Urgency pill */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.07] px-5 py-2.5 text-sm font-semibold text-red-400/80">
            <AlertTriangle className="h-3.5 w-3.5" />
            Vagas limitadas — 1º Lote
          </div>
        </div>

        {/* Premium card */}
        <div
          className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.07]"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.055) 0%, rgba(99,102,241,0.035) 60%, rgba(255,255,255,0.015) 100%)",
          }}
        >
          {/* Top highlight line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <div className="p-10 md:p-16">

            {/* Lot + original price */}
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/25 border border-white/10 rounded-full px-3 py-1">
                1º Lote
              </span>
              <span className="text-sm text-white/25 line-through">R$317</span>
            </div>

            {/* Price — massive */}
            <div className="mb-3 flex items-start gap-1 leading-none">
              <span className="mt-5 text-2xl font-black text-white/30">R$</span>
              <span className="text-[7rem] font-black leading-[0.9] tracking-[-0.04em] text-white md:text-[9rem]">
                197
              </span>
            </div>
            <p className="mb-12 text-base text-cyan-400/75">
              ou <span className="font-semibold text-cyan-300">12× de R$20,37</span>
            </p>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="w-full h-16 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] text-base font-bold text-white shadow-[0_0_50px_rgba(34,211,238,0.2)] hover:shadow-[0_0_70px_rgba(34,211,238,0.4)] animate-[gradient-shift_3s_ease_infinite] hover:scale-[1.01] transition-transform duration-300"
            >
              <a
                href="https://pay.kiwify.com.br/P5bPQp4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                Quero garantir minha vaga
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>

            {/* Social proof */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/25">
              <Users className="h-3.5 w-3.5" />
              <span>+500 profissionais já transformaram sua imagem</span>
            </div>

          </div>

          {/* Footer stripe */}
          <div className="border-t border-white/[0.05] px-10 py-5 md:px-16 flex items-center justify-center gap-2 text-sm text-white/20">
            <Shield className="h-3.5 w-3.5" />
            <span>Pagamento 100% seguro</span>
          </div>
        </div>

      </div>
    </section>
  )
}
