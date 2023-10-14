import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dana: ["dana"],
        "dana-fanum": ["dana-fanum"],
      },
      colors: {
        primary: {
          1: "var(--primary-1)",
          2: "var(--primary-2)",
          3: "var(--primary-3)",
          4: "var(--primary-4)",
          5: "var(--primary-5)",
          6: "var(--primary-6)",
          7: "var(--primary-7)",
          8: "var(--primary-8)",
          9: "var(--primary-9)",
          10: "var(--primary-10)",
        },
        warning: {
          1: "var(--warning-1)",
          2: "var(--warning-2)",
          3: "var(--warning-3)",
          4: "var(--warning-4)",
          5: "var(--warning-5)",
          6: "var(--warning-6)",
          7: "var(--warning-7)",
          8: "var(--warning-8)",
          9: "var(--warning-9)",
          10: "var(--warning-10)",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
};
export default config;
