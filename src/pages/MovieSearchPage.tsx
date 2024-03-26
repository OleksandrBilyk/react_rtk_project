import {SearchFilmsForm} from "../components";
import style from "../components/MovieContainer/Movie.module.css";

const MovieSearchPage = () => {
    return (
        <div className={style.Movies_block}>
            <SearchFilmsForm/>
        </div>
    );
};

export {MovieSearchPage};