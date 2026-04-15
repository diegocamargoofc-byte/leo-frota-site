"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SobreSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section className="relative bg-[#0d1117] py-28 md:py-40 overflow-hidden">
      {/* Section separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-52 bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none" />
      {/* Bottom blend into conteudo */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
      {/* Ambient glow — pushed toward lower-center to bleed toward section exit */}
      <div
        className="absolute bottom-1/4 left-1/3 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, rgba(99,102,241,0.04) 50%, transparent 70%)" }}
      />

      <div
        ref={contentRef}
        className={`relative px-6 sm:px-8 lg:px-12 xl:px-20 scroll-stagger ${contentVisible ? "visible" : ""}`}
      >
        {/* Gold pill */}
        <div className="scroll-item stagger-1 from-left mb-12">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "5px 14px 5px 10px",
            border: "1px solid rgba(212,168,71,0.22)",
            borderRadius: "100px",
            background: "linear-gradient(135deg, rgba(212,168,71,0.06) 0%, transparent 100%)",
          }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D4A847", boxShadow: "0 0 6px rgba(212,168,71,0.60)", flexShrink: 0 }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(212,168,71,0.78)" }}>
              O Evento
            </span>
          </div>
        </div>

        {/* Strikethrough statements — committed, dramatic.
            Size doubled from original. Decoration opacity raised 2×.
            These should feel like crossed-out accusations, not whispered disclaimers. */}
        <div className="scroll-item stagger-2 mb-14 space-y-2">
          <p
            className="font-black text-white/28 line-through tracking-tight leading-tight"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              textDecorationColor: "rgba(244,63,94,0.55)",
              textDecorationThickness: "4px",
            }}
          >
            Palestra motivacional.
          </p>
          <p
            className="font-black text-white/28 line-through tracking-tight leading-tight"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              textDecorationColor: "rgba(244,63,94,0.55)",
              textDecorationThickness: "4px",
            }}
          >
            Sobre postar mais.
          </p>
        </div>

        {/* Clean ruled divider — replaces the generic ← · → placeholder */}
        <div
          className="scroll-item stagger-3 mb-14"
          style={{ height: "1px", maxWidth: "200px", background: "linear-gradient(to right, rgba(255,255,255,0.14), transparent)" }}
        />

        {/* Main statement — full weight, no apologetic blur boxes */}
        <p
          className="scroll-item stagger-4 font-black leading-[1.04] text-white tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.8rem)" }}
        >
          Construir uma imagem que{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #D4A847 0%, #F5D47A 55%, #B8860B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            gera oportunidade
          </span>{" "}
          <span style={{ color: "rgba(255,255,255,0.48)" }}>antes de você vender.</span>
        </p>
      </div>
    </section>
  )
}
