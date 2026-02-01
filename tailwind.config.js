import { Font } from "@react-pdf/renderer";
import { formatHex } from "culori";
import colors from "tailwindcss/colors";

/**
 * @description We're using TailwindCSS@^3 instead of TailwindCSS@^4 because
 * the latter is not compatible with ReactPDF.
 */

// removing deprecated colors
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

const pdfColors = Object.entries(colors).reduce((acc, [name, color]) => {
    if (name === "black") return { ...acc, black: "#000000" };
    if (name === "white") return { ...acc, white: "#FFFFFF" };
    if (typeof color === "string") return acc;

    return {
        ...acc,
        [name]: Object.fromEntries(
            Object.entries(color).map(([key, value]) => [key, formatHex(value)]),
        ),
    };
}, {});

const fontWeights = {
    thin: 100,
    ultralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    ultrabold: 800,
    heavy: 900,
};
const createFontWeights = (family) => {
    return Object.entries(fontWeights).map(([key, weight]) => {
        return {
            src: `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`,
            fontWeight: weight,
        };
    });
};

/** @type {import('tailwindcss').Config} */
const config = (() => {
    Font.register({ family: "Geist", fonts: createFontWeights("Geist") });
    Font.register({ family: "JetBrains Mono", fonts: createFontWeights("JetBrains Mono") });

    return {
        theme: {
            colors: pdfColors,
            fontFamily: {
                sans: ["Geist"],
                mono: ["JetBrains Mono"],
            },
        },
    };
})();

export default config;
