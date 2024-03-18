import StarRatings from 'react-star-ratings';
import {FC} from "react";

import style from "./MovieContainer/Movie.module.css";

const StarRating: FC<any> = ({rating}) => {

    return (
        <div className={style.Stars}>
            <StarRatings rating={rating}
                         numberOfStars={10}
                         starRatedColor = {'rgb(255, 255, 0)'}
                         starDimension={'20px'}
                         starSpacing={'5px'}
            />
        </div>
    );
};

export {StarRating};