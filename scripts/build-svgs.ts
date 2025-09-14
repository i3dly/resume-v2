import { transform } from "@svgr/core";
import { stripIndents } from "common-tags";
import fs from "fs-extra";
import path from "path";

const SOURCE_PATH: string = path.resolve(__dirname, "../svgs");
const OUTDIR: string = path.resolve(__dirname, "../src/generated");
const OUTFILE = `${OUTDIR}/index.tsx`;

const fileNames = fs.globSync(`${SOURCE_PATH}/**.svg`).sort((a, b) => a.localeCompare(b));

console.log(
    "Icons:",
    fileNames
        .map((fileName) => fileName.split("/").slice(-1)[0]?.replace(/\.svg/g, ""))
        .filter((icon) => !!icon),
);

fs.ensureDirSync(OUTDIR);
fs.removeSync(OUTFILE);

fileNames.forEach((fileName, i) => {
    const svg = fs.readFileSync(fileName, "utf8");
    const componentName = path.parse(fileName).name;
    const componentCode = transform.sync(
        svg,
        {
            template: (variables, { tpl }) => {
                return tpl`
                    export const ${variables.componentName}: FC<ComponentProps<"svg">> = (${variables.props}) => {
                        const { className, style, ...restProps } = props;
                        const { tw } = useTailwind();

                        const twStyle = useMemo(() => tw(className ?? ""), [className, tw]);

                        return ${variables.jsx}
                    };

                    ${variables.componentName}.displayName = "${variables.componentName}";
                `;
            },
            // 1. Clean SVG files using SVGO
            // 2. Generate JSX
            // 3. Format the result using Prettier
            plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
            prettier: true,
            prettierConfig: {
                printWidth: 120,
                tabWidth: 4,
                trailingComma: "all",
                useTabs: false,
            },
            svgoConfig: {
                plugins: [],
            },
            memo: true,
            svgo: true,
            typescript: true,
        },
        { componentName },
    );

    const tags = {
        circle: "Circle",
        clipPath: "ClipPath",
        defs: "Defs",
        ellipse: "Ellipse",
        g: "G",
        linearGradient: "LinearGradient",
        path: "Path",
        radialGradient: "RadialGradient",
        rect: "Rect",
        stop: "Stop",
        svg: "Svg",
        text: "Text",
        tspan: "Tspan",
    };

    if (i === 0) {
        fs.appendFileSync(
            OUTFILE,
            `${stripIndents`
                import { ${Object.values(tags).join(", ")} } from "@react-pdf/renderer";
                import type { ComponentProps, ComponentType, FC, SVGProps } from "react";
                import { useMemo } from "react";
                import { useTailwind } from "../hooks/useTailwind";

                export type SvgProps = ComponentProps<"svg">;
                export type SvgComponent = ComponentType<SvgProps> & {
                    className?: string;
                };
            `}\n\n`,
        );
    }

    const code = Object.entries(tags).reduce(
        (acc, [key, value]) => {
            return acc
                .replace(new RegExp(`<${key}(\\s+)`, "g"), `<${value}$1`)
                .replace(new RegExp(`<${key}>`, "g"), `<${value}>`)
                .replace(new RegExp(`</${key}>`, "g"), `</${value}>`);
        },
        componentCode.replace(
            /{\.\.\.props}/g,
            stripIndents`
                {...(restProps as any)}
                style={({ ...twStyle, ...style }) as SvgProps["style"]}
            `,
        ),
    );

    fs.appendFileSync(OUTFILE, code);
});
