import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface IThemeState {
    currentThemeColor: "Dark" | "Light"
}

const initialState: IThemeState = {
    currentThemeColor: "Light"
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        switchCurrentThemeColor: state => {
            state.currentThemeColor = state.currentThemeColor === "Light" ? "Dark" : "Light"
        }
    }
})

export const { switchCurrentThemeColor } = themeSlice.actions

export const currentThemeColor = (state: RootState) => state.theme.currentThemeColor

export default themeSlice.reducer