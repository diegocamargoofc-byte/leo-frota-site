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
        <div className="overflow-hidden rounded-2xl bg-black shadow-2xl shadow-cyan-500/10">
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full aspect-[9/16] object-cover"
            controls
            playsInline
            autoPlay
          />
          
          {/* Info footer */}
          <div className="bg-gradient-to-t from-[#0a0a0f] to-[#0d1117] p-4">
            <p className="font-semibold text-white">{name}</p>
            <p className="text-sm text-white/60">{role}</p>
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
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] flex-shrink-0 w-[280px] md:w-auto snap-center"
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      {/* Video preview thumbnail */}
      <div className="aspect-[9/16] w-full relative overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/20">
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
          </div>
        )}
        
        {/* Real video as thumbnail - muted, paused */}
        <video
          ref={previewRef}
          src={testimonial.videoUrl}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          muted
          playsInline
          preload="auto"
        />
        
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 transition-opacity duration-500 group-hover:opacity-90" />
        
        {/* Play button - more subtle */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Glow behind play button */}
          <div className="absolute rounded-full bg-cyan-400/20 blur-2xl w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-500/80 group-hover:to-cyan-500/80 group-hover:border-transparent group-hover:shadow-cyan-500/30">
            <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
          </div>
        </div>
      </div>
      
      {/* Info footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-5 pt-12">
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm text-white/50">{testimonial.role}</p>
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
    <section className="relative bg-[#0a0a0f] py-24 px-6 md:py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        <div
          ref={titleRef}
          className={`scroll-fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="mb-16 text-center text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Eu não preciso te convencer.
            <br />
            <span className="text-white/40">Assiste isso:</span>
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
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:hidden scrollbar-hide"
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
          <div className="hidden md:grid md:grid-cols-3 gap-6">
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
