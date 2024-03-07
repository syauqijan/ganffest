/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(var(--tw-gradient-angle), var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      }),
    },
    colors: {
      primary: "#292629",
      secondary: "#4863D8",
      tertiary: "#F9F6D5",
      quaternary: "#D6E9B0",
      quinary: "#F4602C",
      rightGradient: '#8E6ED2',
      leftGradient: '#F4CFAE',
      black: "#000000",
      white: "#ffffff",
  },
  },
  plugins: [],
}
