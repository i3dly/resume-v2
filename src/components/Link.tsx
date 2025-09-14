import type { LinkProps as PdfLinkProps } from "@react-pdf/renderer";
import { Link as PdfLink } from "@react-pdf/renderer";
import { useMemo, type FC, type ReactNode } from "react";
import { useTailwind } from "../hooks/useTailwind";
import { cn } from "../lib/cn";

export type LinkProps = PdfLinkProps & {
    children?: ReactNode;
    className?: string;
};

export const Link: FC<LinkProps> = ({ children, className = "", style, ...restProps }) => {
    const { tw } = useTailwind();

    const twStyle = useMemo(() => tw(cn("text-black no-underline", className)), [className, tw]);

    return (
        <PdfLink {...restProps} style={{ ...twStyle, ...style }}>
            {children}
        </PdfLink>
    );
};
