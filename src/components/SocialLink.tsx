import type { FC, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Link } from "./Link";
import { Text } from "./Text";
import type { SvgComponent } from "../generated";
import { View } from "./View";

export interface SocialLinkProps {
    children: ReactNode;
    className?: string;
    icon: SvgComponent;
    src: string;
}

export const SocialLink: FC<SocialLinkProps> = ({ children, className, icon: Icon, src }) => {
    return (
        <View className={cn("flex flex-row items-center gap-1", className)}>
            <Icon className="h-3.5 w-3.5" height={14} width={14} />
            <Link className="flex items-center gap-1" src={src}>
                <Text className="text-sm">{children}</Text>
            </Link>
        </View>
    );
};
