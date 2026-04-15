"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isCtaSectionVisible, setIsCtaSectionVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approx 500px)
      const pastHero = window.scrollY > 500
      
      // Check if oferta-section or cta-final-section is in viewport
      const ofertaSection = document.querySelector('[data-section="oferta"]')
      const ctaFinalSection = document.querySelector('[data-section="cta-final"]')
      
      let ctaInView = false
      
      if (ofertaSection) {
        const rect = ofertaSection.getBoundingClientRect()
        // Consider section visible when it's more than 30% in the viewport
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
          ctaInView = true
        }
      }
      
      if (ctaFinalSection) {
        const rect = ctaFinalSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
          ctaInView = true
        }
      }
      
      setIsCtaSectionVisible(ctaInView)
      setIsVisible(pastHero && !ctaInView)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      } bottom-6 right-6 md:bottom-8 md:right-8 left-6 md:left-auto`}
    >
      <Button
        asChild
        size="lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full md:w-auto relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] px-8 py-6 text-base md:text-lg font-bold text-white transition-all duration-300 ${
          isHovered ? "scale-105 shadow-2xl shadow-cyan-500/50" : "shadow-xl shadow-cyan-500/30"
        }`}
        style={{
          animation: "gradient-shift 3s ease infinite",
        }}
      >
        <a href="https://pay.kiwify.com.br/P5bPQp4" target="_blank" rel="noopener noreferrer">
          <span className="relative z-10 flex items-center justify-center gap-2">
            Garantir minha vaga
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          {/* Shimmer effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ${
              isHovered ? "translate-x-full" : "-translate-x-full"
            }`}
          />
        </a>
      </Button>
    </div>
  )
}
