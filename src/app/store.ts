import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "../feature/themeProvider/themeSlice"
import backgroundReducer from "../feature/backgroundProvider/backgroundSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        background: backgroundReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type  AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>