import type { FC, ReactNode } from "react";
import { cn } from "../lib/cn";
import { View } from "./View";

export interface TimelineProps {
    children?: ReactNode;
    className?: string;
}

export const Timeline: FC<TimelineProps> = ({ children, className }) => {
    return <View className={cn("flex flex-col min-w-0", className)}>{children}</View>;
};
