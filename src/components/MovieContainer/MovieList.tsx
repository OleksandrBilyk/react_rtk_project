import {useEffect} from "react";

import style from "./Movie.module.css"
import {MovieListCard} from "./MovieListCard";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";



const MovieList = () => {

    const dispatch = useAppDispatch();
    const {movies, page} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieActions.getAll(page))
    }, [dispatch, page])


    return (
        <div className={style.Movies_block}>
            <div className={style.Movies_block}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie} />)}
            </div>
            <div className={style.buttons_panel}>
                {+page <=1 ? <div></div> :
                <button className={style.button_pagination} disabled={(+page <=1 )} onClick={() => dispatch(movieActions.prevPage())}>prev</button>}
                <div className={style.page_marker}>{page}</div>
                {+page >= 500 ? <div></div> :
                <button className={style.button_pagination} disabled={(+page >= 500)} onClick={() => dispatch(movieActions.nextPage())} >next</button>}

            </div>
        </div>
    );
};

export {MovieList};