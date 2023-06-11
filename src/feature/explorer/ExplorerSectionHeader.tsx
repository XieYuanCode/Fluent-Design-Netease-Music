import { Body1 } from "@fluentui/react-components";

export function ExplorerSectionHeader({ text }: { text: string }) {
    return (
        <div className="explorer-section-header pl-1 pt-4 flex select-none">
            <Body1>{text}</Body1>
        </div>
    )
}