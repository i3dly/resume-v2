import { useContext } from "react";
import { TailwindContext } from "../components/Tailwind";

export const useTailwind = () => {
    return useContext(TailwindContext);
};
