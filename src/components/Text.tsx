import type { TextProps as PdfTextProps } from "@react-pdf/renderer";
import { Text as PdfText } from "@react-pdf/renderer";
import { useMemo, type FC, type ReactNode } from "react";
import { useTailwind } from "../hooks/useTailwind";
import { cn } from "../lib/cn";

export type TextProps = PdfTextProps & {
    children?: ReactNode;
    className?: string;
};

export const Text: FC<TextProps> = ({ children, className = "", style, ...restProps }) => {
    const { tw } = useTailwind();

    const twStyle = useMemo(() => tw(cn("text-sm", className)), [className, tw]);

    return (
        <PdfText {...restProps} style={{ ...twStyle, ...style }}>
            {children}
        </PdfText>
    );
};
