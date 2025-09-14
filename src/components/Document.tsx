import type { DocumentProps as PdfDocumentProps } from "@react-pdf/renderer";
import { Document as PdfDocument } from "@react-pdf/renderer";
import type { FC, ReactNode } from "react";
import { Tailwind } from "./Tailwind";

export type DocumentProps = PdfDocumentProps & {
    children?: ReactNode;
};

export const Document: FC<DocumentProps> = ({
    author = "i3dly",
    children,
    creator = "i3dly",
    pageLayout = "singlePage",
    pdfVersion = "1.3",
    producer = "i3dly",
    ...restProps
}) => {
    return (
        <Tailwind>
            <PdfDocument
                {...restProps}
                author={author}
                creator={creator}
                pageLayout={pageLayout}
                pdfVersion={pdfVersion}
                producer={producer}
            >
                {children}
            </PdfDocument>
        </Tailwind>
    );
};
