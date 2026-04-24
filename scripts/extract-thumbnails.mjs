/**
 * Extrai um frame real de cada vídeo de depoimento e salva como JPEG em public/images/
 * Requer: ffmpeg instalado no sistema (disponível no ambiente Vercel Sandbox)
 * Uso: node scripts/extract-thumbnails.mjs
 */

import { execSync } from "child_process"
import { createWriteStream, mkdirSync } from "fs"
import { pipeline } from "stream/promises"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputDir = path.join(__dirname, "../public/images")
mkdirSync(outputDir, { recursive: true })

const videos = [
  {
    name: "marcos",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%287%29-bZSt8GLkF0e4r4mMDrTjPLx2veoqsi.mp4",
    seekTime: "00:00:02",
  },
  {
    name: "jorge",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%286%29-fJlTSkbDfZMdGXKUcFoAlAWhNOBHZa.mp4",
    seekTime: "00:00:02",
  },
  {
    name: "rayssa",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-ixuRYvzMwJKBkAqMtqhRmUbKzwbUYp.mp4",
    seekTime: "00:00:02",
  },
]

for (const video of videos) {
  const outputPath = path.join(outputDir, `thumb-${video.name}.jpg`)
  console.log(`Extraindo frame de ${video.name}...`)
  try {
    // ffmpeg: busca direto na URL remota, extrai 1 frame no tempo indicado
    execSync(
      `ffmpeg -y -ss ${video.seekTime} -i "${video.url}" -frames:v 1 -q:v 2 "${outputPath}"`,
      { stdio: "inherit" }
    )
    console.log(`Salvo: ${outputPath}`)
  } catch (err) {
    console.error(`Erro ao extrair frame de ${video.name}:`, err.message)
  }
}

console.log("Concluído.")
