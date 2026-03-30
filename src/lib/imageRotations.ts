export const imageRotations = {
  "/realizacje/covers/aquapark.webp": 90,
  "/realizacje/gallery/aquapark/1.webp": 90,
  "/realizacje/gallery/aquapark/2.webp": 90,
  "/realizacje/gallery/aquapark/3.webp": 90,
  "/realizacje/gallery/aquapark/4.webp": 90,
  "/realizacje/gallery/bateko/3.webp": 90,
  "/realizacje/gallery/bateko/4.webp": 90,
  "/realizacje/gallery/bateko/5.webp": 90,
  "/realizacje/covers/event-ccc.webp": 90,
  "/realizacje/covers/psp-zary.webp": 90,
  "/realizacje/covers/retail-ccc.webp": 90,
  "/realizacje/gallery/event-ccc/1.webp": 90,
  "/realizacje/gallery/malomice/2.webp": -90,
  "/realizacje/gallery/malomice/3.webp": -90,
  "/realizacje/gallery/malomice/4.webp": 90,
  "/realizacje/gallery/malomice/5.webp": 90,
  "/realizacje/gallery/psp-zary/1.webp": 90,
  "/realizacje/gallery/psp-zary/2.webp": 90,
  "/realizacje/gallery/psp-zary/3.webp": 90,
  "/realizacje/gallery/psp-zary/4.webp": 90,
  "/realizacje/gallery/psp-zary/5.webp": 90,
  "/realizacje/gallery/retail-ccc/1.webp": 90,
  "/realizacje/gallery/sor-legnica/3.webp": 90,
  "/realizacje/gallery/sor-legnica/4.webp": 90,
  '/realizacje/gallery/event-ccc/2.webp': 90,
  '/realizacje/gallery/retail-ccc/2.webp': 90,
  '/realizacje/gallery/retail-ccc/3.webp': 180,
  "/realizacje/gallery/retail-rossmann/5.webp": 90,
  "/realizacje/gallery/retail-rossmann/6.webp": 90,

} as const satisfies Record<string, 90 | -90 | 180>;

export function getImageRotation(src: string): number {
  return imageRotations[src as keyof typeof imageRotations] ?? 0;
}

export function isQuarterTurn(angle: number): boolean {
  return Math.abs(angle) === 90 || Math.abs(angle) === 270;
}
