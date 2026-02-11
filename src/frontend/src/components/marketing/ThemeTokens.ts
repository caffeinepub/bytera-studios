// Centralized theme constants for consistent spacing and styling

export const SECTION_SPACING = 'py-16 md:py-24 lg:py-32';
export const CONTAINER_CLASS = 'container mx-auto px-4 sm:px-6 lg:px-8';

// Gradient presets for neon dark theme
export const GRADIENTS = {
  hero: 'bg-gradient-to-br from-background via-accent/5 to-background',
  card: 'bg-gradient-to-br from-card to-card/90',
  accent: 'bg-gradient-to-r from-accent to-accent/80'
} as const;

// Shadow presets with neon glow
export const SHADOWS = {
  card: 'shadow-elegant',
  cardHover: 'shadow-elegant-lg',
  button: 'shadow-neon',
  buttonHover: 'shadow-neon-lg'
} as const;
