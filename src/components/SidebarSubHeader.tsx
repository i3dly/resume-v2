import type { FC, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Text } from "./Text";

export interface SidebarSubHeaderProps {
    children?: ReactNode;
    className?: string;
}

export const SidebarSubHeader: FC<SidebarSubHeaderProps> = ({ children, className }) => {
    return (
        <Text className={cn("text-base font-medium leading-none underline", className)}>
            {children}
        </Text>
    );
};
