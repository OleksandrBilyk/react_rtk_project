import {SearchGenresForm} from "../components";
import {Outlet} from "react-router-dom";

import style from "../components/MovieGenreContainer/MovieGenreList.module.css"
const MovieGenresPage = () => {
    return (
        <div className={style.Movie_genre_page}>
            <SearchGenresForm/>
            <Outlet/>
        </div>
    );
};

export {MovieGenresPage};