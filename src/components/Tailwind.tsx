import type { FC, ReactNode } from "react";
import { createContext, useCallback } from "react";
import { createTw } from "react-pdf-tailwind";
import config from "../../tailwind.config";

export interface TailwindProps {
    children?: ReactNode;
}

export interface TailwindContextValue {
    tw: ReturnType<typeof createTw>;
}

export const TailwindContext = createContext<TailwindContextValue>({
    tw: () => ({}),
});

export const Tailwind: FC<TailwindProps> = ({ children }) => {
    const tw = useCallback((input: string) => {
        const twFn = createTw({ theme: config.theme });

        return input ? twFn(input) : {};
    }, []);

    return <TailwindContext.Provider value={{ tw }}>{children}</TailwindContext.Provider>;
};
