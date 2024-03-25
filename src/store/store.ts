import {configureStore} from "@reduxjs/toolkit";
import {darkThemeReducer, genreReducer, movieReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        darkTheme: darkThemeReducer,
        genres: genreReducer
    }
})

export {
    store
}