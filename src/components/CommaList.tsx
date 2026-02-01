import type { FC } from "react";
import { Text } from "./Text";
import { View } from "./View";
import { cn } from "../lib/cn";

export interface CommaListProps {
    className?: string;
    items: readonly string[];
}

export const CommaList: FC<CommaListProps> = ({ items, className }) => {
    return (
        <View className={cn("flex flex-row flex-wrap gap-x-1", className)}>
            {items.map((item, i) => (
                <Text key={item} className="text-sm">
                    {item}
                    {i < items.length - 1 && ","}
                </Text>
            ))}
        </View>
    );
};
