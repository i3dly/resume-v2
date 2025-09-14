import type { FC } from "react";
import { cn } from "../lib/cn";
import { Link } from "./Link";
import { Text } from "./Text";
import { View } from "./View";

export interface ResumeLinkProps {
    className?: string;
    link: string;
}

export const ResumeLink: FC<ResumeLinkProps> = ({ className, link }) => {
    return (
        <View className={cn("flex gap-1 text-center text-xs text-white", className)}>
            <Text>View this resume online at:</Text>
            <Link className="text-white" src={link}>
                {link.replace(/^https?:\/\//, "")}
            </Link>
        </View>
    );
};
