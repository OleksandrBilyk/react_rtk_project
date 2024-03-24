import {configureStore} from "@reduxjs/toolkit";
import {darkThemeReducer, movieReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        darkTheme: darkThemeReducer
    }
})

export {
    store
}