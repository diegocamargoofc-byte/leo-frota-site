"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react"

const EASE = "cubic-bezier(0.16,1,0.3,1)"
const BG   = "#03070f"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef    = useRef<HTMLDivElement>(null)   // parallax — scroll-driven translateY

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    let rafQueued = false

    const onScroll = () => {
      if (!sectionRef.current) return
      if (sectionRef.current.getBoundingClientRect().bottom < 0) return
      if (rafQueued) return
      rafQueued = true
      requestAnimationFrame(() => {
        rafQueued = false
        // Card drifts down slightly — very subtle, no rotation, no 3D
        if (cardRef.current) {
          cardRef.current.style.transform = `translateY(${window.scrollY * 0.028}px)`
        }
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll) }
  }, [])

  const fade = (d: number, dur = 650): React.CSSProperties =>
    !mounted ? { opacity: 0 } : { animation: `hero-enter-soft ${dur}ms ${EASE} ${d}ms both` }

  const wordIn = (d: number): React.CSSProperties =>
    !mounted ? { opacity: 0 } : { animation: `word-enter 660ms ${EASE} ${d}ms both` }

  const stamp = (d: number): React.CSSProperties =>
    !mounted ? { transform: "translateY(108%)" } : { animation: `line-reveal 760ms ${EASE} ${d}ms both` }

  // Card entrance is separate from the scroll transform — different elements to avoid conflict
  const cardEntrance: React.CSSProperties = !mounted
    ? { opacity: 0 }
    : { animation: `hero-enter-card 900ms ${EASE} 100ms both` }

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

      {/* ════════════════════════════════════════════════════
          ROW 1 — MASTHEAD
      ════════════════════════════════════════════════════ */}
      <div
        className="relative z-20 flex items-center justify-between border-b border-t px-6 sm:px-8 lg:px-12 xl:px-16"
        style={{ borderColor: "rgba(255,255,255,0.05)", ...fade(0, 500) }}
      >
        <div className="flex items-center gap-2.5">
          <div className="h-[5px] w-[5px] rounded-full" style={{ background: "rgba(0,191,255,0.5)" }} />
          <span style={{
            fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.24em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.28)",
          }}>
            Evento Presencial
          </span>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3"
          style={{ fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.15)" }}
        >
          <span>23 Abr 2025</span>
          <span style={{ color: "rgba(255,255,255,0.07)" }}>·</span>
          <span>SEST SENAT</span>
          <span style={{ color: "rgba(255,255,255,0.07)" }}>·</span>
          <span>18h – 22h</span>
        </div>

        <span style={{
          fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.15)",
        }}>
          Abr 2025
        </span>
      </div>


      {/* ════════════════════════════════════════════════════
          ROW 2 — MAIN CONTENT
          flex-col on mobile (card top, text below)
          flex-row on desktop (text left, card right)
      ════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:h-full px-6 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-0 gap-7 lg:gap-10 xl:gap-14">

          {/* ── TEXT COLUMN ── left on desktop, bottom on mobile */}
          <div className="flex-1 min-w-0 lg:order-first">

            {/* Eyebrow */}
            <div className="mb-8 md:mb-10 flex items-center gap-3" style={fade(60)}>
              <div className="h-px w-5 shrink-0" style={{
                background: "linear-gradient(to right, transparent, rgba(0,191,255,0.5))",
              }} />
              <span style={{
                fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.24em",
                textTransform: "uppercase", color: "rgba(0,191,255,0.58)",
              }}>
                Leonardo Frota
              </span>
            </div>

            {/* Headline */}
            <div className="mb-4">
              <p style={{
                fontSize: "clamp(0.95rem, 2.2vw, 1.2rem)",
                fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.01em",
                color: "rgba(255,255,255,0.26)", marginBottom: "6px",
              }}>
                {([
                  { w: "Sua",    d: 80  },
                  { w: "imagem", d: 130 },
                  { w: "pode",   d: 168 },
                  { w: "estar",  d: 198 },
                ] as const).map(({ w, d }, i, arr) => (
                  <span key={w} style={{
                    display: "inline-block",
                    marginRight: i < arr.length - 1 ? "0.3em" : 0,
                    ...wordIn(d),
                  }}>
                    {w}
                  </span>
                ))}
              </p>

              <h1 style={{ margin: 0 }}>
                <span style={{ display: "block", overflow: "hidden", lineHeight: 0.94 }}>
                  <span className="block text-white" style={{
                    fontSize: "clamp(3.2rem, 8.5vw, 7.4rem)",
                    fontWeight: 900, lineHeight: 0.94, letterSpacing: "-0.04em",
                    ...stamp(218),
                  }}>
                    afastando
                  </span>
                </span>

                <span className="block" style={{
                  fontSize: "clamp(4rem, 10.5vw, 9rem)",
                  fontWeight: 900, lineHeight: 0.91, letterSpacing: "-0.05em",
                  backgroundImage: "linear-gradient(110deg, #fff 0%, #c8eeff 28%, #4dc8ff 58%, #fff 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: mounted
                    ? `clientes-enter 1000ms ${EASE} 520ms both, gradient-shift 5s ease 1560ms infinite`
                    : "none",
                  opacity: mounted ? undefined : 0,
                }}>
                  clientes
                </span>
              </h1>

              <p style={{
                fontSize: "clamp(0.85rem, 1.8vw, 0.975rem)",
                fontWeight: 400, lineHeight: 1.5, letterSpacing: "-0.005em",
                color: "rgba(255,255,255,0.2)", marginTop: "10px",
                ...fade(600),
              }}>
                — mesmo você sendo bom no que faz.
              </p>
            </div>

            <div className="mb-7 h-px w-10" style={{ background: "rgba(0,191,255,0.18)", ...fade(700) }} />

            <p className="mb-8 max-w-sm" style={{
              fontSize: "clamp(0.875rem, 1.5vw, 0.95rem)", lineHeight: 1.85,
              color: "rgba(255,255,255,0.32)",
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
              <a
                href="https://pay.kiwify.com.br/P5bPQp4"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden sm:w-auto sm:justify-start"
                style={{
                  borderRadius: "12px",
                  padding: "16px 32px",
                  background: "linear-gradient(135deg, #005BBF 0%, #0085D4 45%, #00A4E4 100%)",
                  boxShadow: "0 0 0 1px rgba(0,164,228,0.22), 0 2px 4px rgba(0,0,0,0.35), 0 8px 24px -4px rgba(0,100,200,0.3), inset 0 1px 0 rgba(255,255,255,0.14)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translateY(-2px)"
                  el.style.boxShadow = "0 0 0 1px rgba(0,180,240,0.36), 0 2px 4px rgba(0,0,0,0.35), 0 16px 40px -4px rgba(0,130,220,0.45), inset 0 1px 0 rgba(255,255,255,0.18)"
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translateY(0)"
                  el.style.boxShadow = "0 0 0 1px rgba(0,164,228,0.22), 0 2px 4px rgba(0,0,0,0.35), 0 8px 24px -4px rgba(0,100,200,0.3), inset 0 1px 0 rgba(255,255,255,0.14)"
                }}
              >
                <div
                  className="-translate-x-full group-hover:translate-x-full absolute inset-0"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)", transition: "transform 0.5s ease" }}
                />
                <span style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.01em", color: "#fff", position: "relative" }}>
                  Garantir minha vaga agora
                </span>
                <ArrowRight
                  className="relative shrink-0 text-white/75 group-hover:translate-x-1"
                  size={16}
                  style={{ transition: "transform 0.2s ease" }}
                />
              </a>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{
                    background: "#FF5757",
                    boxShadow: "0 0 5px rgba(255,80,80,0.6)",
                    animation: "glow-pulse 2.5s ease-in-out infinite",
                  }} />
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.24)", letterSpacing: "0.04em" }}>
                    Vagas limitadas
                  </span>
                </div>
                <div className="h-2.5 w-px shrink-0" style={{ background: "rgba(255,255,255,0.08)" }} />
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.17)", letterSpacing: "0.03em" }}>
                  Apenas R$197 · Parcelado em 12x
                </span>
              </div>
            </div>

          </div>


          {/* ── CARD COLUMN ── right on desktop, top on mobile */}
          <div className="shrink-0 w-full lg:w-[360px] xl:w-[420px] lg:order-last">

            {/* Outer: entrance animation — isolated from the scroll transform below */}
            <div style={cardEntrance}>

              {/* Inner: scroll-driven translateY — no rotation, no perspective */}
              <div ref={cardRef} style={{ willChange: "transform" }}>

                {/* ─── THE CARD ─── */}
                <div
                  className="relative overflow-hidden h-[260px] lg:h-auto lg:aspect-[3/4]"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.07)",
                    // Multi-layer shadow: close contact → mid-range → ambient
                    // No color glow — pure neutral depth
                    boxShadow: [
                      "0 1px 2px rgba(0,0,0,0.35)",
                      "0 4px 8px rgba(0,0,0,0.28)",
                      "0 12px 28px rgba(0,0,0,0.22)",
                      "0 32px 56px rgba(0,0,0,0.18)",
                    ].join(", "),
                    background: "linear-gradient(175deg, #06101e 0%, #040b18 50%, #030810 100%)",
                  }}
                >

                  {/* Subject photo — top-aligned, centered, never crops the head */}
                  <img
                    src="/images/leonardo.png"
                    alt="Leonardo Frota"
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none"
                    style={{ filter: "brightness(0.95) contrast(1.02)" }}
                  />

                  {/* Subtle top vignette */}
                  <div className="absolute inset-x-0 top-0 pointer-events-none" style={{
                    height: "12%",
                    background: "linear-gradient(to bottom, rgba(6,16,30,0.6) 0%, transparent 100%)",
                  }} />

                  {/* Bottom fade — blends subject into card floor */}
                  <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{
                    height: "38%",
                    background: "linear-gradient(to top, rgba(3,8,16,1) 0%, rgba(3,8,16,0.82) 30%, rgba(3,8,16,0.45) 60%, transparent 100%)",
                  }} />

                  {/* Event info strip */}
                  <div
                    className="absolute bottom-0 inset-x-0 px-5 py-4 pointer-events-none"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={10} style={{ color: "rgba(0,191,255,0.38)" }} />
                        <span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.06em", color: "rgba(255,255,255,0.3)" }}>
                          SEST SENAT
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={10} style={{ color: "rgba(0,191,255,0.38)" }} />
                        <span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.06em", color: "rgba(255,255,255,0.3)" }}>
                          23 Abr
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={10} style={{ color: "rgba(0,191,255,0.38)" }} />
                        <span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.06em", color: "rgba(255,255,255,0.3)" }}>
                          18h – 22h
                        </span>
                      </div>
                    </div>
                  </div>

                </div>{/* end card */}

              </div>{/* end cardRef */}
            </div>{/* end cardEntrance */}

          </div>{/* end card column */}

        </div>
      </div>


      {/* ════════════════════════════════════════════════════
          ROW 3 — BOTTOM STRIP
      ════════════════════════════════════════════════════ */}
      <div
        className="relative z-20 border-t px-6 sm:px-8 lg:px-12 xl:px-16"
        style={{ borderColor: "rgba(255,255,255,0.05)", ...fade(1060, 600) }}
      >
        <div className="flex flex-wrap items-center justify-between gap-y-3 py-4">

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
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
            <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.2)", lineHeight: 1.4 }}>
              +500 profissionais{" "}
              <span style={{ color: "rgba(255,255,255,0.38)", fontWeight: 500 }}>
                transformaram sua imagem
              </span>
            </p>
          </div>

          <div
            className="hidden sm:flex items-center gap-4"
            style={{
              fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.12)",
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

      {/* Section-to-section blend */}
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none z-30"
        style={{ background: `linear-gradient(to top, ${BG} 0%, transparent 100%)` }}
      />

    </section>
  )
}
