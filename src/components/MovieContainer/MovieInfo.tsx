import {useEffect} from "react";
import {useParams} from "react-router-dom";

import style from "./Movie.module.css"
import {Movie} from "./Movie";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";


const MovieInfo = () => {

    const {id} = useParams()
    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieActions.getById(id))
    }, [dispatch, id])

    if (movie)
        return (
            <div className={style.Movie_info_page}>
                <Movie movie_detail={movie}/>
            </div>
        );
};

export  {MovieInfo};