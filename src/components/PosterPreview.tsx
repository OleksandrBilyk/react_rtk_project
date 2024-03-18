import {FC} from "react";

import style from "./MovieContainer/Movie.module.css";


interface IProps {
    img_url: string,
}

const PosterPreview: FC<IProps>= ({img_url}) => {

    return (
        <div>
            <img className={style.img_poster} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${img_url}`}  alt={"poster"}/>
        </div>
    );
};

export {PosterPreview};