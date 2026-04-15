"use client"

import { useState, useRef, useEffect } from "react"
import { Play, X } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    id: 1,
    name: "Marcos Paulos",
    role: "Mways Logistica",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%287%29-bZSt8GLkF0e4r4mMDrTjPLx2veoqsi.mp4",
  },
  {
    id: 2,
    name: "Jorge Alves",
    role: "Corretora de Seguros",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%286%29-fJlTSkbDfZMdGXKUcFoAlAWhNOBHZa.mp4",
  },
  {
    id: 3,
    name: "Rayssa Castro",
    role: "Axia Contabilidade",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-ixuRYvzMwJKBkAqMtqhRmUbKzwbUYp.mp4",
  },
]

// Video Modal Component
function VideoModal({ 
  isOpen, 
  onClose, 
  videoUrl, 
  name, 
  role 
}: { 
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  name: string
  role: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play()
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Dark backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      
      {/* Modal content */}
      <div 
        className="relative z-10 w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Video container */}
        <div
          className="overflow-hidden rounded-3xl bg-black"
          style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)" }}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full aspect-[9/16] object-cover"
            controls
            playsInline
            autoPlay
          />

          {/* Info footer */}
          <div className="px-5 py-4" style={{ background: "linear-gradient(180deg, #0d1117 0%, #0a0a0f 100%)" }}>
            <p className="text-[15px] font-bold text-white leading-tight">{name}</p>
            <p className="mt-0.5 text-xs text-white/40 tracking-wide">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Testimonial Card Component with real video preview
function TestimonialCard({ 
  testimonial, 
  index, 
  onClick 
}: { 
  testimonial: typeof testimonials[0]
  index: number
  onClick: () => void
}) {
  const previewRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = previewRef.current
    if (video) {
      // Force load on mobile
      video.load()
      
      const handleLoaded = () => {
        video.currentTime = 1
        setIsLoaded(true)
      }
      
      video.addEventListener("loadeddata", handleLoaded)
      return () => video.removeEventListener("loadeddata", handleLoaded)
    }
  }, [])

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-3xl flex-shrink-0 w-[280px] md:w-auto snap-center transition-all duration-500 hover:-translate-y-2"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        transitionDelay: `${index * 100}ms`,
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.border = "1px solid rgba(255,255,255,0.16)"
        el.style.boxShadow = "0 24px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.border = "1px solid rgba(255,255,255,0.08)"
        el.style.boxShadow = "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)"
      }}
    >
      {/* Video area */}
      <div className="aspect-[9/16] w-full relative overflow-hidden bg-[#090910]">

        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border border-white/10 border-t-white/35 animate-spin" />
          </div>
        )}

        {/* Video thumbnail */}
        <video
          ref={previewRef}
          src={testimonial.videoUrl}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${isLoaded ? "opacity-100" : "opacity-0"}`}
          muted
          playsInline
          preload="auto"
        />

        {/* Bottom gradient — strong, cinematic */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/10 to-transparent" />

        {/* Top edge vignette */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/25 to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Glow bloom */}
          <div
            className="absolute w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
            style={{ background: "radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 70%)" }}
          />
          {/* Button */}
          <div
            className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-[1.08]"
            style={{
              background: "rgba(8, 8, 14, 0.55)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.14)",
            }}
          >
            {/* Hover gradient fill */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.75) 0%, rgba(59,130,246,0.75) 100%)" }}
            />
            <Play className="relative z-10 ml-[3px] h-[18px] w-[18px]" fill="currentColor" />
          </div>
        </div>

        {/* Name / company — inside video area, above gradient */}
        <div className="absolute bottom-0 inset-x-0 p-6 pt-16">
          <p className="text-[15px] font-bold text-white leading-tight tracking-[-0.01em]">
            {testimonial.name}
          </p>
          <p className="mt-1 text-[11px] font-medium text-white/40 tracking-[0.06em] uppercase">
            {testimonial.role}
          </p>
        </div>

      </div>
    </div>
  )
}

export function ProvaSection() {
  const [activeVideo, setActiveVideo] = useState<typeof testimonials[0] | null>(null)
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleCloseModal = () => {
    setActiveVideo(null)
  }

  return (
    <section className="relative bg-[#0a0a0f] py-32 px-6 md:py-44 overflow-hidden">
      {/* Blend from hero section above */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0A0F1C] to-transparent pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        <div
          ref={titleRef}
          className={`scroll-fade-in ${titleVisible ? "visible" : ""}`}
        >
          <p className="mb-8 text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-cyan-400/60">
            Depoimentos
          </p>
          <h2 className="mb-16 text-center text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Eu não preciso<br />
            <span className="text-white/30 italic font-black">te convencer.</span>
          </h2>
        </div>

        {/* Desktop: 3 cards grid | Mobile: horizontal carousel */}
        <div
          ref={cardsRef}
          className={`scroll-fade-in ${cardsVisible ? "visible" : ""}`}
        >
          {/* Mobile carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 md:hidden scrollbar-hide -mx-6 px-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                onClick={() => setActiveVideo(testimonial)}
              />
            ))}
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 pb-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                onClick={() => setActiveVideo(testimonial)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          isOpen={!!activeVideo}
          onClose={handleCloseModal}
          videoUrl={activeVideo.videoUrl}
          name={activeVideo.name}
          role={activeVideo.role}
        />
      )}
    </section>
  )
}
