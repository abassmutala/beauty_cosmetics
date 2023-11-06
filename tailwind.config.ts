import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        subtitle: "var(--subtitle)",
        border: "var(--border)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        footer: "var(--footer)",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)"
      },
      borderRadius: {
        sm: "var(--radius)",
        md: `calc(var(--radius) * 2)`,
        lg: `calc(var(--radius) * 4)`,
      },
      aspectRatio: {
        portrait: "0.6",
        product: "0.685972973"//"0.7251749628"
      },
      maxWidth: {
        "big-screen": "1440px"
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(320px, 1fr))"
      }
    },
  },
  plugins: [],
}
export default config
