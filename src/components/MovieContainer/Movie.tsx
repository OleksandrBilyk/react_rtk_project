import {FC} from "react";

// @ts-ignore
import BtnBadgesReactjs from 'btn-badge-reactjs'
import {StarRating} from '../StarRating';
import {IMovie_details} from "../../interfaces";
import style from "./Movie.module.css"
import {PosterPreview} from "../PosterPreview";
import {GenresList} from "../MovieGenreContainer";
import {useAppSelector} from "../../hooks";

interface IProps {
    movie_detail: IMovie_details,

}

const Movie: FC<IProps> = ({movie_detail}) => {
    const {original_title, title, overview, popularity, backdrop_path, vote_average,adult, genres} = movie_detail;
    const {isDarkMode} = useAppSelector(state => state.darkTheme);

    return (
        <div className={isDarkMode ?  style.Movie_info_dark: style.Movie_info}>
            <div className={style.image_block_poster}>
                <PosterPreview img_url={backdrop_path}/>
            </div>

            <div className={style.title}>{title}</div>
            <StarRating rating={vote_average}/>
            <div className={style.info_block}>
                {adult ? <BtnBadgesReactjs
                    btnText={`adult`}
                    badgeText ={`18+`}
                    badgeWidth={1}
                    badgeOffsetY={0.2}
                    badgeOffsetX={-1}
                    badgeBackground={'#d30019'}
                    btnBackground={'#271c52'}
                    btnFontSize={1.2}
                /> : <div></div>}
                <h3>Original title: {original_title}</h3>
                <h6>{overview}</h6>
            </div>
            <div className={style.popularity}>
                <h5>Popularity: {popularity}</h5>
            </div>
            <div className={style.genres_block}>
                {genres.map(genre=>  <GenresList key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {Movie};