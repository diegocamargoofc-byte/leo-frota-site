"use client"

import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function OfertaSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section
      data-section="oferta"
      className="relative py-28 px-6 md:py-44 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #12101f 0%, #0a0a10 50%, #08080c 100%)" }}
    >
      {/* Section separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-52 bg-gradient-to-b from-[#12101f] to-transparent pointer-events-none" />
      {/* Primary gold ambient — the conversion section deserves the richest lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,71,0.13) 0%, rgba(99,102,241,0.06) 55%, transparent 75%)" }}
      />
      {/* Secondary ambient — fills the upper half with warm depth */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,71,0.06) 0%, transparent 65%)" }}
      />

      <div
        ref={contentRef}
        className={`relative mx-auto max-w-xl scroll-stagger ${contentVisible ? "visible" : ""}`}
      >
        {/* Gold pill eyebrow — replaces amber text */}
        <div className="scroll-item stagger-1 from-left mb-8 flex justify-center">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "5px 14px 5px 10px",
            border: "1px solid rgba(212,168,71,0.22)",
            borderRadius: "100px",
            background: "linear-gradient(135deg, rgba(212,168,71,0.06) 0%, transparent 100%)",
          }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D4A847", boxShadow: "0 0 6px rgba(212,168,71,0.60)", flexShrink: 0 }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(212,168,71,0.78)" }}>
              Oferta
            </span>
          </div>
        </div>

        {/* Scarcity signal — gold pill with pulsing dot.
            Replaces the AlertTriangle red pill (Hotmart/Kiwify template pattern). */}
        <div className="scroll-item stagger-2 mb-10 flex justify-center">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "7px 16px 7px 12px",
            border: "1px solid rgba(212,168,71,0.22)",
            borderRadius: "100px",
            background: "linear-gradient(135deg, rgba(212,168,71,0.07) 0%, transparent 100%)",
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#D4A847",
              boxShadow: "0 0 6px rgba(212,168,71,0.70)",
              flexShrink: 0,
              animation: "glow-pulse 2.5s ease-in-out infinite",
            }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(212,168,71,0.80)" }}>
              Vagas limitadas — 1º Lote
            </span>
          </div>
        </div>

        {/* Premium card */}
        <div
          className="scroll-item stagger-3 scale-in relative overflow-hidden rounded-[2.5rem]"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(212,168,71,0.03) 40%, rgba(20,30,60,0.06) 100%)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: [
              "0 0 0 1px rgba(212,168,71,0.06)",
              "0 4px 8px rgba(0,0,0,0.80)",
              "0 16px 40px rgba(0,0,0,0.55)",
              "0 40px 80px rgba(0,0,0,0.35)",
              "inset 0 1px 0 rgba(212,168,71,0.08)",
            ].join(", "),
          }}
        >
          {/* Top highlight — gold-tinted */}
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(212,168,71,0.30), rgba(255,255,255,0.15), rgba(212,168,71,0.20), transparent)" }} />

          <div className="p-10 md:p-16">

            {/* Lot badge — no strikethrough price.
                Premium brands don't signal value through discounts. */}
            <div className="mb-8">
              <span style={{
                fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
                color: "rgba(212,168,71,0.70)",
                border: "1px solid rgba(212,168,71,0.22)", borderRadius: "100px",
                padding: "4px 12px",
              }}>
                1º Lote
              </span>
            </div>

            {/* Price — large, confident, standing alone */}
            <div className="mb-3 flex items-start gap-1 leading-none">
              <span className="mt-5 text-2xl font-black text-white/45">R$</span>
              <span className="font-black leading-[0.9] tracking-[-0.04em] text-white" style={{ fontSize: "clamp(6rem, 18vw, 9rem)" }}>
                197
              </span>
            </div>
            <p className="mb-12 text-base text-white/50">
              ou <span className="font-semibold text-white/70">12× de R$20,37</span>
            </p>

            {/* CTA — gold gradient, matches hero.
                Replaces from-cyan-500 via-blue-500 to-cyan-500. */}
            <a
              href="https://pay.kiwify.com.br/P5bPQp4"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full inline-flex items-center justify-center gap-3 overflow-hidden"
              style={{
                borderRadius: "16px",
                height: "64px",
                background: "linear-gradient(135deg, #7C5C00 0%, #B8860B 45%, #D4A847 100%)",
                boxShadow: "0 0 0 1px rgba(212,168,71,0.28), 0 2px 4px rgba(0,0,0,0.50), 0 8px 28px -4px rgba(180,130,10,0.45), inset 0 1px 0 rgba(255,255,255,0.18)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translateY(-2px)"
                el.style.boxShadow = "0 0 0 1px rgba(212,168,71,0.45), 0 2px 4px rgba(0,0,0,0.50), 0 16px 48px -4px rgba(200,150,20,0.60), inset 0 1px 0 rgba(255,255,255,0.22)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translateY(0)"
                el.style.boxShadow = "0 0 0 1px rgba(212,168,71,0.22), 0 2px 4px rgba(0,0,0,0.50), 0 8px 24px -4px rgba(160,110,0,0.35), inset 0 1px 0 rgba(255,255,255,0.14)"
              }}
            >
              <div
                className="-translate-x-full group-hover:translate-x-full absolute inset-0"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.13), transparent)", transition: "transform 0.5s ease" }}
              />
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1000", position: "relative" }}>
                Quero garantir minha vaga
              </span>
              <ArrowRight size={18} style={{ color: "rgba(26,16,0,0.70)", position: "relative" }} />
            </a>

            {/* Social proof — icon removed */}
            <p className="mt-5 text-center text-sm text-white/42">
              +500 profissionais já transformaram a própria imagem
            </p>

            {/* Minimal trust line — replaces the generic Shield footer stripe */}
            <p className="mt-3 text-center text-xs text-white/28 tracking-wide">
              Pagamento seguro · Garantia de 7 dias
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}
