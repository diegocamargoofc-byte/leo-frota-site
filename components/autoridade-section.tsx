"use client"

import React from "react"
import { Users, Briefcase, Mic, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const credentials: { icon: React.ElementType; text: string }[] = [
  { icon: Users, text: "+500 profissionais transformados" },
  { icon: Briefcase, text: "12 anos de experiência em posicionamento" },
  { icon: Mic, text: "Palestrante em eventos nacionais" },
  { icon: Award, text: "Especialista em imagem profissional" },
]

export function AutoridadeSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section className="relative bg-gradient-to-br from-[#0a0a0f] via-[#0f1219] to-[#12101f] py-32 px-6 md:py-44 overflow-hidden">
      {/* Mobile watermarks - AUTORIDADE cut off left */}
      <div className="absolute top-8 -left-12 pointer-events-none select-none md:hidden overflow-visible">
        <span
          className="text-[4rem] sm:text-[5rem] font-black uppercase tracking-tighter opacity-[0.03] block"
          style={{ color: "#ffffff", filter: "blur(1px)" }}
        >
          AUTORIDADE
        </span>
      </div>

      {/* Mobile watermarks - POSICIONAMENTO cut off right */}
      <div className="absolute top-20 sm:top-24 -right-20 pointer-events-none select-none md:hidden overflow-visible">
        <span
          className="text-[2.5rem] sm:text-[3rem] font-black uppercase tracking-tighter opacity-[0.025] block"
          style={{ color: "#ffffff", filter: "blur(1px)" }}
        >
          POSICIONAMENTO
        </span>
      </div>

      {/* Desktop watermark - AUTORIDADE */}
      <div className="absolute inset-0 items-center justify-start overflow-hidden pointer-events-none select-none hidden md:flex">
        <span
          className="text-[12rem] lg:text-[16rem] font-black uppercase tracking-tighter whitespace-nowrap opacity-[0.03] -ml-16"
          style={{ color: "#ffffff", filter: "blur(0.5px)" }}
        >
          AUTORIDADE
        </span>
      </div>

      {/* Desktop watermark - MENTOR */}
      <div className="absolute bottom-16 right-0 overflow-hidden pointer-events-none select-none hidden md:block">
        <span
          className="text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter whitespace-nowrap opacity-[0.025]"
          style={{ color: "#ffffff", filter: "blur(0.5px)" }}
        >
          MENTOR
        </span>
      </div>

      {/* Blend from conteudo section */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none" />

      {/* Background glows - cyan and indigo mix */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute right-1/4 bottom-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px]" />

      <div
        ref={contentRef}
        className={`relative z-10 mx-auto max-w-5xl scroll-fade-in ${contentVisible ? "visible" : ""}`}
      >
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-20 lg:gap-24">
          {/* Photo - cropped at chest/waist level */}
          <div className="shrink-0 relative">
            <div className="relative group flex items-center justify-center">
              {/* Outer glow - more diffuse */}
              <div
                className="absolute w-[280px] h-[320px] md:w-[320px] md:h-[380px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(0, 150, 200, 0.1) 0%, rgba(0, 191, 255, 0.05) 50%, transparent 70%)",
                  filter: "blur(50px)",
                }}
              />

              {/* Inner glow - subtle */}
              <div
                className="absolute w-[220px] h-[280px] md:w-[260px] md:h-[320px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(0, 191, 255, 0.12) 0%, rgba(0, 140, 200, 0.06) 50%, transparent 70%)",
                  filter: "blur(35px)",
                }}
              />

              {/* Leonardo image - focused on face and torso */}
              <div className="relative overflow-hidden" style={{ maxHeight: "380px" }}>
                {/* Bottom fade for natural crop */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
                  style={{
                    background: "linear-gradient(to top, #0d1117 0%, rgba(13, 17, 23, 0.8) 40%, transparent 100%)",
                  }}
                />
                
                <img
                  src="/images/leonardo-mentor.png"
                  alt="Leonardo Frota"
                  className="relative z-0 h-auto w-52 md:w-60 lg:w-68 transition-all duration-500 group-hover:scale-[1.02]"
                  style={{
                    filter: "drop-shadow(0 0 50px rgba(0, 150, 200, 0.15)) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25))",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full text-center md:text-left">
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-400/70">
              Quem vai conduzir
            </p>
            
            <h2 className="mb-2 text-5xl font-black text-white md:text-6xl lg:text-7xl tracking-tight leading-[1.04]">
              Leonardo<br />Frota
            </h2>

            <p className="mb-10 text-base text-white/40 font-medium">
              Especialista em Posicionamento e Imagem Profissional
            </p>

            {/* Credentials */}
            <div className="space-y-4 inline-flex flex-col items-start w-full max-w-sm md:max-w-none mx-auto md:mx-0">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/10 text-cyan-400/80 border border-cyan-500/20 transition-all duration-300 group-hover:from-cyan-500/25 group-hover:to-blue-500/20 group-hover:border-cyan-500/40">
                    <cred.icon className="h-5 w-5" />
                  </div>
                  <span className="text-white/60 text-sm md:text-[15px] text-left">{cred.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
