"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const pastHero = window.scrollY > 500

      const ofertaSection = document.querySelector('[data-section="oferta"]')
      const ctaFinalSection = document.querySelector('[data-section="cta-final"]')

      let ctaInView = false

      if (ofertaSection) {
        const rect = ofertaSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) ctaInView = true
      }

      if (ctaFinalSection) {
        const rect = ctaFinalSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) ctaInView = true
      }

      setIsVisible(pastHero && !ctaInView)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed z-50 transition-all duration-500 bottom-6 right-6 md:bottom-8 md:right-8 left-6 md:left-auto ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="https://pay.kiwify.com.br/P5bPQp4"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full md:w-auto inline-flex items-center justify-center gap-2.5 overflow-hidden"
        style={{
          borderRadius: "14px",
          padding: "15px 28px",
          background: "linear-gradient(135deg, #7C5C00 0%, #B8860B 45%, #D4A847 100%)",
          boxShadow: "0 0 0 1px rgba(212,168,71,0.30), 0 4px 8px rgba(0,0,0,0.60), 0 12px 36px -4px rgba(180,130,10,0.50), inset 0 1px 0 rgba(255,255,255,0.18)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          cursor: "pointer",
          display: "flex",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = "translateY(-2px)"
          el.style.boxShadow = "0 0 0 1px rgba(212,168,71,0.50), 0 4px 8px rgba(0,0,0,0.60), 0 20px 52px -4px rgba(200,150,20,0.65), inset 0 1px 0 rgba(255,255,255,0.22)"
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = "translateY(0)"
          el.style.boxShadow = "0 0 0 1px rgba(212,168,71,0.30), 0 4px 8px rgba(0,0,0,0.60), 0 12px 36px -4px rgba(180,130,10,0.50), inset 0 1px 0 rgba(255,255,255,0.18)"
        }}
      >
        {/* Shimmer */}
        <div
          className="-translate-x-full group-hover:translate-x-full absolute inset-0"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)", transition: "transform 0.5s ease" }}
        />
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1000", position: "relative", whiteSpace: "nowrap" }}>
          Garantir minha vaga
        </span>
        <ArrowRight
          size={16}
          className="group-hover:translate-x-0.5 transition-transform duration-200"
          style={{ color: "rgba(26,16,0,0.70)", position: "relative", flexShrink: 0 }}
        />
      </a>
    </div>
  )
}
