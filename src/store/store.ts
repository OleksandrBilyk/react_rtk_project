import {configureStore} from "@reduxjs/toolkit";
import {darkThemeReducer, genreReducer, movieReducer} from "./slices";
import {findFilmsReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        darkTheme: darkThemeReducer,
        genres: genreReducer,
        find_movies: findFilmsReducer
    }
})

export {
    store
}