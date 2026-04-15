"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.bottom > 0) {
          setScrollY(window.scrollY * 0.3)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#0A0F1C" }}
    >
      {/* Parallax animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#0d1420] to-[#061224] animate-gradient-shift"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      {/* Stage lighting effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top spotlight beam */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20"
          style={{
            background: "conic-gradient(from 180deg at 50% 0%, transparent 40%, #00BFFF 50%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />
        {/* Side light beams */}
        <div className="absolute -top-20 right-0 w-[400px] h-[800px] bg-gradient-to-bl from-[#00BFFF]/10 via-transparent to-transparent blur-[60px] rotate-12" />
        <div className="absolute -top-20 left-0 w-[400px] h-[800px] bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-transparent blur-[60px] -rotate-12" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Watermark texts with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <span
          className={`absolute top-[15%] -left-10 text-[8rem] md:text-[12rem] font-black text-white/[0.02] uppercase tracking-wider whitespace-nowrap transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          POSICIONAMENTO
        </span>
        <span
          className={`absolute top-[40%] -right-10 text-[8rem] md:text-[12rem] font-black text-white/[0.02] uppercase tracking-wider whitespace-nowrap transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          AUTORIDADE
        </span>
        <span
          className={`absolute bottom-[15%] -left-10 text-[8rem] md:text-[12rem] font-black text-white/[0.02] uppercase tracking-wider whitespace-nowrap transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          PRESENÇA
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:gap-20 lg:py-0">
        {/* Left side - Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1
            className={`text-balance text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Sua imagem pode estar afastando clientes{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                backgroundImage: "linear-gradient(90deg, #00BFFF, #00E5FF, #00BFFF)",
                backgroundSize: "200% auto",
              }}
            >
              — mesmo você sendo bom no que faz
            </span>
          </h1>

          <p
            className={`mt-6 max-w-xl text-pretty text-base text-white/70 sm:text-lg md:text-xl lg:mx-0 mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Em apenas{" "}
            <span className="font-semibold text-white">4 horas</span>, você vai
            aprender como se posicionar como{" "}
            <span className="font-semibold" style={{ color: "#00BFFF" }}>autoridade</span> e
            atrair oportunidades de alto valor todos os dias.
          </p>

          {/* Event info badges */}
          <div
            className={`mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 rounded-full border border-[#00BFFF]/20 bg-[#00BFFF]/5 px-4 py-2 backdrop-blur-sm">
              <svg className="h-4 w-4" style={{ color: "#00BFFF" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium text-white/90">SEST SENAT</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#00BFFF]/20 bg-[#00BFFF]/5 px-4 py-2 backdrop-blur-sm">
              <svg className="h-4 w-4" style={{ color: "#00BFFF" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium text-white/90">23 de Abril</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#00BFFF]/20 bg-[#00BFFF]/5 px-4 py-2 backdrop-blur-sm">
              <svg className="h-4 w-4" style={{ color: "#00BFFF" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-white/90">18h às 22h</span>
            </div>
          </div>

          {/* Proof */}
          <div
            className={`mt-6 flex items-center gap-3 justify-center lg:justify-start transition-all duration-700 delay-350 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex -space-x-2">
              {[
                "/images/professionals/prof-1.jpg",
                "/images/professionals/prof-2.jpg",
                "/images/professionals/prof-3.jpg",
                "/images/professionals/prof-4.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Profissional ${i + 1}`}
                  className="h-8 w-8 rounded-full border-2 object-cover"
                  style={{ borderColor: "#0A0F1C" }}
                />
              ))}
            </div>
            <span className="text-sm text-white/60">+ de 500 profissionais já transformaram sua imagem</span>
          </div>

          {/* CTAs */}
          <div
            className={`mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="btn-premium group relative overflow-hidden px-8 py-6 text-lg font-bold text-white shadow-lg hover:shadow-xl"
              style={{
                backgroundImage: "linear-gradient(90deg, #0080FF, #00BFFF, #0080FF)",
                backgroundSize: "200% auto",
                boxShadow: "0 10px 40px -10px rgba(0, 191, 255, 0.4)",
              }}
            >
              <a href="https://pay.kiwify.com.br/P5bPQp4" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Quero garantir minha vaga agora</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-transparent px-6 py-6 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
              style={{ borderColor: "rgba(0, 191, 255, 0.3)" }}
            >
              Ver detalhes
            </Button>
          </div>

          {/* Urgency */}
          <div
            className={`mt-6 flex items-center gap-2 justify-center lg:justify-start transition-all duration-700 delay-450 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-amber-400/90">Vagas limitadas — evento presencial</span>
          </div>
        </div>

        {/* Right side - Transparent sticker image */}
        <div
          className={`relative flex-1 flex flex-col items-center justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
          style={{ background: "transparent" }}
        >
          {/* Main top glow - visible above person's head */}
          <div 
            className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[500px] h-[350px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0, 150, 220, 0.35) 0%, rgba(0, 120, 200, 0.2) 30%, rgba(0, 80, 160, 0.1) 50%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* Secondary concentrated glow - brighter center */}
          <div 
            className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[250px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0, 191, 255, 0.3) 0%, rgba(0, 160, 220, 0.15) 40%, transparent 70%)",
              filter: "blur(35px)",
            }}
          />

          {/* Light beam from above */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[300px] pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(0, 191, 255, 0.25) 0%, rgba(0, 150, 220, 0.1) 50%, transparent 100%)",
              filter: "blur(30px)",
            }}
          />

          {/* Subtle abstract light orb - top left */}
          <div 
            className="absolute top-[15%] left-[20%] w-[80px] h-[80px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Subtle abstract light orb - top right */}
          <div 
            className="absolute top-[12%] right-[22%] w-[60px] h-[60px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0, 150, 220, 0.18) 0%, transparent 70%)",
              filter: "blur(15px)",
            }}
          />

          {/* Mobile-specific top text - fills empty space on mobile */}
          <span
            className="absolute left-1/2 top-[5%] -translate-x-1/2 text-[3rem] sm:text-[4rem] md:hidden font-black uppercase tracking-tight whitespace-nowrap pointer-events-none select-none"
            style={{
              color: "rgba(255, 255, 255, 0.04)",
              zIndex: 0,
            }}
          >
            PRESENÇA
          </span>

          {/* Mobile-specific secondary text */}
          <span
            className="absolute left-1/2 top-[12%] -translate-x-1/2 text-[2.5rem] sm:text-[3rem] md:hidden font-black uppercase tracking-tight whitespace-nowrap pointer-events-none select-none"
            style={{
              color: "rgba(255, 255, 255, 0.03)",
              zIndex: 0,
            }}
          >
            POSICIONAMENTO
          </span>

          {/* Large background text "AUTORIDADE" behind person - adjusted for mobile */}
          <span
            className="absolute left-1/2 top-[25%] md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 text-[5rem] sm:text-[7rem] md:text-[14rem] lg:text-[18rem] font-black uppercase tracking-tight whitespace-nowrap pointer-events-none select-none"
            style={{
              color: "rgba(255, 255, 255, 0.05)",
              textShadow: "none",
              zIndex: 0,
            }}
          >
            AUTORIDADE
          </span>

          {/* Subtle blue light line - horizontal accent */}
          <div 
            className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[80%] h-[1px] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0, 191, 255, 0.15) 30%, rgba(0, 191, 255, 0.2) 50%, rgba(0, 191, 255, 0.15) 70%, transparent 100%)",
              filter: "blur(1px)",
            }}
          />

          {/* Subtle blue light line - diagonal accent */}
          <div 
            className="absolute left-[20%] top-[20%] w-[200px] h-[1px] pointer-events-none rotate-45"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0, 191, 255, 0.12) 50%, transparent 100%)",
              filter: "blur(2px)",
            }}
          />

          {/* Soft blue glow behind person - subtle, focused */}
          <div 
            className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 h-[500px] w-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0, 150, 220, 0.12) 0%, rgba(0, 191, 255, 0.06) 40%, transparent 70%)",
              filter: "blur(50px)",
              zIndex: 1,
            }}
          />

          {/* Secondary ambient glow - softer */}
          <div 
            className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 h-[400px] w-[350px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0, 191, 255, 0.1) 0%, rgba(0, 140, 200, 0.05) 50%, transparent 70%)",
              filter: "blur(40px)",
              zIndex: 1,
            }}
          />

          {/* Person image container - cropped at waist, higher contrast */}
          <div 
            className="relative overflow-hidden" 
            style={{ 
              transform: `translateY(${-scrollY * 0.1}px)`,
              background: "transparent",
              border: "none",
              boxShadow: "none",
              padding: 0,
              maxHeight: "600px",
            }}
          >
            {/* Subtle shadow below person for depth */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-12 pointer-events-none z-20"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 80%)",
                filter: "blur(20px)",
              }}
            />
            
            {/* Bottom fade for natural crop at waist */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
              style={{
                background: "linear-gradient(to top, #0A0F1C 0%, rgba(10, 15, 28, 0.9) 30%, rgba(10, 15, 28, 0.5) 60%, transparent 100%)",
              }}
            />
            
            {/* Person image - clean sticker, higher contrast */}
            <img
              src="/images/leonardo.png"
              alt="Leonardo Frota - Especialista em posicionamento e autoridade"
              className="relative z-0 mx-auto h-auto w-full max-w-sm lg:max-w-md xl:max-w-lg transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: "transparent",
                border: "none",
                boxShadow: "none",
                padding: 0,
                filter: "drop-shadow(0 0 80px rgba(0, 191, 255, 0.35)) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) contrast(1.08) brightness(1.05)",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to top, #0A0F1C 0%, rgba(10, 15, 28, 0.8) 50%, transparent 100%)",
        }}
      />



      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-white/20 p-1">
            <div className="h-2 w-full rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
