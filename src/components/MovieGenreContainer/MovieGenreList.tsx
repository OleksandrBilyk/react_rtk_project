import {useEffect, useState} from "react";

import {IMovie} from "../../interfaces/movieInterface";

import {genreService} from "../../services/genreService";
import {MovieListCard} from "../MovieContainer/MovieListCard";
import style from "./MovieGenreList.module.css"
import {usePageQuery} from "../../hooks/usePageQuery";
import {useParams} from "react-router-dom";




const MovieGenreList = () => {
    const {with_genres} = useParams()
    const [movies,  setMovies] = useState<IMovie[]>([]);
    // const [page, setPage] = useState<number>(0);
    // const [query, setQuery] = useSearchParams({page: '1'});
    const {page, next, prev} = usePageQuery();
    // const [black_theme,] = useAppContext();

    useEffect(() => {
        genreService.getAllGenre(+with_genres, +page).then(({data}) => {
            setMovies(data.results)
            console.log(data)
        })
    }, [page, with_genres])


    return (
        <div>
            <div className={style.Movies_block}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie} />)}
            </div>
            <div className={style.buttons_panel}>
                <button className={style.button_pagination} disabled={(+page <=1 )} onClick={prev}>prev</button>
                <div className={style.page_marker}>{page}</div>
                <button className={style.button_pagination} disabled={(+page >= 500)} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {MovieGenreList};