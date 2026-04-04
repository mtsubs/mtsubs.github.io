/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // CSS variable–driven – automatically follow light/dark mode
        canvas:      'var(--color-bg)',
        warm:        'var(--color-bg-warm)',
        'bg-footer': 'var(--color-bg-footer)',
        accent:      'var(--color-accent)',
        wire:        'var(--color-border)',
        'wire-lit':  'var(--color-border-lit)',
        primary:     'var(--color-text-primary)',
        secondary:   'var(--color-text-secondary)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: 'var(--color-text-secondary)',
            a: {
              color: 'var(--color-accent)',
              '&:hover': { color: 'var(--color-accent)' },
            },
            'h1,h2,h3,h4': { color: 'var(--color-text-primary)' },
            strong: { color: 'var(--color-text-primary)' },
            code: {
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            blockquote: {
              borderLeftColor: 'var(--color-accent)',
              color: 'var(--color-text-secondary)',
            },
            hr: { borderColor: 'var(--color-border)' },
            li: { color: 'var(--color-text-secondary)' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
