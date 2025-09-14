import type { FC, ReactNode } from "react";
import { cn } from "../lib/cn";
import { View } from "./View";

export interface SidebarProps {
    children?: ReactNode;
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ children, className }) => {
    return <View className={cn("bg-indigo-800 text-gray-50", className)}>{children}</View>;
};
