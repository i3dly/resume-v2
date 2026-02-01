import type { ConfigType } from "dayjs";
import dayjs from "dayjs";
import type { FC, ReactNode } from "react";
import { CalendarIcon } from "../generated";
import { cn } from "../lib/cn";
import type { Maybe } from "../types";
import { Text } from "./Text";
import { View } from "./View";

export interface TimelineItemProps {
    children?: ReactNode;
    className?: string;
    endDate?: Maybe<ConfigType>;
    info?: Maybe<string>;
    isEnd?: boolean;
    startDate: ConfigType;
    subTitle?: string;
    title: string;
}

export const TimelineItem: FC<TimelineItemProps> = ({
    children,
    className,
    endDate,
    info,
    isEnd,
    startDate,
    subTitle,
    title,
}) => {
    return (
        <View className={cn("flex flex-row items-stretch", className)}>
            <View className="flex flex-col items-center">
                <View className="z-10 flex items-center h-6 w-6 justify-center rounded-full border border-solid border-indigo-500 bg-indigo-800 text-white">
                    <CalendarIcon className="h-3 w-3" height={12} stroke="#ffffff" width={12} />
                </View>
                {!isEnd && <View className="grow w-[1px] bg-indigo-800" />}
            </View>
            <View className="ml-3 flex flex-col pb-1.5">
                <View className="flex flex-row items-center justify-start gap-1.5 h-6 text-base font-medium leading-none">
                    <Text className="text-base font-medium leading-none">{title}</Text>
                    {!!info && <Text className="text-xs font-normal">({info})</Text>}
                </View>
                {!!subTitle && <Text className="text-sm italic leading-none">{subTitle}</Text>}
                <Text className="mt-1 text-xs leading-none text-gray-600">
                    {dayjs(startDate).format("MMM YYYY")} -{" "}
                    {endDate ? dayjs(endDate).format("MMM YYYY") : "Present"}
                </Text>
                <View className="mt-2 text-xs text-gray-600">{children}</View>
            </View>
        </View>
    );
};
