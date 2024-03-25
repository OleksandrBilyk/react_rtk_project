import {useEffect} from "react";

import style from "./MovieGenreList.module.css"
import {MovieListCard} from "../MovieContainer";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../store";




const MovieGenreList = () => {
    const dispatch = useAppDispatch();
    const {movies, page, with_genres} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getGenre({page, with_genres}))
    }, [dispatch, page, with_genres])


    return (
        <div>
            <div className={style.Movies_block}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie} />)}
            </div>
            <div className={style.buttons_panel}>
                <div className={style.buttons_panel}>
                    {page <=1 ? <div></div> :
                        <button className={style.button_pagination} disabled={(page <=1 )} onClick={() => dispatch(genreActions.prevPage())}>prev</button>}
                    <div className={style.page_marker}>{page}</div>
                    {page >= 500 ? <div></div> :
                        <button className={style.button_pagination} disabled={(page >= 500)} onClick={() => dispatch(genreActions.nextPage())} >next</button>}
                </div>
            </div>
        </div>
    );
};

export {MovieGenreList};