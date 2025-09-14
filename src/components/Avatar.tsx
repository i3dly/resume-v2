import type { CSSProperties, FC } from "react";
import { cn } from "../lib/cn";
import { Image } from "./Image";
import { Link, type LinkProps } from "./Link";
import { View } from "./View";

export interface AvatarProps {
    className?: string;
    login: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = ({ className, login, size = 96 }) => {
    const profileUrl = `https://github.com/${login}`;
    const avatarUrl = `https://github.com/${login}.png?size=${size}`;

    return (
        <Link className={cn("flex items-stretch rounded-full", className)} src={profileUrl}>
            <View className="z-10 flex items-stretch overflow-hidden rounded-full">
                <Image src={avatarUrl} />
            </View>
        </Link>
    );
};
