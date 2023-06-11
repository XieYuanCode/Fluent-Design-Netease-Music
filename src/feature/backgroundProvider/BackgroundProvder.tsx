import { useAppSelector } from "../../app/hooks";
import type { ReactNode } from "react";

export function BackgroundProvider({ children }: { children: ReactNode }) {
    const background = useAppSelector(state => state.background)

    return (
        <div className="background-panel relative w-full h-full">
            <div className={`background-backdrop w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 absolute left-0 top-0 z-0`}></div>
            <div className={`background-mask absolute left-0 top-0 w-full h-full`}></div>
            {children}
        </div>
    )
}