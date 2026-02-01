import type { PageProps as PdfPageProps } from "@react-pdf/renderer";
import { Page as PdfPage } from "@react-pdf/renderer";
import { useMemo, type FC, type ReactNode } from "react";
import { useTailwind } from "../hooks/useTailwind";
import { cn } from "../lib/cn";

export type PageProps = PdfPageProps & {
    children?: ReactNode;
    className?: string;
};

export const Page: FC<PageProps> = ({
    children,
    className = "",
    orientation = "portrait",
    size = "LETTER",
    style,
    wrap = true,
    ...restProps
}) => {
    const { tw } = useTailwind();

    const twStyle = useMemo(() => tw(cn("overflow-hidden", className)), [className, tw]);

    return (
        <PdfPage
            {...restProps}
            orientation={orientation}
            size={size}
            style={{ ...twStyle, ...style }}
            wrap={wrap}
        >
            {children}
        </PdfPage>
    );
};
