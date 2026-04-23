"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react"
import { HeroShapesBackground } from "@/components/ui/shape-landing-hero"

const EASE = "cubic-bezier(0.16,1,0.3,1)"
const BG   = "#03070f"

// Image natural size: 408 × 612 px  →  aspect ratio 2:3
// Card never exceeds 400px wide → no upscaling, always sharp
const CARD_MAX_W = 400

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  const fade = (d: number, dur = 650): React.CSSProperties =>
    !mounted ? { opacity: 0 } : { animation: `hero-enter-soft ${dur}ms ${EASE} ${d}ms both` }

  const headlineUp = (d: number, dur = 720): React.CSSProperties =>
    !mounted
      ? { opacity: 0 }
      : { animation: `headline-fade-up ${dur}ms cubic-bezier(0.22,1,0.36,1) ${d}ms both` }

  const cardEntrance: React.CSSProperties = !mounted
    ? { opacity: 0 }
    : { animation: `hero-enter-card 900ms ${EASE} 80ms both` }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100svh",
        background: BG,
        display: "grid",
        gridTemplateRows: "44px 1fr auto",
      }}
    >

      {/* ── Shape background — floating pill shapes, z-0 ── */}
      <HeroShapesBackground />

      {/* ── Atmospheric background layers ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Right bloom — aligns with the card column, significantly stronger */}
        <div style={{
          position: "absolute", top: "-5%", right: "-10%",
          width: "62%", height: "90%",
          background: "radial-gradient(ellipse at 62% 28%, rgba(0,65,155,0.26) 0%, rgba(0,40,110,0.12) 40%, transparent 68%)",
          filter: "blur(48px)",
        }} />
        {/* Secondary focal spot — tighter, centered on card position */}
        <div style={{
          position: "absolute", top: "10%", right: "0%",
          width: "42%", height: "70%",
          background: "radial-gradient(ellipse at 70% 38%, rgba(0,80,180,0.18) 0%, rgba(0,50,130,0.08) 45%, transparent 72%)",
          filter: "blur(36px)",
        }} />
        {/* Left counter-light — text side, subtle warmth */}
        <div style={{
          position: "absolute", top: "15%", left: "-12%",
          width: "48%", height: "65%",
          background: "radial-gradient(ellipse at 28% 42%, rgba(0,30,80,0.10) 0%, transparent 68%)",
          filter: "blur(60px)",
        }} />
        {/* Gold bloom — premium warmth behind text column, breaks cold monochrome */}
        <div style={{
          position: "absolute", bottom: "8%", left: "-5%",
          width: "44%", height: "52%",
          background: "radial-gradient(ellipse at 25% 75%, rgba(180,130,20,0.09) 0%, rgba(140,100,10,0.04) 45%, transparent 70%)",
          filter: "blur(52px)",
        }} />
        {/* Bottom grounding shadow */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
          background: "linear-gradient(to top, rgba(1,3,8,0.5) 0%, transparent 100%)",
        }} />
        {/* Vignette layer 1 — broad edge darkening */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 78% 75% at 50% 42%, transparent 30%, rgba(0,0,0,0.52) 100%)",
        }} />
        {/* Vignette layer 2 — corner punch, seals the 4 edges */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 25%, rgba(0,0,0,0.28) 100%)",
        }} />
        {/* Fine grain — tactile texture, very subtle */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
          opacity: 0.028, mixBlendMode: "overlay",
        }} />
      </div>

      {/* ══════════════════════════════════════════
          ROW 1 — MASTHEAD
      ══════════════════════════════════════════ */}
      <div
        className="relative z-20 flex items-center justify-between border-b px-6 sm:px-8 lg:px-12 xl:px-16"
        style={{ borderColor: "rgba(255,255,255,0.05)", ...fade(0, 500) }}
      >
        <div className="flex items-center gap-2.5">
          <div className="h-[5px] w-[5px] rounded-full" style={{
            background: "#D4A847",
            boxShadow: "0 0 6px rgba(212,168,71,0.7)",
          }} />
          <span style={{
            fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.24em",
            textTransform: "uppercase", color: "rgba(212,168,71,0.65)",
          }}>
            Imersão Exclusiva
          </span>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3"
          style={{ fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.30)" }}
        >
          <span>14 Mai 2026</span>
          <span style={{ color: "rgba(255,255,255,0.12)" }}>·</span>
          <span>SEST SENAT</span>
          <span style={{ color: "rgba(255,255,255,0.12)" }}>·</span>
          <span>18h – 22h</span>
        </div>

        <span style={{
          fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.28)",
        }}>
          Mai 2026
        </span>
      </div>


      {/* ══════════════════════════════════════════
          ROW 2 — MAIN CONTENT
          Mobile  → 1 coluna: card em cima, texto embaixo
          Desktop → 2 colunas: [texto 1fr] [card 400px]
          Grid garante largura explícita para cada coluna —
          sem risco de texto comprimido ou card ocupando tudo.
      ══════════════════════════════════════════ */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_380px] lg:items-center px-6 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-0 gap-8 lg:gap-8 xl:gap-10 max-w-[1100px] xl:max-w-[1200px] mx-auto w-full">

        {/* ── TEXT COLUMN ─────────────────────────── */}
        <div className="relative z-20 order-2 lg:order-1 flex flex-col justify-center lg:py-14">

          {/* Eyebrow — gold credential pill */}
          <div className="mb-7 md:mb-9" style={fade(60)}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "5px 14px 5px 10px",
              border: "1px solid rgba(212,168,71,0.25)",
              borderRadius: "100px",
              background: "linear-gradient(135deg, rgba(212,168,71,0.07) 0%, transparent 100%)",
              backdropFilter: "blur(4px)",
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#D4A847",
                boxShadow: "0 0 8px rgba(212,168,71,0.65)",
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "rgba(212,168,71,0.82)",
              }}>
                Leonardo Frota
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="mb-5">
            {/* Setup line */}
            <p style={{
              fontSize: "clamp(0.95rem, 2.2vw, 1.2rem)",
              fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.44)", marginBottom: "6px",
              ...headlineUp(80, 600),
            }}>
              Sua imagem pode estar
            </p>

            <h1 style={{ margin: 0 }}>
              {/* Line 1 */}
              <span className="block text-white" style={{
                fontSize: "clamp(3.2rem, 8.5vw, 7.4rem)",
                fontWeight: 900, lineHeight: 0.94, letterSpacing: "-0.04em",
                ...headlineUp(180),
              }}>
                afastando
              </span>

              {/* Line 2 — gradient + continuous shift */}
              <span className="block" style={{
                fontSize: "clamp(4rem, 10.5vw, 9rem)",
                fontWeight: 900, lineHeight: 0.91, letterSpacing: "-0.05em",
                backgroundImage: "linear-gradient(110deg, #fff 0%, #c8eeff 28%, #4dc8ff 58%, #fff 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                ...headlineUp(290, 800),
                ...(mounted && {
                  animation: `headline-fade-up 800ms cubic-bezier(0.22,1,0.36,1) 290ms both, gradient-shift 5s ease 1200ms infinite`,
                }),
              }}>
                clientes
              </span>
            </h1>

            {/* Qualifier */}
            <p style={{
              fontSize: "clamp(0.85rem, 1.8vw, 0.975rem)",
              fontWeight: 400, lineHeight: 1.5, letterSpacing: "-0.005em",
              color: "rgba(255,255,255,0.36)", marginTop: "10px",
              ...headlineUp(430, 600),
            }}>
              — mesmo você sendo bom no que faz.
            </p>
          </div>

          {/* Editorial dual-tone separator */}
          <div className="mb-7 flex items-center gap-1.5" style={fade(700)}>
            <div style={{ height: "1px", width: "20px", background: "linear-gradient(to right, rgba(212,168,71,0.55), rgba(212,168,71,0.15))" }} />
            <div style={{ height: "1px", width: "14px", background: "linear-gradient(to right, rgba(0,191,255,0.22), transparent)" }} />
          </div>

          <p className="mb-8 max-w-sm" style={{
            fontSize: "clamp(0.875rem, 1.5vw, 0.95rem)", lineHeight: 1.85,
            color: "rgba(255,255,255,0.52)",
            ...fade(780),
          }}>
            Em{" "}
            <strong style={{ color: "rgba(255,255,255,0.72)", fontWeight: 600 }}>4 horas</strong>
            , você aprende a se posicionar como{" "}
            <strong style={{ color: "rgba(90,210,255,0.78)", fontWeight: 600 }}>autoridade</strong>{" "}
            e atrair oportunidades de alto valor — todos os dias.
          </p>

          {/* CTA */}
          <div style={fade(880, 680)}>
            {/* Button wrapper — carries the pulsing ring */}
            <div className="relative inline-flex w-full sm:w-auto">
              {/* Pulsing urgency ring */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute", inset: "-5px",
                  borderRadius: "17px",
                  border: "1px solid rgba(212,168,71,0.35)",
                  animation: "cta-ping-ring 2.6s ease-out infinite",
                  pointerEvents: "none",
                }}
              />
              <a
                href="https://pay.kiwify.com.br/P5bPQp4"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden sm:w-auto sm:justify-start"
                style={{
                  borderRadius: "12px",
                  padding: "16px 32px",
                  background: "linear-gradient(135deg, #7C5C00 0%, #B8860B 45%, #D4A847 100%)",
                  boxShadow: "0 0 0 1px rgba(212,168,71,0.28), 0 2px 4px rgba(0,0,0,0.50), 0 8px 28px -4px rgba(180,130,10,0.45), 0 20px 52px -8px rgba(140,100,0,0.25), inset 0 1px 0 rgba(255,255,255,0.18)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translateY(-2px)"
                  el.style.boxShadow = "0 0 0 1px rgba(212,168,71,0.45), 0 2px 4px rgba(0,0,0,0.50), 0 16px 48px -4px rgba(200,150,20,0.60), 0 28px 64px -8px rgba(160,110,0,0.30), inset 0 1px 0 rgba(255,255,255,0.22)"
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
                <span style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.01em", color: "#1A1000", position: "relative" }}>
                  Garantir minha vaga agora
                </span>
                <ArrowRight
                  className="relative shrink-0 group-hover:translate-x-1"
                  size={16}
                  style={{ color: "rgba(26,16,0,0.70)", transition: "transform 0.2s ease" }}
                />
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{
                  background: "#FF5757",
                  boxShadow: "0 0 5px rgba(255,80,80,0.6)",
                  animation: "glow-pulse 2.5s ease-in-out infinite",
                }} />
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.40)", letterSpacing: "0.04em" }}>
                  Vagas limitadas
                </span>
              </div>
              <div className="h-2.5 w-px shrink-0" style={{ background: "rgba(255,255,255,0.10)" }} />
              {/* Confident price — no discount framing */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.65)", letterSpacing: "-0.02em" }}>
                  R$197
                </span>
                <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.26)", letterSpacing: "0.03em" }}>
                  ou 12× de R$18,78
                </span>
              </div>
            </div>
          </div>

        </div>


        {/* ── IMAGE COLUMN ── */}
        <div
          className="order-1 lg:order-2 relative flex flex-col justify-end lg:justify-end items-center lg:items-end"
          style={cardEntrance}
        >
          {/* Wrapper externo — limita largura e faz float */}
          <div
            className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-full mx-auto lg:mx-0"
            style={{
              animation: mounted ? "hero-card-float 6s ease-in-out infinite" : undefined,
              willChange: "transform",
            }}
          >
            {/* Glow de silhueta — mais intenso para destacar o corpo */}
            <div
              aria-hidden="true"
              className="absolute pointer-events-none"
              style={{
                top: "6%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "85%",
                height: "82%",
                background: "radial-gradient(ellipse 65% 70% at 50% 40%, rgba(0,110,240,0.30) 0%, rgba(0,70,180,0.14) 48%, transparent 76%)",
                filter: "blur(38px)",
                zIndex: 0,
              }}
            />

            {/* Authority badge — topo direito, fora do container de corte */}
            <div
              style={{
                position: "absolute", top: "4%", right: "2%", zIndex: 10,
                display: "inline-flex", alignItems: "center", gap: "5px",
                padding: "4px 10px",
                background: "linear-gradient(135deg, rgba(212,168,71,0.16) 0%, rgba(180,130,10,0.07) 100%)",
                border: "1px solid rgba(212,168,71,0.32)",
                borderRadius: "100px",
                backdropFilter: "blur(8px)",
              }}
            >
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#D4A847", boxShadow: "0 0 5px rgba(212,168,71,0.8)", flexShrink: 0 }} />
              <span style={{
                fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.20em",
                textTransform: "uppercase", color: "rgba(212,168,71,0.88)",
              }}>
                Edição 2026
              </span>
            </div>

            {/* Container de enquadramento — corte intencional */}
            {/* Mobile: aspect mais alto → mais corpo visível */}
            {/* Desktop: aspect 3/3.8 → cabeça até meio da coxa */}
            <div
              className="relative overflow-hidden w-full aspect-[3/3.6] sm:aspect-[3/3.6] lg:aspect-[3/3.8]"
              style={{ zIndex: 1 }}
            >
              <img
                src="/images/leonardo.svg"
                alt="Leonardo Frota"
                className="absolute inset-0 w-full h-full"
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                  /* Scale 1.12 → personagem maior, mais dominante */
                  transform: "scale(1.12) translateY(2%)",
                  transformOrigin: "top center",
                }}
              />

              {/* Fade na base — integra ao fundo, corte elegante sem linha seca */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 pointer-events-none"
                style={{
                  height: "38%",
                  background: `linear-gradient(to top, ${BG} 0%, ${BG}CC 18%, ${BG}88 35%, ${BG}44 52%, transparent 72%)`,
                  zIndex: 2,
                }}
              />
              {/* Vinheta lateral — escurece bordas para destacar silhueta */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 70% 85% at 50% 42%, transparent 52%, rgba(0,0,0,0.38) 100%)`,
                  zIndex: 3,
                }}
              />
            </div>

            {/* Event strip — separado do fade, fora do container de corte */}
            <div
              className="mt-3 flex items-center gap-3 flex-wrap justify-center lg:justify-start"
              style={{ zIndex: 3, position: "relative" }}
            >
              <div className="flex items-center gap-1.5">
                <MapPin size={9} style={{ color: "rgba(0,191,255,0.78)", flexShrink: 0 }} />
                <span style={{ fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.07em", color: "rgba(255,255,255,0.55)" }}>
                  SEST SENAT
                </span>
              </div>
              <div className="h-2 w-px shrink-0" style={{ background: "rgba(255,255,255,0.10)" }} />
              <div className="flex items-center gap-1.5">
                <Calendar size={9} style={{ color: "rgba(0,191,255,0.78)", flexShrink: 0 }} />
                <span style={{ fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.07em", color: "rgba(255,255,255,0.55)" }}>
                  14 Mai
                </span>
              </div>
              <div className="h-2 w-px shrink-0" style={{ background: "rgba(255,255,255,0.10)" }} />
              <div className="flex items-center gap-1.5">
                <Clock size={9} style={{ color: "rgba(0,191,255,0.78)", flexShrink: 0 }} />
                <span style={{ fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.07em", color: "rgba(255,255,255,0.55)" }}>
                  18h – 22h
                </span>
              </div>
            </div>
          </div>

        </div>{/* end image column */}

      </div>


      {/* ══════════════════════════════════════════
          ROW 3 — BOTTOM STRIP
      ══════════════════════════════════════════ */}
      <div
        className="relative z-20 border-t px-6 sm:px-8 lg:px-12 xl:px-16"
        style={{ borderColor: "rgba(255,255,255,0.05)", ...fade(1060, 600) }}
      >
        <div className="flex flex-wrap items-center justify-between gap-y-3 py-4">

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {/* Stars + rating */}
            <div className="flex items-center gap-1.5 shrink-0">
              <div style={{ display: "flex", gap: "1.5px" }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" aria-hidden="true">
                    <polygon
                      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                      fill="#D4A847"
                      opacity="0.82"
                    />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "rgba(212,168,71,0.70)", letterSpacing: "0.02em" }}>4.9</span>
            </div>
            <div className="hidden sm:block h-3 w-px shrink-0" style={{ background: "rgba(255,255,255,0.08)" }} />
            {/* Avatars + text */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="flex -space-x-2 shrink-0">
                {[1, 2, 3, 4].map(i => (
                  <img
                    key={i}
                    src={`/images/professionals/prof-${i}.jpg`}
                    alt={`Profissional ${i}`}
                    className="h-7 w-7 rounded-full object-cover"
                    style={{ border: `2px solid ${BG}` }}
                  />
                ))}
              </div>
              <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.36)", lineHeight: 1.4, whiteSpace: "nowrap" }}>
                +500 profissionais{" "}
                <span style={{ color: "rgba(255,255,255,0.58)", fontWeight: 500 }}>
                  transformaram sua imagem
                </span>
              </p>
            </div>
          </div>

          <div
            className="hidden sm:flex items-center gap-4"
            style={{
              fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.24)",
            }}
          >
            <span>Pagamento seguro</span>
            <div className="h-3 w-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            <span>Garantia de reembolso</span>
            <div className="h-3 w-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            <span>Suporte dedicado</span>
          </div>

        </div>
      </div>

      {/* Section blend */}
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none z-30"
        style={{ background: `linear-gradient(to top, ${BG} 0%, transparent 100%)` }}
      />

    </section>
  )
}
