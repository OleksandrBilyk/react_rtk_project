import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {movieService} from "../../services";
import {IMovie_details} from "../../interfaces";
import style from "./Movie.module.css"
import {Movie} from "./Movie";


const MovieInfo = () => {

    const [movie,  setMovie] = useState<IMovie_details>(null);
    const {id} = useParams()

    useEffect(() => {
        movieService.getById(+id).then(({data}) => {
            setMovie(data)
        })
    }, [])

    if (movie)
        return (
            <div className={style.Movie_info_page}>
                <Movie movie_detail={movie}/>
            </div>
        );
};

export  {MovieInfo};