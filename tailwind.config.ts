import type { Config } from 'tailwindcss'

const colours = [
  "yellow" ,
  "pink" ,
  "orange" ,
  "rose",
];

const safeColours = colours.flatMap((color) => [
  `bg-${color}-500`,
  `text-${color}-200`,
  `bg-${color}-400`,
  `border-${color}-600`,
  `text-${color}-950`,
]);

const config: Config = {
  safelist: [...safeColours],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": "poppins",
        "sec": "Vanity"
      }
    },
  },
  plugins: [],
}
export default config
