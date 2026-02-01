import type { DocumentProps as PdfDocumentProps } from "@react-pdf/renderer";
import type { ConfigType } from "dayjs";
import type { ReactElement } from "react";

export interface ResumeExperience {
    company: string;
    jobTitle: string;
    startDate: ConfigType;
    endDate?: Maybe<ConfigType>;
    highlights: readonly string[];
    info?: Maybe<string>;
}

export interface ResumeEducation {
    degree: string;
    college: string;
    endDate: ConfigType;
}

export interface ResumePage {
    experiences: ResumeExperience[];
}

export interface ResumeData {
    name: string;
    jobTitle: string;
    github: string;
    sites: {
        email: Maybe<string>;
        linkedin: Maybe<string>;
        github: Maybe<string>;
        website: Maybe<string>;
    };
    skills: {
        languages: readonly string[];
        frameworks: readonly string[];
        frontend: {
            tools: readonly string[];
            concepts: readonly string[];
        };
        backend: {
            tools: readonly string[];
            concepts: readonly string[];
        };
        ai: {
            tools: readonly string[];
            concepts: readonly string[];
        };
        misc: {
            tools: readonly string[];
            concepts: readonly string[];
        };
    };
    pages: readonly ResumePage[];
    education: ResumeEducation;
    summary: string;
    link?: string;
}

export type Maybe<T> = T | null | undefined;

export type ResumeProps<TProps extends unknown> = TProps & PdfDocumentProps;
export type ResumeElement<TProps extends unknown> = ReactElement<ResumeProps<TProps>>;

export type ResumeComponent<TProps extends unknown> = (
    props: ResumeProps<TProps>,
) => ResumeElement<TProps> | Promise<ResumeElement<TProps>>;
