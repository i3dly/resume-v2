import type { FC, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Text } from "./Text";

export interface SidebarHeaderProps {
    children?: ReactNode;
    className?: string;
}

export const SidebarHeader: FC<SidebarHeaderProps> = ({ children, className }) => {
    return (
        <Text
            className={cn("mb-3 text-lg font-medium uppercase leading-none text-white", className)}
        >
            {children}
        </Text>
    );
};
