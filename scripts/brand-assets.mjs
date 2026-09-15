/**
 * Regenerates the derived brand assets from the master crest.
 *
 *   node scripts/brand-assets.mjs [source-image]
 *
 * Defaults to public/brand/logo.png. Pass a higher-resolution original (or the
 * vector exported to PNG) to re-cut every size from it. Requires Python with
 * Pillow, which is how the current assets were produced.
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = process.argv[2] ?? path.join(root, "public/brand/logo.png");

const py = `
from collections import deque
from PIL import Image, ImageFilter
import sys

src, out_dir = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
w, h = im.size
px = im.load()

def is_bg(p, tol=34):
    return all(c >= 255 - tol for c in p)

# Flood fill inward from the border so only background white is removed —
# the white ball panels and the wordmark stay opaque.
seen = bytearray(w * h)
q = deque()
for x in range(w):
    for y in (0, h - 1):
        if is_bg(px[x, y]) and not seen[y * w + x]:
            seen[y * w + x] = 1; q.append((x, y))
for y in range(h):
    for x in (0, w - 1):
        if is_bg(px[x, y]) and not seen[y * w + x]:
            seen[y * w + x] = 1; q.append((x, y))
while q:
    x, y = q.popleft()
    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nx, ny = x + dx, y + dy
        if 0 <= nx < w and 0 <= ny < h and not seen[ny * w + nx] and is_bg(px[nx, ny]):
            seen[ny * w + nx] = 1; q.append((nx, ny))

alpha = Image.new("L", (w, h), 255)
ap = alpha.load()
for y in range(h):
    for x in range(w):
        if seen[y * w + x]:
            ap[x, y] = 0

# Feather so JPEG fringing doesn't halo against the navy background.
out = im.convert("RGBA")
out.putalpha(alpha.filter(ImageFilter.GaussianBlur(0.6)))
out = out.crop(out.getbbox())
out.save(f"{out_dir}/logo.png")
print(f"logo.png  {out.size[0]}x{out.size[1]}")

og = Image.new("RGBA", (1200, 630), (12, 26, 44, 255))
crest = out.copy()
s = 470 / max(crest.size)
crest = crest.resize((round(crest.size[0] * s), round(crest.size[1] * s)), Image.LANCZOS)
og.alpha_composite(crest, ((1200 - crest.size[0]) // 2, (630 - crest.size[1]) // 2))
og.convert("RGB").save(f"{out_dir}/og.png", quality=92)
print("og.png    1200x630")

for size, name in ((32, "favicon-32.png"), (180, "apple-touch-icon.png"), (512, "icon-512.png")):
    ico = out.copy()
    ico.thumbnail((size, size), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.alpha_composite(ico, ((size - ico.size[0]) // 2, (size - ico.size[1]) // 2))
    canvas.save(f"{out_dir}/{name}")
    print(f"{name}  {size}x{size}")
`;

const res = spawnSync("python3", ["-c", py, src, path.join(root, "public/brand")], {
  stdio: "inherit",
});
process.exit(res.status ?? 1);
