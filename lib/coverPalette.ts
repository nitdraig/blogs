/**
 * Paleta de gradientes oscuros para portadas de posts.
 * Degradado visible: de tono muy oscuro a otro tono oscuro (misma gama).
 * El mismo postId siempre obtiene el mismo color (determinista).
 */
const GRADIENTS = [
  "linear-gradient(145deg, #0a1628 0%, #0f2842 50%, #1a3a5c 100%)",
  "linear-gradient(145deg, #0d1a0d 0%, #1a2e1a 50%, #2a452a 100%)",
  "linear-gradient(145deg, #1a0a28 0%, #2a1542 50%, #3f2a55 100%)",
  "linear-gradient(145deg, #1c1008 0%, #2e1a0d 50%, #453018 100%)",
  "linear-gradient(145deg, #0a1c20 0%, #0f2a32 50%, #154045 100%)",
  "linear-gradient(145deg, #1e0a1c 0%, #2d1528 50%, #4b2b42 100%)",
  "linear-gradient(145deg, #0d1522 0%, #152238 50%, #212f4a 100%)",
  "linear-gradient(145deg, #1f0d1f 0%, #2e1830 50%, #492549 100%)",
  "linear-gradient(145deg, #151008 0%, #221a0d 50%, #352e18 100%)",
  "linear-gradient(145deg, #0a1522 0%, #122540 50%, #1b3350 100%)",
];

function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function getCoverGradient(postId: string): string {
  const index = hashString(postId) % GRADIENTS.length;
  return GRADIENTS[index];
}
