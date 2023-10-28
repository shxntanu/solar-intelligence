import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const colors = require("tailwindcss/colors");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            ...colors,
            primary: "#19C964",
            secondary: "#EAFAF1"
        },
        extend: {
            fontFamily: {
                sfmedium: ["var(--font-sfmedium)"],
                sfheavy: ["var(--font-sfheavy)"],
                sfbold: ["var(--font-sfbold)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            addCommonColors: true,
            themes: {
                light: {
                    colors: {
                        primary: "#19C964",
                        secondary: "#EAFAF1"
                    },
                },
                dark: {
                    colors: {},
                },
            },
        }),
    ],
};
export default config;
