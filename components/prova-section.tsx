"use client"

import { useState, useRef, useEffect } from "react"
import { Play } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    id: 1,
    name: "Marcos Paulos",
    role: "Mways Logística",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%287%29-bZSt8GLkF0e4r4mMDrTjPLx2veoqsi.mp4",
    poster: "/images/thumb-marcos.jpg",
  },
  {
    id: 2,
    name: "Jorge Alves",
    role: "Corretora de Seguros",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%286%29-fJlTSkbDfZMdGXKUcFoAlAWhNOBHZa.mp4",
    poster: "/images/thumb-jorge.jpg",
  },
  {
    id: 3,
    name: "Rayssa Castro",
    role: "Axia Contabilidade",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-ixuRYvzMwJKBkAqMtqhRmUbKzwbUYp.mp4",
    poster: "/images/thumb-rayssa.jpg",
  },
]

// Inline video card — plays inside the card, no modal, no fullscreen
function TestimonialCard({
  testimonial,
  index,
  isFeatured = false,
  isActive,
  onActivate,
}: {
  testimonial: typeof testimonials[0]
  index: number
  isFeatured?: boolean
  isActive: boolean
  onActivate: (id: number) => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [thumbSrc, setThumbSrc] = useState(testimonial.poster)

  // When this card loses active status, pause the video
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (!isActive) {
      video.pause()
    }
  }, [isActive])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const captureFrame = () => {
      // Seek to 0.5s to avoid black opening frame
      if (video.readyState >= 2) {
        video.currentTime = 0.5
      }
    }

    const onSeeked = () => {
      try {
        const canvas = document.createElement("canvas")
        canvas.width = video.videoWidth || 360
        canvas.height = video.videoHeight || 640
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
          const dataUrl = canvas.toDataURL("image/jpeg", 0.85)
          // Only update if we got a real frame (not a blank canvas)
          if (dataUrl !== "data:,") setThumbSrc(dataUrl)
        }
      } catch (_) {
        // CORS or other error — keep the static poster fallback
      }
      setIsLoaded(true)
    }

    const onLoaded = () => {
      setIsLoaded(true)
      captureFrame()
    }
    const onEnded = () => onActivate(-1)

    video.addEventListener("loadedmetadata", onLoaded)
    video.addEventListener("seeked", onSeeked)
    video.addEventListener("ended", onEnded)
    if (video.readyState >= 1) {
      setIsLoaded(true)
      captureFrame()
    }
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded)
      video.removeEventListener("seeked", onSeeked)
      video.removeEventListener("ended", onEnded)
    }
  }, [onActivate])

  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return
    onActivate(testimonial.id)
    video.play().catch(() => {})
  }

  // isPlaying drives the overlay visibility — true when this card is active
  const isPlaying = isActive

  const floatClass = (["testimonial-float-a", "testimonial-float-b", "testimonial-float-c"] as const)[index] ?? "testimonial-float-a"

  const borderRest = isFeatured
    ? "linear-gradient(145deg, rgba(255,255,255,0.28) 0%, rgba(212,168,71,0.16) 18%, rgba(255,255,255,0.04) 52%, rgba(0,90,200,0.20) 100%)"
    : "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(200,218,255,0.07) 25%, rgba(255,255,255,0.02) 52%, rgba(0,72,160,0.13) 100%)"

  const borderHover = isFeatured
    ? "linear-gradient(145deg, rgba(255,255,255,0.36) 0%, rgba(212,168,71,0.24) 18%, rgba(255,255,255,0.06) 52%, rgba(0,100,220,0.28) 100%)"
    : "linear-gradient(145deg, rgba(255,255,255,0.26) 0%, rgba(200,218,255,0.11) 25%, rgba(255,255,255,0.04) 52%, rgba(0,90,200,0.20) 100%)"

  const shadowRest = isFeatured
    ? "0 0 0 1px rgba(212,168,71,0.08), 0 2px 6px rgba(0,0,0,0.88), 0 10px 32px rgba(0,0,0,0.65), 0 32px 72px rgba(0,0,0,0.42), inset 0 1px 0 rgba(212,168,71,0.12)"
    : "0 0 0 1px rgba(255,255,255,0.03), 0 2px 6px rgba(0,0,0,0.88), 0 10px 32px rgba(0,0,0,0.65), 0 32px 72px rgba(0,0,0,0.42), inset 0 1px 0 rgba(200,218,255,0.07)"

  const shadowHover = "0 0 0 1px rgba(255,255,255,0.05), 0 2px 6px rgba(0,0,0,0.88), 0 18px 50px rgba(0,0,0,0.65), 0 44px 90px rgba(0,0,0,0.42), inset 0 1px 0 rgba(200,218,255,0.11)"

  return (
    <div
      className="scroll-item scale-in group flex-shrink-0 w-[280px] md:w-auto snap-center"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`relative ${floatClass}`}>

        {/* Ambient glow beneath card */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            bottom: "-16px", left: "14%", right: "14%",
            height: "44px",
            background: isFeatured
              ? "radial-gradient(ellipse at 50% 100%, rgba(0,150,240,0.28) 0%, rgba(212,168,71,0.07) 50%, transparent 70%)"
              : "radial-gradient(ellipse at 50% 100%, rgba(0,90,170,0.18) 0%, transparent 68%)",
            filter: "blur(18px)",
            zIndex: 0,
          }}
        />

        {/* Gradient border shell */}
        <div
          className="relative transition-all duration-500 hover:-translate-y-2"
          style={{
            borderRadius: "26px",
            padding: "1px",
            zIndex: 1,
            background: borderRest,
            boxShadow: shadowRest,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = borderHover
            el.style.boxShadow = shadowHover
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = borderRest
            el.style.boxShadow = shadowRest
          }}
        >
          {/* Inner card */}
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: "25px", background: "#090910" }}
          >

            {/* Top hairline */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 pointer-events-none z-10"
              style={{
                height: "1px",
                background: isFeatured
                  ? "linear-gradient(to right, transparent 5%, rgba(212,168,71,0.24) 28%, rgba(255,255,255,0.20) 54%, rgba(212,168,71,0.10) 80%, transparent 95%)"
                  : "linear-gradient(to right, transparent 5%, rgba(255,255,255,0.16) 28%, rgba(255,255,255,0.20) 54%, rgba(200,218,255,0.07) 80%, transparent 95%)",
              }}
            />

            {/* Video area */}
            <div className="aspect-[9/16] w-full relative overflow-hidden bg-[#090910]">

              {/* Loading spinner — shown only until first frame is ready */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-5 h-5 rounded-full border border-white/10 border-t-white/35 animate-spin" />
                </div>
              )}

              {/* The video — inline, no fullscreen, native controls when playing */}
              <video
                ref={videoRef}
                src={testimonial.videoUrl}
                poster={thumbSrc}
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
                // @ts-ignore
                webkit-playsinline="true"
                preload="metadata"
                controls={isPlaying}
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
              />

              {/* Overlays — only shown when NOT playing */}
              {!isPlaying && (
                <>
                  {/* Side vignette */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse 88% 100% at 50% 50%, transparent 52%, rgba(0,0,0,0.48) 100%)",
                      zIndex: 1,
                    }}
                  />

                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030308]/88 via-[#030308]/14 to-transparent pointer-events-none" style={{ zIndex: 1 }} />

                  {/* Top edge vignette */}
                  <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" style={{ zIndex: 1 }} />

                  {/* Play button — z-20 garante que fica acima de todos os overlays */}
                  <button
                    className="absolute inset-0 flex items-center justify-center w-full h-full"
                    style={{ zIndex: 20 }}
                    onClick={handlePlay}
                    aria-label={`Assistir depoimento de ${testimonial.name}`}
                  >
                    {/* Bloom */}
                    <div
                      className="absolute w-28 h-28 rounded-full blur-3xl opacity-15 group-hover:opacity-55 transition-opacity duration-500"
                      style={{ background: "radial-gradient(circle, rgba(212,168,71,0.45) 0%, rgba(0,130,240,0.30) 55%, transparent 80%)" }}
                    />
                    {/* Pulse ring */}
                    <div
                      aria-hidden="true"
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        width: "76px", height: "76px",
                        border: "1px solid rgba(255,255,255,0.16)",
                        animation: "play-pulse-ring 3.2s ease-out infinite",
                      }}
                    />
                    {/* Glass button */}
                    <div
                      className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-[1.10]"
                      style={{
                        background: "rgba(6, 6, 12, 0.62)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(255,255,255,0.22)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.16)",
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          background: "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(212,168,71,0.18) 50%, rgba(255,255,255,0.10) 100%)",
                          transition: "opacity 0.35s ease",
                        }}
                      />
                      <Play className="relative z-10 ml-[3px] h-[20px] w-[20px]" fill="currentColor" />
                    </div>
                  </button>

                  {/* Name / company — hidden once playing */}
                  <div className="absolute bottom-0 inset-x-0 p-6 pt-16 pointer-events-none" style={{ zIndex: 2 }}>
                    <p className="text-[15px] font-bold text-white leading-tight tracking-[-0.01em]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-white/40 tracking-[0.06em] uppercase">
                      {testimonial.role}
                    </p>
                  </div>
                </>
              )}

            </div>{/* end video area */}
          </div>{/* end inner card */}
        </div>{/* end border shell */}
      </div>{/* end float wrapper */}
    </div>
  )
}

