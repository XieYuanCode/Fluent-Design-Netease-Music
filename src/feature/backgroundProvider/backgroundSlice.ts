import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export type BackgroundType = "Color" | "Image"

export interface IBackgroundState {
    backgroundType: BackgroundType
    backgroundFilterBlurPixel: number
    backgroundImageSrc?: string
    backgroundImageColor?: string
}

export const initialState: IBackgroundState = {
    backgroundType: "Color",
    backgroundFilterBlurPixel: 10,
    backgroundImageColor: "green"
}

export const backgroundSlice = createSlice({
    name: "background",
    initialState,
    reducers: {
    }
})

export default backgroundSlice.reducer