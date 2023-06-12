// import { SubtleButton } from "../../Component/SubtleButton";
import "./Explorer.css"
import { ExplorerRow } from "./ExplorerRow"
import { ExplorerSectionHeader } from "./ExplorerSectionHeader"

import {
    Heart20Regular,
    HeartPulse20Regular
} from "@fluentui/react-icons";

export function Explorer() {
    return (
        <div className="left-explorer h-full py-5 px-2 backdrop-blur-md bg-white/60 flex flex-col">
            <ExplorerRow text="发现音乐"></ExplorerRow>
            <ExplorerRow text="博客"></ExplorerRow>
            <ExplorerRow text="视频"></ExplorerRow>
            <ExplorerRow text="关注"></ExplorerRow>
            <ExplorerRow text="直播"></ExplorerRow>
            <ExplorerSectionHeader text="我的音乐"></ExplorerSectionHeader>
            {/* <ExplorerRow text="我喜欢的音乐"
                icon={<Heart20Regular className="icon mr-1"></Heart20Regular>}
                action={<SubtleButton rounder="rounded-full">
                    <HeartPulse20Regular></HeartPulse20Regular>
                </SubtleButton>}
            > */}
            {/* </ExplorerRow> */}
        </div>
    )
}