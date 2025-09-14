import type { ImageProps as PdfImageProps } from "@react-pdf/renderer";
import { Image as PdfImage } from "@react-pdf/renderer";
import type { FC, ReactNode } from "react";
import { useMemo } from "react";
import { useTailwind } from "../hooks/useTailwind";

export type ImageProps = PdfImageProps & {
    children?: ReactNode;
    className?: string;
};

export const Image: FC<ImageProps> = ({ children, className = "", style, ...props }) => {
    const { tw } = useTailwind();

    const twStyle = useMemo(() => tw(className), [className, tw]);

    return <PdfImage {...props} style={{ ...twStyle, ...style }} />;
};
