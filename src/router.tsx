import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {HomePage, MovieListPage, MoviePage, MovieSearchPage, MovieGenresPage} from "./pages";
import {MovieGenreList} from "./components";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'home'}/>},
            {path: 'home', element: <HomePage/>},
            {path: 'movie_list', element: <MovieListPage/>},
            {path: 'search', element: <MovieSearchPage/>},
            {path: 'movie/:id', element: <MoviePage/>},
            {path: 'genre', element:<MovieGenresPage/>, children:[
                    {path: ':id', element: <MovieGenreList/>}
                ]
            }

        ]
    }
]);

export {
    router
}