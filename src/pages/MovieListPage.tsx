import {MovieList} from "../components";
import style from "../components/MovieContainer/Movie.module.css";

const MovieListPage = () => {

    return (
        <div className={style.Movies_block}>
            <MovieList/>
        </div>
    );
};

export {MovieListPage};