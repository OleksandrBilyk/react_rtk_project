import React, {useEffect} from 'react';

import style from "./MovieGenreList.module.css";

import {GenreBadges} from "../GenreBages";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../store";

const SearchGenresForm = () => {
    const dispatch = useAppDispatch();
    const {genresList} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch])

    return (
        <div className={style.Genres_block}>
            {genresList.map(genre => <GenreBadges key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {SearchGenresForm};