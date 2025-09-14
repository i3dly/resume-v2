import type { CSSProperties, FC } from "react";
import { cn } from "../lib/cn";
import { View } from "./View";

export interface SidebarDividerProps {
    className?: string;
}

export const SidebarDivider: FC<SidebarDividerProps> = ({ className }) => {
    return <View className={cn("h-[1px] w-full bg-white", className)} />;
};
