import { oneLine, stripIndents } from "common-tags";
import type { ResumeData } from "../src/types";

export const data: ResumeData = {
    link: "https://resume.i3dly.dev",
    name: "David Lee",
    jobTitle: "Staff Software Engineer / Engineering Lead",
    github: "i3dly",
    sites: {
        email: "jobs.lee.david.cs@gmail.com",
        linkedin: "https://linkedin.com/in/i3dly",
        github: "https://github.com/i3dly",
        website: "https://pluv.io",
    },
    summary: stripIndents`
		${oneLine`
			Engineering leader with extensive experience in start-ups, serving various key roles
			in software and product development.
		`}
		${oneLine`
			Advanced expertise in TypeScript and Node.js, with experience across frontend,
            backend and infra.
		`}
		${oneLine`
			Demonstrated skill in architecting applications, researching emerging tech, and
			improving the developer experience.
		`}
		${oneLine`Enjoyer of Cloudflare Workers.`}
	`,
    skills: {
        languages: ["TypeScript", "JavaScript"],
        frameworks: ["Next.js", "Remix", "Nest.js"],
        frontend: [
            "HTML5",
            "CSS3",
            "React",
            "Urql",
            "Apollo Client",
            "Tailwind CSS",
            "D3",
            "Recharts",
            "Framer Motion",
            "Storybook",
            "Radix",
            "Shadcn/UI",
            "Slate",
            "Prism",
        ],
        backend: [
            "Node.js",
            "Serverless",
            "Cloudflare Workers",
            "D1",
            "Postgres",
            "Drizzle",
            "Redis",
            "GraphQL Yoga",
            "Pothos",
            "Hono",
            "Express",
            "Socket.io",
            "tRPC",
            "Lucia",
            "Better Auth",
            "OpenAuth",
            "AI SDK",
            "OpenRouter",
        ],
        tooling: [
            "Linux",
            "Mac",
            "Git",
            "VSCode",
            "Figma",
            "pnpm workspaces",
            "GitHub Actions",
            "AWS",
            "Cloudflare",
            "Vercel",
            "Pulumi",
            "CDKTF",
            "Terraform",
            "Turborepo",
            "Docker",
            "Google Analytics",
            "Sentry",
            "Changesets",
            "Playwright",
            "Vitest",
            "Octokit",
            "Stripe",
            "Twilio",
        ],
        concepts: [
            "SEO",
            "A11y",
            "I18n",
            "SSR",
            "CSR",
            "ISR",
            "SSG",
            "PPR",
            "IaC",
            "JWT",
            "Atomic Design",
            "Authorization",
            "Lighthouse",
            "Lazy Loading",
            "PubSub",
            "DB Normalization",
            "DB Sharding",
            "Caching",
            "Rate Limiting",
            "IP Blacklisting",
            "CRDTs",
            "Windowing",
            "Concurrency",
            "Monorepos",
        ],
    },
    education: {
        degree: "BS in Computer Science",
        college: "University of California, San Diego",
        endDate: "06/01/2017",
    },
    pages: [
        {
            experiences: [
                {
                    company: "pluv.io",
                    jobTitle: "Founder",
                    startDate: "08/01/2022",
                    endDate: null,
                    highlights: [
                        oneLine`
                            Built real-time, type-safe packages for Node.js, Cloudflare Workers, and
                            React, supporting authentication, rooms, custom events, awareness,
                            presence, and CRDT storage (with yjs and loro-crdt).
                        `,
                        oneLine`
                            Built a platform for deploying real-time infrastructure to Cloudflare's
                            edge network via lambdas that cloned and built GitHub repositories, and
                            used Wrangler to deploy Workers and Durable Objects, HTTP-streaming the
                            CLI outputs to the frontend (using GitHub webhooks, Terraform, AWS (ECR,
                            S3, Lambda), QStash, and Cloudflare (Workers, Durable Objects, D1)).
                        `,
                        oneLine`
                            Added E2E tests with Playwright, simulating runs on singular and
                            distributed Node.js servers and Cloudflare Workers.
                        `,
                        oneLine`
                            Pivoted to a real-time API SaaS, by generating secure API keys and
                            tracking billable usage with Cloudflare Analytics Engine.
                        `,
                        oneLine`
                            Did developer outreach, product development and marketing to create
                            interest, get an initial user base and generate revenue.
                        `,
                    ],
                },
                {
                    company: "KarmaSuite",
                    jobTitle: "Staff Engineer / Engineering Lead",
                    startDate: "03/27/2023",
                    endDate: null,
                    highlights: [
                        oneLine`
                            Architected and built the bulk of the initial KarmaSuite application as
                            the 1st engineer (using Next.js, Turborepo, Tailwind CSS, tRPC, prisma,
                            and Storybook), including an atomic design system with Radix UI.
                        `,
                        oneLine`
                            Unified and integrated 3rd party accounting APIs (e.g. QuickBooks, NetSuite,
                            etc.) to ETL pipelines so that data can be written to and from KarmaSuite.
                        `,
                        oneLine`
                            Significantly improved performance of SQL by unifying and denormalizing
                            multiple database tables to support more performant bulk reads and
                            writes of tens of thousands of rows in crons and long-lived background
                            tasks.
                        `,
                        oneLine`
                            Invented a highly performant algorithm to allocate tens of thousands
                            of expenses to restricted funding sources that minimizes wasted dollars
                            for non-profits using partitioning, set theory and hot-swappable heuristics
                            for an A* algorithm.
                        `,
                        oneLine`
                            Created and reviewed numerous PRDs, RFCs and TADs for the engineering org.
                        `,
                    ],
                },
            ],
        },
        {
            experiences: [
                {
                    company: "Openbase",
                    info: "shut-down",
                    jobTitle: "Staff Frontend Engineer",
                    startDate: "04/01/2021",
                    endDate: "02/17/2023",
                    highlights: [
                        oneLine`
                            Proposed then executed a migration strategy to port the app from a
                            SPA-Parcel app to Next.js, Apollo, Styled-Components, Storybook and
                            Codegen.
                        `,
                        oneLine`
                            Improved web vitals, a11y and SEO to boost Lighthouse scores from <20 to >90.
                        `,
                        oneLine`
                            Created an Algolia-Apollo interoperability module to power Openbase's search,
                            that populated @apollo/client's normalized cache, compatible with Next.js SSR.
                        `,
                        oneLine`
                            Authored an a/b + split-testing framework that integrated with Google
                            Analytics and Amplitude that segmented users by percentage or special
                            conditions.
                        `,
                        oneLine`
                            Created serverless functions to reroute traffic from old sites and
                            generate custom README badges with metrics from Openbase for package
                            maintainers.
                        `,
                        oneLine`
                            Significantly improved complex data-grid performances through windowing
                            and minimizing re-renders via memoization and careful opt-outs of state
                            updates.
                        `,
                    ],
                },
                {
                    company: "MakePurple",
                    info: "shut-down",
                    jobTitle: "Website Project",
                    startDate: "09/01/2021",
                    endDate: "04/12/2022",
                    highlights: [
                        oneLine`
                            Built with Next.js, NextAuth, Prisma, Nexus, Apollo Server, TailwindCSS,
                            Urql, Storybook, PlanetScale, Upstash, Octokit, Pnpm workspaces and Turborepo.
                        `,
                        oneLine`
                            Authored an internal CSS-in-JS library for emails in React, a rich text
                            editor with Slate, heat-maps with Visx, a type-safe GraphQL client for
                            Octokit, and more.
                        `,
                        oneLine`
                            Improved accessibility with support for screen-readers and keyboard
                            navigation with Radix and Headless UI.
                        `,
                        oneLine`
                            Implemented GraphQL for: activity feeds, GitHub operations,
                            file uploads, friend suggestions, real-time chat, notifications,
                            and comments with Nexus + Prisma.
                        `,
                        oneLine`
                            Integrated with GitHub's API to fetch and display user profile data,
                            support (dis)liking profiles and repos, and implementing a search for
                            users and repos.
                        `,
                    ],
                },
                {
                    company: "Toastel",
                    info: "shut-down",
                    jobTitle: "Senior Full Stack Engineer",
                    startDate: "01/01/2020",
                    endDate: "03/01/2021",
                    highlights: [
                        oneLine`
                            Created an atomic design system from scratch, while improving accessibility
                            and minimizing client bundle size.
                        `,
                        oneLine`
                            Authored an internal charting library with Visx, a data-grid library with
                            React-Window, responsive emails with Mjml, animations with Framer-Motion,
                            and more.
                        `,
                        oneLine`
                            Created several GraphQL-Nexus plugins to rate-limit fields, validate inputs,
                            and prevent malicious queries with complexity and depth limits.
                        `,
                        oneLine`
                            Coded over 300 components and 400 stories on Storybook, with snapshot
                            tests.
                        `,
                        oneLine`
                            Achieved 95-100 on all Google Lighthouse metrics.
                        `,
                        oneLine`
                            Implemented JWTs with refresh-tokens, blacklists and retries with Redis +
                            Apollo.
                        `,
                        oneLine`
                            Implemented GraphQL for: full-text search with Algolia, emails
                            with Nodemailer, subscriptions and payouts with Stripe, presigned URL
                            uploads with S3, localized timezones with Google Maps, and CRUD with Nexus
                            + Prisma.
                        `,
                    ],
                },
                {
                    company: "Onfleet",
                    jobTitle: "Senior Full Stack Engineer",
                    startDate: "01/01/2019",
                    endDate: "01/01/2020",
                    highlights: [],
                },
                {
                    company: "Outward",
                    info: "acquired by Williams Sonoma",
                    jobTitle: "Senior Software Engineer",
                    startDate: "01/01/2018",
                    endDate: "01/01/2019",
                    highlights: [],
                },
                {
                    company: "Bosera Funds & Newport Asia",
                    jobTitle: "Software Engineer",
                    startDate: "06/01/2015",
                    endDate: "12/01/2017",
                    highlights: [],
                },
            ],
        },
    ],
};
