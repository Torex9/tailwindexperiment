import type { Config } from "tailwindcss";


const plugin = require('tailwind-utopia');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontSize: {
        'heading': 'clamp(1.5rem, 0.8831rem + 4.9351vi, 6.25rem)',
        'paragraph': 'clamp(0.875rem, 0.8036rem + 0.3571vi, 1.125rem)'
      },
      spacing: {
        'padding': "clamp(1rem, 0.7143rem + 1.4286vi, 2rem)",
        'margin': ""
      },
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fit, minmax(clamp(300px, 10vw, 600px), 1fr))',
      },
      // gap: {
      //   'fluid': 'clamp(1rem, 2vw, 2rem)',
      // },

      utopia: (theme: any) => ({
        minScreen: theme('screens.md'),
        minSize: 21,
        minScale: 1,
        maxScreen: '1440px',
        maxSize: 100,
        maxScale: 1,
        textSizes: [],
        spacingSizes: {},
        spacingPairs: {},
        spacingCustomPairs: [],
      })


    },
  },
  plugins: [
    require('tailwind-utopia')
  ],
};
export default config;
