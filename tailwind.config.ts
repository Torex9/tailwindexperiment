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
        'paragraph': 'clamp(1rem, 0.9286rem + 0.3571vi, 1.25rem)'
      },
      spacing: {
        'padding': "clamp(1rem, 0.7143rem + 1.4286vi, 2rem)",
        'margin': ""
      },
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fit, clamp(18.75rem, 16.9643rem + 8.9286vi, 25rem))',
      },
      width: {

      },
      height: {
        'responsive': 'clamp(13rem, 12.1429rem + 4.2857vi, 16rem)'
      },
      maxWidth: {
        'grid-responsive-width': 'clamp(12.5rem, 8.9286rem + 17.8571vi, 25rem)',
        '8xl': '1840px'
      },


      // gap: {
      //   'fluid': 'clamp(1rem, 2vw, 2rem)',
      // },

      utopia: (theme: any) => ({
        minScreen: theme('screens.md'),
        minSize: 24,
        minScale: 1,
        maxScreen: '1440px',
        maxSize: 56,
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
