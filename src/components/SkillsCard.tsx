import type { FC } from "react";
import { View } from "./View";
import { cn } from "../lib/cn";
import { CommaList } from "./CommaList";
import { Text } from "./Text";

export interface SkillsCardProps {
    className?: string;
    items: readonly string[];
    title: string;
}

export const SkillsCard: FC<SkillsCardProps> = ({ className, items, title }) => {
    return (
        <View
            className={cn(
                "flex flex-col gap-1 border border-neutral-700 rounded-md p-1.5 bg-neutral-800",
                className,
            )}
        >
            <Text className="text-sm font-semibold text-white">{title}</Text>
            <CommaList className="text-xs text-neutral-300" items={items} />
        </View>
    );
};
