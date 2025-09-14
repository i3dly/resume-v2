import type { FC, ReactElement } from "react";
import { PlayIcon } from "../generated";
import { cn } from "../lib/cn";
import { View } from "./View";

export interface BulletedListProps {
    children?: (ReactElement | string)[];
    className?: string;
}

export const BulletedList: FC<BulletedListProps> = ({ children, className }) => {
    return (
        <View className={cn("flex flex-col items-stretch gap-0.5", className)}>
            {children?.map((child, i) => (
                <View key={i} className="shrink-0 flex flex-row items-start gap-2">
                    <PlayIcon className="h-2 w-2 mt-1" height={8} width={8} />
                    {child}
                </View>
            ))}
        </View>
    );
};
