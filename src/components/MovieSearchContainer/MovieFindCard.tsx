import {FC, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {StarRating} from '../StarRating';
import {IMovie_details, IMoviesFind} from "../../interfaces/movieInterface";
import style from "./MovieFindCard.module.css"
import {PosterPreview} from "../PosterPreview";
import {movieService} from "../../services/movieService";



interface IProps {
    movie_find: IMoviesFind,

}

const MovieFindCard: FC<IProps> = ({movie_find}) => {
    const [movie,  setMovie] = useState<IMovie_details>(null);
    const id = movie_find.id
    useEffect(() => {
        movieService.getById(+id).then(({data}) => {
            setMovie(data)
        }).catch((e) => {
            console.log(e);
        });
    }, [id])

    const navigate = useNavigate();
    const toMovie = () => {
        navigate(`/movie/${id}`)
    };
    if(movie){
        return (
            <div onClick={toMovie} className={style.Movie_block}>
                <div  className={style.img_block}>
                    <PosterPreview img_url={movie.poster_path}/>
                </div>

                <div className={style.title}>{movie.title}</div>
                <StarRating rating={movie.vote_average}/>
            </div>
        );
    }

};


export {MovieFindCard};