"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Icon imports removed — credentials as pure typography, not LinkedIn-style icon cards.
const credentials = [
  "+500 profissionais transformados",
  "12 anos de experiência em posicionamento",
  "Palestrante em eventos nacionais",
  "Especialista em imagem profissional",
]

export function AutoridadeSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section
      className="relative overflow-hidden pt-20 pb-20 lg:pt-0 lg:pb-0"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #0f1219 50%, #12101f 100%)" }}
    >
      {/* Background watermarks — kept, they add depth */}
      <div className="absolute top-8 -left-12 pointer-events-none select-none md:hidden overflow-visible">
        <span className="text-[4rem] sm:text-[5rem] font-black uppercase tracking-tighter opacity-[0.03] block" style={{ color: "#ffffff", filter: "blur(1px)" }}>
          AUTORIDADE
        </span>
      </div>
      <div className="absolute top-20 sm:top-24 -right-20 pointer-events-none select-none md:hidden overflow-visible">
        <span className="text-[2.5rem] sm:text-[3rem] font-black uppercase tracking-tighter opacity-[0.025] block" style={{ color: "#ffffff", filter: "blur(1px)" }}>
          POSICIONAMENTO
        </span>
      </div>
      <div className="absolute inset-0 items-center justify-start overflow-hidden pointer-events-none select-none hidden md:flex">
        <span className="text-[12rem] lg:text-[16rem] font-black uppercase tracking-tighter whitespace-nowrap opacity-[0.03] -ml-16" style={{ color: "#ffffff", filter: "blur(0.5px)" }}>
          AUTORIDADE
        </span>
      </div>
      <div className="absolute bottom-16 right-0 overflow-hidden pointer-events-none select-none hidden md:block">
        <span className="text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter whitespace-nowrap opacity-[0.025]" style={{ color: "#ffffff", filter: "blur(0.5px)" }}>
          MENTOR
        </span>
      </div>

      {/* Blend from above */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(0,150,200,0.07)" }} />
      <div className="absolute right-1/4 bottom-1/4 w-[350px] h-[350px] rounded-full blur-[110px] pointer-events-none"
        style={{ background: "rgba(212,168,71,0.05)" }} />

      {/* ══ Full-bleed 2-col magazine layout ══
          Photo bleeds left to viewport edge.
          Content column takes right half with its own padding.
          On mobile: photo stacks above, content below. */}
      <div
        ref={contentRef}
        className={`relative z-10 lg:grid lg:grid-cols-2 lg:items-stretch scroll-stagger ${contentVisible ? "visible" : ""}`}
      >

        {/* Left — photo column, fills full column height */}
        <div
          className="scroll-item stagger-1 relative overflow-hidden"
          style={{ minHeight: "420px" }}
        >
          <img
            src="/images/leonardo-mentor.png"
            alt="Leonardo Frota"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: "drop-shadow(0 0 60px rgba(0,150,200,0.10))" }}
          />
          {/* Right-edge fade — blends photo into the right content column (desktop only) */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ background: "linear-gradient(to right, transparent 45%, rgba(13,17,23,0.98) 100%)" }}
          />
          {/* Bottom fade on mobile */}
          <div
            className="absolute bottom-0 left-0 right-0 lg:hidden"
            style={{ height: "100px", background: "linear-gradient(to top, #0f1219 0%, transparent 100%)" }}
          />
        </div>

        {/* Right — content column */}
        <div className="scroll-item stagger-2 flex flex-col justify-center px-6 py-14 sm:px-10 lg:pl-14 xl:pl-20 lg:pr-12 xl:pr-20 lg:py-24">

          {/* Gold pill */}
          <div className="mb-8">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "5px 14px 5px 10px",
              border: "1px solid rgba(212,168,71,0.22)",
              borderRadius: "100px",
              background: "linear-gradient(135deg, rgba(212,168,71,0.06) 0%, transparent 100%)",
            }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D4A847", boxShadow: "0 0 6px rgba(212,168,71,0.60)", flexShrink: 0 }} />
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(212,168,71,0.78)" }}>
                Quem vai conduzir
              </span>
            </div>
          </div>

          {/* Name at display scale */}
          <h2
            className="mb-4 font-black text-white leading-[0.92] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
          >
            Leonardo<br />Frota
          </h2>

          <p className="mb-12 text-white/55 text-base md:text-lg font-medium leading-snug">
            Especialista em Posicionamento e Imagem Profissional
          </p>

          {/* Credentials — pure typography, no icon boxes.
              A dash accent + text is cleaner and more authoritative. */}
          <div className="space-y-5">
            {credentials.map((cred, i) => (
              <div key={i} className="flex items-start gap-4">
                <div style={{
                  width: "14px", height: "1px",
                  background: "rgba(212,168,71,0.40)",
                  marginTop: "10px", flexShrink: 0,
                }} />
                <span className="text-white/70 leading-snug" style={{ fontSize: "15px" }}>
                  {cred}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
