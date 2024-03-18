import React, {useEffect, useState} from 'react';
import {genreService} from "../../services/genreService";
import {IGenre} from "../../interfaces/movieInterface";
import style from "./MovieGenreList.module.css";

import {GenreBadges} from "../GenreBages";

const SearchGenresForm = () => {
    const [genresList,  setGenresList] = useState<IGenre[]>([]);

    useEffect(() => {
        genreService.getAll().then(({data}) => {
            setGenresList(data.genres)
        })
    }, [])
    return (
        <div className={style.Genres_block}>
            {genresList.map(genre => <GenreBadges key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {SearchGenresForm};