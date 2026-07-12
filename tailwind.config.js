/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkBg: '#0A0D12',
          panel: '#12161F',
          amber: '#F5A623',
          teal: '#2DD4BF',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'route-travel': 'dash 2s linear infinite',
      },
      keyframes: {
        dash: {
          to: {
            'stroke-dashoffset': '-20',
          },
        },
      },
    },
  },
  plugins: [],
}
