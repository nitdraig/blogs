/**
 * Paleta de gradientes para portadas de posts.
 * El mismo postId siempre obtiene el mismo color (determinista).
 */
const GRADIENTS = [
  "linear-gradient(135deg, #0c5083 0%, #1a6ba8 50%, #2680c4 100%)",
  "linear-gradient(135deg, #2d5016 0%, #3d6b1e 50%, #5a8c2e 100%)",
  "linear-gradient(135deg, #5c2d91 0%, #7b3fb8 50%, #9b5dd9 100%)",
  "linear-gradient(135deg, #8b4513 0%, #a0522d 50%, #c4723e 100%)",
  "linear-gradient(135deg, #0d5c63 0%, #148f96 50%, #1eb4b4 100%)",
  "linear-gradient(135deg, #6b2d5c 0%, #8e3d7a 50%, #b84d98 100%)",
  "linear-gradient(135deg, #1a3a52 0%, #2a5070 50%, #3d6b8e 100%)",
  "linear-gradient(135deg, #4a1942 0%, #6b2a5e 50%, #8e3d7a 100%)",
  "linear-gradient(135deg, #2c1810 0%, #4a2c1a 50%, #6b4028 100%)",
  "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0ea5e9 100%)",
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
