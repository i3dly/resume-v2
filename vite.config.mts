import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
    plugins: [
        react(),
        nodePolyfills({
            include: ["fs"],
            overrides: {
                // Since `fs` is not supported in browsers, we can use the `fs-extra` package to polyfill it.
                fs: "fs-extra",
            },
            protocolImports: true,
        }),
    ],
});
