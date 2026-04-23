"use client"

import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CtaFinalSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section
      data-section="cta-final"
      className="relative overflow-hidden py-28 md:py-52"
      style={{ background: "linear-gradient(180deg, #0d1117 0%, #070b14 100%)" }}
    >
      {/* Blend from faq */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0d1117] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />

      {/* Wide ambient — the full-section atmosphere */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 40% 50%, rgba(212,168,71,0.10) 0%, rgba(34,211,238,0.05) 55%, rgba(59,130,246,0.03) 80%, transparent 90%)" }}
      />
      {/* Focused gold spot — bleeds through the CTA area */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,71,0.09) 0%, transparent 65%)" }}
      />

      {/* ══ Full-bleed, left-anchored ══ */}
      <div
        ref={contentRef}
        className={`relative px-6 sm:px-8 lg:px-12 xl:px-20 scroll-stagger ${contentVisible ? "visible" : ""}`}
      >

        {/* Eyebrow pill — dot pulses on this section to signal urgency */}
        <div className="scroll-item stagger-1 from-left mb-10">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "5px 14px 5px 10px",
            border: "1px solid rgba(212,168,71,0.28)",
            borderRadius: "100px",
            background: "linear-gradient(135deg, rgba(212,168,71,0.08) 0%, transparent 100%)",
          }}>
            <div style={{
              width: 5, height: 5, borderRadius: "50%",
              background: "#D4A847",
              boxShadow: "0 0 6px rgba(212,168,71,0.70)",
              flexShrink: 0,
              animation: "glow-pulse 2.2s ease-in-out infinite",
            }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(212,168,71,0.85)" }}>
              Última Chance
            </span>
          </div>
        </div>

        {/* Headline — the largest type on the page */}
        <h2
          className="scroll-item stagger-2 font-black leading-[0.92] tracking-[-0.04em] text-white mb-16 md:mb-20"
          style={{ fontSize: "clamp(3.5rem, 12vw, 10.5rem)" }}
        >
          A decisão<br />é simples.
        </h2>

        {/* Two paths — radical opacity contrast.
            The wrong path almost disappears. The right path is the only real option. */}
        <div className="scroll-item stagger-3 mb-16 md:mb-24 space-y-3 max-w-4xl">
          <p
            className="italic font-medium tracking-tight"
            style={{ fontSize: "clamp(1.15rem, 3vw, 2.2rem)", color: "rgba(255,255,255,0.18)" }}
          >
            Continuar esperando ser descoberto.
          </p>
          <p
            className="font-bold tracking-tight"
            style={{ fontSize: "clamp(1.15rem, 3vw, 2.2rem)", color: "rgba(255,255,255,0.92)" }}
          >
            Ou construir sua{" "}
            <span
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

        {/* Decision threshold — gold thread separates intent from action */}
        <div className="scroll-item stagger-4 mb-10">
          <div style={{ width: "56px", height: "1px", background: "linear-gradient(to right, rgba(212,168,71,0.55), transparent)" }} />
        </div>

        {/* CTA block — the action zone */}
        <div className="scroll-item stagger-5">
          {/* Button with breathing glow halo */}
          <div className="relative inline-block">
            {/* Breathing halo — slow atmospheric pulse behind the button */}
            <div
              className="cta-breathe-halo absolute inset-0 rounded-[20px] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, rgba(212,168,71,0.22) 0%, transparent 70%)",
                margin: "-20px -24px",
                animation: "cta-breathe 3s ease-in-out infinite",
                willChange: "transform, opacity",
              }}
            />

            <a
              href="https://pay.kiwify.com.br/P5bPQp4"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden"
              style={{
                borderRadius: "14px",
                padding: "19px 48px",
                background: "linear-gradient(135deg, #7C5C00 0%, #B8860B 45%, #D4A847 100%)",
                boxShadow: "0 0 0 1px rgba(212,168,71,0.32), 0 2px 4px rgba(0,0,0,0.55), 0 10px 32px -4px rgba(180,130,10,0.50), inset 0 1px 0 rgba(255,255,255,0.20)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translateY(-2px)"
                el.style.boxShadow = "0 0 0 1px rgba(212,168,71,0.50), 0 2px 4px rgba(0,0,0,0.55), 0 20px 52px -4px rgba(200,150,20,0.65), inset 0 1px 0 rgba(255,255,255,0.24)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translateY(0)"
                el.style.boxShadow = "0 0 0 1px rgba(212,168,71,0.32), 0 2px 4px rgba(0,0,0,0.55), 0 10px 32px -4px rgba(180,130,10,0.50), inset 0 1px 0 rgba(255,255,255,0.20)"
              }}
            >
              <div
                className="-translate-x-full group-hover:translate-x-full absolute inset-0"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)", transition: "transform 0.5s ease" }}
              />
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#1A1000", position: "relative", letterSpacing: "-0.01em" }}>
                Quero transformar minha imagem
              </span>
              <ArrowRight
                size={17}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
                style={{ color: "rgba(26,16,0,0.70)", position: "relative" }}
              />
            </a>
          </div>

          <p className="mt-7 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            Vagas limitadas. Primeiro lote pelo menor valor disponível.
          </p>
        </div>

        {/* Trust indicators */}
        <div
          className="scroll-item stagger-6 mt-10 flex flex-wrap items-center gap-5"
          style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, color: "rgba(255,255,255,0.28)" }}
        >
          <span>Pagamento seguro</span>
          <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.10)" }} />
          <span>Suporte dedicado</span>
        </div>

      </div>
    </section>
  )
}
