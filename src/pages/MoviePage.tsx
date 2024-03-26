
import {MovieInfo} from "../components";
import style from "../components/MovieContainer/Movie.module.css";

const MoviePage = () => {

    return (
        <div className={style.Movies_block}>
            <MovieInfo/>
        </div>
    );
};

export {MoviePage};