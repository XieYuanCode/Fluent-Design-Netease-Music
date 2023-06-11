import { ReactNode } from "react"
import "./ExplorerRow.css"
import { Body2 } from "@fluentui/react-components"

export interface IExplorerRowProps {
    text: string
    icon?: ReactNode
    action?: ReactNode
}
export function ExplorerRow({ text, icon, action }: IExplorerRowProps) {
    return (
        <div className={icon ? `explorer-row px-2 py-2 flex items-center justify-between` : `explorer-row pl-4 py-2 flex items-center justify-between`}>
            <div className="flex justify-between items-center">
                {icon}
                <Body2 className="tracking-wider select-none">{text}</Body2>
            </div>

            {action}
        </div>
    )
}