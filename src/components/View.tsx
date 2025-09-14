import type { ViewProps as PdfViewProps } from "@react-pdf/renderer";
import { View as PdfView } from "@react-pdf/renderer";
import type { FC, ReactNode } from "react";
import { useMemo } from "react";
import { useTailwind } from "../hooks/useTailwind";

export type ViewProps = PdfViewProps & {
    children?: ReactNode;
    className?: string;
};

export const View: FC<ViewProps> = ({ children, className = "", style, ...restProps }) => {
    const { tw } = useTailwind();

    const twStyle = useMemo(() => tw(className), [className, tw]);

    return (
        <PdfView {...restProps} style={{ ...twStyle, ...style }}>
            {children}
        </PdfView>
    );
};
