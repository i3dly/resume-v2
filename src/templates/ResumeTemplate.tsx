import { Avatar } from "../components/Avatar";
import { BulletedList } from "../components/BulletedList";
import { Document } from "../components/Document";
import { Page } from "../components/Page";
import { ResumeLink } from "../components/ResumeLink";
import { Sidebar } from "../components/Sidebar";
import { SidebarDivider } from "../components/SideBarDivider";
import { SidebarHeader } from "../components/SidebarHeader";
import { SidebarSubHeader } from "../components/SidebarSubHeader";
import { SocialLink } from "../components/SocialLink";
import { Text } from "../components/Text";
import { Timeline } from "../components/Timeline";
import { TimelineItem } from "../components/TimelineItem";
import { View } from "../components/View";
import { CodeIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../generated";
import { cn } from "../lib/cn";
import type { ResumeComponent, ResumeData } from "../types";

export interface ResumeTemplateProps {
    data: ResumeData;
}

<div className="flex h-4" />;

export const ResumeTemplate: ResumeComponent<ResumeTemplateProps> = ({ data, ...restProps }) => {
    return (
        <Document title="Resume" {...restProps}>
            <Page className="flex flex-row-reverse items-stretch">
                <View className="flex grow flex-col items-stretch">
                    <View
                        className={cn(
                            "flex flex-row w-full items-center p-4",
                            "border-b border-solid border-gray-400",
                        )}
                    >
                        <View className="shrink-0">
                            <Avatar className="h-24 w-24" login={data.github} />
                        </View>
                        <View className="flex flex-col ml-4 min-w-0 grow basis-0">
                            <Text className="text-3xl font-semibold leading-none">{data.name}</Text>
                            <Text className="text-base text-gray-600">{data.jobTitle}</Text>
                            <View className="flex flex-row flex-wrap gap-1 w-full text-xs">
                                <SocialLink
                                    className="shrink-0 basis-56 w-56"
                                    icon={MailIcon}
                                    src={`mailto:${data.sites.email}`}
                                >
                                    <Text>{data.sites.email}</Text>
                                </SocialLink>
                                {!!data.sites.github && (
                                    <SocialLink
                                        className="shrink-0 basis-40 w-40"
                                        icon={GitHubIcon}
                                        src={data.sites.github}
                                    >
                                        <Text>{data.sites.github.replace(/^https?:\/\//, "")}</Text>
                                    </SocialLink>
                                )}
                                {!!data.sites.linkedin && (
                                    <SocialLink
                                        className="shrink-0 basis-56 w-56"
                                        icon={LinkedInIcon}
                                        src={data.sites.linkedin}
                                    >
                                        <Text>
                                            {data.sites.linkedin.replace(/^https?:\/\//, "")}
                                        </Text>
                                    </SocialLink>
                                )}
                                {!!data.sites.website && (
                                    <SocialLink
                                        className="shrink-0 basis-40 w-40"
                                        icon={CodeIcon}
                                        src={data.sites.website}
                                    >
                                        <Text>
                                            {data.sites.website.replace(/^https?:\/\//, "")}
                                        </Text>
                                    </SocialLink>
                                )}
                            </View>
                        </View>
                    </View>
                    <View className="flex flex-col p-4">
                        <Text
                            className={cn(
                                "mx-auto text-xl font-semibold leading-none",
                                "border-b-2 border-solid border-gray-500",
                                "uppercase",
                            )}
                        >
                            Professional Experience
                        </Text>
                        <Timeline className="grow w-full mt-2">
                            {data.pages[0]?.experiences.map((experience, i) => (
                                <TimelineItem
                                    key={i}
                                    className="shrink-0"
                                    endDate={experience.endDate}
                                    info={experience.info}
                                    isEnd={i + 1 === data.pages[0]?.experiences.length}
                                    startDate={experience.startDate}
                                    title={experience.company}
                                    subTitle={experience.jobTitle}
                                >
                                    <BulletedList className="shrink-0">
                                        {experience.highlights.map((highlight, i) => (
                                            <Text
                                                key={i}
                                                className="min-w-0 w-[352px] text-[10px] leading-5"
                                            >
                                                {highlight}
                                            </Text>
                                        ))}
                                    </BulletedList>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </View>
                </View>
                <Sidebar className={cn("flex w-64 shrink-0 flex-col p-4")}>
                    <View>
                        <SidebarHeader>Summary</SidebarHeader>
                        <View className="mt-3 flex flex-col text-xs leading-snug">
                            {data.summary.split(/\n+/g).map((paragraph, i) => (
                                <Text key={i} className={cn("text-sm", !!i && "mt-2")}>
                                    {paragraph}
                                </Text>
                            ))}
                        </View>
                    </View>
                    <SidebarDivider className="mt-4" />
                    <View className="grow mt-4">
                        <SidebarHeader>Skills</SidebarHeader>
                        <View className="flex flex-col">
                            <View className="text-xs leading-snug">
                                <SidebarSubHeader>Languages</SidebarSubHeader>
                                <Text className="mt-2 text-sm">
                                    {data.skills.languages.join(", ")}
                                </Text>
                            </View>
                            <View className="mt-3 text-xs leading-snug">
                                <SidebarSubHeader>Frameworks</SidebarSubHeader>
                                <Text className="mt-2 text-sm">
                                    {data.skills.frameworks.join(", ")}
                                </Text>
                            </View>
                            <View className="mt-3 text-xs leading-snug">
                                <SidebarSubHeader>Frontend</SidebarSubHeader>
                                <Text className="mt-2 text-sm">
                                    {data.skills.frontend.join(", ")}
                                </Text>
                            </View>
                            <View className="mt-3 text-xs leading-snug">
                                <SidebarSubHeader>Backend</SidebarSubHeader>
                                <Text className="mt-2 text-sm">
                                    {data.skills.backend.join(", ")}
                                </Text>
                            </View>
                        </View>
                    </View>
                </Sidebar>
            </Page>
            {data.pages.slice(1).map(({ experiences }, i) => (
                <Page key={i} className="flex flex-row-reverse items-stretch">
                    <View className="flex grow flex-col items-stretch p-4">
                        <Text
                            className={cn(
                                "mx-auto text-xl font-semibold leading-none",
                                "border-b-2 border-solid border-gray-500",
                                "uppercase",
                            )}
                        >
                            Professional Experience
                        </Text>
                        <Timeline className="grow w-full mt-2">
                            {experiences.map((experience, i) => (
                                <TimelineItem
                                    key={i}
                                    className="shrink-0"
                                    endDate={experience.endDate}
                                    info={experience.info}
                                    isEnd={i + 1 === experiences.length}
                                    startDate={experience.startDate}
                                    title={experience.company}
                                    subTitle={experience.jobTitle}
                                >
                                    <BulletedList className="shrink-0">
                                        {experience.highlights.map((highlight, i) => (
                                            <Text
                                                key={i}
                                                className="min-w-0 w-[352px] text-[10px] leading-5"
                                            >
                                                {highlight}
                                            </Text>
                                        ))}
                                    </BulletedList>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </View>
                    <Sidebar className={cn("flex w-64 shrink-0 flex-col p-4")}>
                        <View className="grow mt-4">
                            <SidebarHeader>
                                Skills <Text className="text-xs">(continued)</Text>
                            </SidebarHeader>
                            <View className="flex flex-col">
                                <View className="mt-3 text-xs leading-snug">
                                    <SidebarSubHeader>Tooling + Services</SidebarSubHeader>
                                    <Text className="mt-2 text-sm">
                                        {data.skills.tooling.join(", ")}
                                    </Text>
                                </View>
                                <View className="mt-3 text-xs leading-snug">
                                    <SidebarSubHeader>Concepts + Misc.</SidebarSubHeader>
                                    <Text className="mt-2 text-sm">
                                        {data.skills.concepts.join(", ")}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {!!data.link && <ResumeLink className="mt-4" link={data.link} />}
                    </Sidebar>
                </Page>
            ))}
        </Document>
    );
};
