/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      linearGradientColors: {
        // Definisikan variabel gradient-horizontal dengan tiga warna
        'gradient-horizontal': ['primary', 'secondary', 'var(--quaternary)'],
      },
    },
    colors: {
      primary: "#292629",
      secondary: "#4863D8",
      tertiary: "#F9F6D5",
      quaternary: "#D6E9B0",
      quinary: "#F4602C",
      rightGradient: '#8E6ED2',
      leftGradient: '#F4CFAE',
  },
  },
  plugins: [],
}
