/**
 * Knocks a flat background out of a logo.
 *
 *   node scripts/cutout-logo.mjs <in> <out> [white|black] [tolerance]
 *
 * Flood-fills inward from the border only, so enclosed areas of the same colour
 * — white lettering inside a solid badge, say — stay opaque.
 */
import { spawnSync } from "node:child_process";

const [input, output, mode = "white", tol = "32"] = process.argv.slice(2);
if (!input || !output) {
  console.error("usage: cutout-logo.mjs <in> <out> [white|black] [tolerance]");
  process.exit(1);
}

const py = `
from collections import deque
from PIL import Image, ImageFilter
import sys

src, dst, mode, tol = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4])
im = Image.open(src).convert("RGBA")
w, h = im.size
px = im.load()

def is_bg(p):
    r, g, b, a = p
    if a == 0:
        return True
    return all(c >= 255 - tol for c in (r, g, b)) if mode == "white" else all(c <= tol for c in (r, g, b))

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
    for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
        nx, ny = x + dx, y + dy
        if 0 <= nx < w and 0 <= ny < h and not seen[ny*w+nx] and is_bg(px[nx, ny]):
            seen[ny*w+nx] = 1; q.append((nx, ny))

alpha = im.getchannel("A")
ap = alpha.load()
for y in range(h):
    for x in range(w):
        if seen[y * w + x]:
            ap[x, y] = 0
alpha = alpha.filter(ImageFilter.GaussianBlur(0.5))
im.putalpha(alpha)
im = im.crop(im.getchannel("A").getbbox())
im.save(dst, "PNG", optimize=True)
print(f"  {dst}  {im.size[0]}x{im.size[1]}")
`;

const r = spawnSync("python3", ["-c", py, input, output, mode, tol], { stdio: "inherit" });
process.exit(r.status ?? 1);
