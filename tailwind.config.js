/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass-surface': 'rgba(255, 255, 255, 0.05)',
        'glass-highlight': 'rgba(255, 255, 255, 0.1)',
        'glass-shadow': 'rgba(0, 0, 0, 0.2)',
        'neon-accent': '#00F0FF',
        'neon-secondary': '#7000FF',
        'ai-thinking': '#FFD700',
        'confidence-high': '#00FF94',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'liquid-blob': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px #00F0FF' },
          '50%': { opacity: '.8', boxShadow: '0 0 20px #00F0FF' },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        }
      },
      transitionTimingFunction: {
        'snap': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'squish': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
