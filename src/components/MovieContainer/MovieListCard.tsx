import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {StarRating} from '../StarRating';
import {IMovie} from "../../interfaces";
import style from "./Movie.module.css"
import {PosterPreview} from "../PosterPreview";


interface IProps {
    movie: IMovie,

}

const MovieListCard: FC<IProps> = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie;

    const navigate = useNavigate();
    const toMovie = () => {
        navigate(`/movie/${id}`)

    };

    return (
        <div onClick={toMovie} className={style.Movie_block}>
            <div  className={style.img_block}>
                <PosterPreview img_url={poster_path}/>
            </div>
            <div className={style.title}>{title}</div>
            <StarRating rating={vote_average}/>
        </div>
    );
};

export {MovieListCard};