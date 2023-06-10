import type { ReactNode } from "react";
import { useAppSelector } from "../../app/hooks";
import { currentThemeColor } from "./themeSlice"
import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components";

export function ThemeProvider({ children }: { children: ReactNode }) {
    const theme = useAppSelector(currentThemeColor)

    return (
        <FluentProvider theme={theme === "Light" ? webLightTheme : webDarkTheme} className="a w-full h-full">
            {children}
        </FluentProvider>
    )
}