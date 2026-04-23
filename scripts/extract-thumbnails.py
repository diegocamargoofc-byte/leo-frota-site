"""
Extrai um frame real de cada vídeo de depoimento e salva como JPEG em public/images/
Usa urllib para baixar os vídeos temporariamente e subprocess para chamar ffmpeg.
"""

import os
import subprocess
import urllib.request
import tempfile

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "../public/images")
os.makedirs(OUTPUT_DIR, exist_ok=True)

videos = [
    {
        "name": "marcos",
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%287%29-bZSt8GLkF0e4r4mMDrTjPLx2veoqsi.mp4",
        "seek": "00:00:02",
    },
    {
        "name": "jorge",
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%286%29-fJlTSkbDfZMdGXKUcFoAlAWhNOBHZa.mp4",
        "seek": "00:00:02",
    },
    {
        "name": "rayssa",
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-ixuRYvzMwJKBkAqMtqhRmUbKzwbUYp.mp4",
        "seek": "00:00:02",
    },
]

for v in videos:
    output_path = os.path.join(OUTPUT_DIR, f"thumb-{v['name']}.jpg")
    print(f"Extraindo frame de {v['name']}...")

    # Download the video to a temp file first
    with tempfile.NamedTemporaryFile(suffix=".mp4", delete=False) as tmp:
        tmp_path = tmp.name

    try:
        print(f"  Baixando vídeo...")
        urllib.request.urlretrieve(v["url"], tmp_path)
        print(f"  Download concluído. Extraindo frame...")

        result = subprocess.run(
            [
                "ffmpeg", "-y",
                "-ss", v["seek"],
                "-i", tmp_path,
                "-frames:v", "1",
                "-q:v", "2",
                output_path,
            ],
            capture_output=True,
            text=True,
        )

        if result.returncode == 0:
            print(f"  Salvo: {output_path}")
        else:
            print(f"  Erro ffmpeg: {result.stderr[-300:]}")
    except Exception as e:
        print(f"  Erro: {e}")
    finally:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)

print("Concluído.")
