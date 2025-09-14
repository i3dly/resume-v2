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

/** @type {import('tailwindcss').Config} */
const config = {
    theme: {
        colors: pdfColors,
        fontFamily: {
            sans: ["Roboto"],
            mono: ["Roboto Mono"],
        },
    },
};

export default config;