export function ProvaSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  // -1 means no video is playing
  const [activeId, setActiveId] = useState<number>(-1)

  return (
    <section className="relative bg-[#0a0a0f] py-32 px-6 md:py-44 overflow-hidden">
      {/* Blend from hero section above */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#0A0F1C] to-transparent pointer-events-none" />
      {/* Bottom blend into dor */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none" />
      {/* Rose echo at bottom */}
      <div className="absolute bottom-0 left-0 w-[480px] h-[280px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(244,63,94,0.05) 0%, transparent 65%)" }} />

      {/* Section separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[380px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(ellipse at 42% 52%, rgba(0,100,220,0.09) 0%, rgba(180,130,10,0.06) 55%, transparent 80%)" }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div
          ref={titleRef}
          className={`scroll-stagger ${titleVisible ? "visible" : ""}`}
        >
          {/* Gold credential pill */}
          <div className="scroll-item stagger-1 from-left mb-8 flex justify-center">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "5px 14px 5px 10px",
              border: "1px solid rgba(212,168,71,0.22)",
              borderRadius: "100px",
              background: "linear-gradient(135deg, rgba(212,168,71,0.06) 0%, transparent 100%)",
            }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D4A847", boxShadow: "0 0 6px rgba(212,168,71,0.60)", flexShrink: 0 }} />
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(212,168,71,0.78)" }}>
                Depoimentos
              </span>
            </div>
          </div>
          <h2 className="scroll-item stagger-2 mb-16 text-center text-5xl font-black leading-[1.04] tracking-tight text-white md:text-6xl lg:text-7xl">
            Eu não preciso<br />
            <span className="text-white/40 italic font-black">te convencer.</span>
          </h2>
        </div>

        {/* Desktop: 3 cards grid | Mobile: horizontal carousel */}
        <div
          ref={cardsRef}
          className={`scroll-stagger ${cardsVisible ? "visible" : ""}`}
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
                isFeatured={index === 1}
                isActive={activeId === testimonial.id}
                onActivate={setActiveId}
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
                isFeatured={index === 1}
                isActive={activeId === testimonial.id}
                onActivate={setActiveId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
