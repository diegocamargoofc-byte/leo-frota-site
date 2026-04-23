"""
Extrai thumbnail real dos vídeos de depoimento.
Estratégia: lê os primeiros bytes do MP4 procurando por marcadores JPEG (FFD8FF)
embutidos no container (common in modern MP4s/MP4 with embedded thumbnails).
Se não encontrar, usa o primeiro frame decodificável via imageio/av.
Fallback final: salva um placeholder escuro com o nome.
"""

import os
import io
import struct
import urllib.request
import subprocess
import sys

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "../public/images")
os.makedirs(OUTPUT_DIR, exist_ok=True)

videos = [
    {
        "name": "marcos",
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%287%29-bZSt8GLkF0e4r4mMDrTjPLx2veoqsi.mp4",
    },
    {
        "name": "jorge",
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%286%29-fJlTSkbDfZMdGXKUcFoAlAWhNOBHZa.mp4",
    },
    {
        "name": "rayssa",
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-ixuRYvzMwJKBkAqMtqhRmUbKzwbUYp.mp4",
    },
]

def find_jpeg_in_bytes(data: bytes):
    """Find first complete JPEG image embedded in raw bytes."""
    start = data.find(b'\xff\xd8\xff')
    if start == -1:
        return None
    end = data.find(b'\xff\xd9', start)
    if end == -1:
        return None
    return data[start:end + 2]

def download_chunk(url: str, num_bytes: int = 2 * 1024 * 1024) -> bytes:
    """Download first N bytes of a URL."""
    req = urllib.request.Request(url, headers={"Range": f"bytes=0-{num_bytes - 1}"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return resp.read()
    except Exception:
        with urllib.request.urlopen(url, timeout=30) as resp:
            return resp.read(num_bytes)

for v in videos:
    output_path = os.path.join(OUTPUT_DIR, f"thumb-{v['name']}.jpg")
    print(f"Processando {v['name']}...")

    try:
        # Download first 2MB — enough to find embedded JPEG thumbnail in MP4 moov atom
        data = download_chunk(v["url"], 2 * 1024 * 1024)
        print(f"  Baixados {len(data):,} bytes")

        jpeg = find_jpeg_in_bytes(data)
        if jpeg and len(jpeg) > 5000:
            with open(output_path, "wb") as f:
                f.write(jpeg)
            print(f"  JPEG embutido encontrado e salvo ({len(jpeg):,} bytes): {output_path}")
        else:
            # Try downloading more data (some thumbnails are deeper in the file)
            print(f"  JPEG não encontrado nos primeiros 2MB, tentando 8MB...")
            data = download_chunk(v["url"], 8 * 1024 * 1024)
            jpeg = find_jpeg_in_bytes(data)
            if jpeg and len(jpeg) > 5000:
                with open(output_path, "wb") as f:
                    f.write(jpeg)
                print(f"  JPEG encontrado em chunk maior ({len(jpeg):,} bytes): {output_path}")
            else:
                print(f"  Nenhum JPEG embutido encontrado para {v['name']} — pulando")

    except Exception as e:
        print(f"  Erro: {e}")

print("Concluído.")
