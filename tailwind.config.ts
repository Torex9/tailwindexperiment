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

        '2xl': 'clamp(1.25rem, 1.1786rem + 0.3571vi, 1.5rem)', //20px --> 24px
        '3xl': 'clamp(1.5rem, 1.3929rem + 0.5357vi, 1.875rem)', //24px --> 30px
        '4xl': 'clamp(1.875rem, 1.7679rem + 0.5357vi, 2.25rem)', //30px --> 36px
        '5xl': 'clamp(2.25rem, 2.0357rem + 1.0714vi, 3rem)',  //36px --> 48px
        '6xl': 'clamp(3rem, 2.7857rem + 1.0714vi, 3.75rem)', //48px --> 60px
        '7xl': 'clamp(3.75rem, 3.5357rem + 1.0714vi, 4.5rem)', //60px --> 72px
        '8xl': 'clamp(4.5rem, 4.0714rem + 2.1429vi, 6rem)', //72px --> 96px
        '9xl': 'clamp(6rem, 5.4286rem + 2.8571vi, 8rem)' //96px --> 128px
      },

      //spacing depends on the project
      spacing: {
        1.5: 'clamp(0.1875rem, 0.1339rem + 0.2679vi, 0.375rem)', //3px --> 6px
        2: 'clamp(0.25rem, 0.1786rem + 0.3571vi, 0.5rem)', //4px --> 8px
        2.5: 'clamp(0.375rem, 0.3036rem + 0.3571vi, 0.625rem)', //6px --> 10px
        3: 'clamp(0.5rem, 0.4286rem + 0.3571vi, 0.75rem)', //8px --> 12px
        3.5: 'clamp(0.625rem, 0.5536rem + 0.3571vi, 0.875rem)', //10px --> 14px
        4: 'clamp(0.75rem, 0.6786rem + 0.3571vi, 1rem)', //12px --> 16px
        5: 'clamp(0.875rem, 0.7679rem + 0.5357vi, 1.25rem)', //14px --> 20px
        6: 'clamp(1rem, 0.8571rem + 0.7143vi, 1.5rem)', //16px --> 24px
        7: 'clamp(1.25rem, 1.1071rem + 0.7143vi, 1.75rem)', //20px --> 28px
        8: 'clamp(1.5rem, 1.3571rem + 0.7143vi, 2rem)', //24px --> 32px
        9: 'clamp(1.75rem, 1.6071rem + 0.7143vi, 2.25rem)', //28px --> 36px
        10: 'clamp(2rem, 1.8571rem + 0.7143vi, 2.5rem)', //32px --> 40px
        11: 'clamp(2.25rem, 2.1071rem + 0.7143vi, 2.75rem)', //36px --> 44px
        12: 'clamp(2.5rem, 2.3571rem + 0.7143vi, 3rem)', //40px --> 48px
        14: 'clamp(2.75rem, 2.5357rem + 1.0714vi, 3.5rem)', //44px --> 56px
        16: 'clamp(3rem, 2.7143rem + 1.4286vi, 4rem)', //48px --> 64px
        20: 'clamp(4rem, 3.7143rem + 1.4286vi, 5rem)', //64px --> 80px
        24: 'clamp(5rem, 4.7143rem + 1.4286vi, 6rem)', //80px --> 96px
        28: 'clamp(6rem, 5.7143rem + 1.4286vi, 7rem)', //96px --> 112px
        32: 'clamp(7rem, 6.7143rem + 1.4286vi, 8rem)', //112px --> 128px
        36: 'clamp(8rem, 7.7143rem + 1.4286vi, 9rem)', //128px --> 144px
        40: 'clamp(9rem, 8.7143rem + 1.4286vi, 10rem)', //144px --> 160px
        44: 'clamp(10rem, 9.7143rem + 1.4286vi, 11rem)', //160px --> 176px
        48: 'clamp(11rem, 10.7143rem + 1.4286vi, 12rem)', //176px --> 192px
        52: 'clamp(12rem, 11.7143rem + 1.4286vi, 13rem)', //192px --> 208px
        56: 'clamp(13rem, 12.7143rem + 1.4286vi, 14rem)', //208px --> 224px
        60: 'clamp(14rem, 13.7143rem + 1.4286vi, 15rem)', //224px --> 240px
        64: 'clamp(15rem, 14.7143rem + 1.4286vi, 16rem)', //240px --> 256px
        72: 'clamp(16rem, 15.4286rem + 2.8571vi, 18rem)', //256px --> 288px
        80: 'clamp(18rem, 17.4286rem + 2.8571vi, 20rem)', //288px --> 320px
        96: ' clamp(20rem, 18.8571rem + 5.7143vi, 24rem)', //320px --> 384px

      },
      //grid RAM layout (repeat autofit minmax)
      gridTemplateColumns: {
        'responsive': "repeat(auto-fit, minmax(20rem, 1fr))",
      },

      utopia: (theme: any) => ({
        minScreen: theme('screens.md'),
        minSize: 24,
        minScale: 1,
        maxScreen: '1440px',
        maxSize: 56,
        maxScale: 1,
        textSizes: [

        ],
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
