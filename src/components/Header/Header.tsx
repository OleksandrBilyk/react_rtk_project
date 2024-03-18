import {NavLink} from "react-router-dom";

import style from './Header.module.css';
import {UserInfo} from "../UserInfo"


const Header = () => {



    return (
        <div className={style.Header}>
            <UserInfo/>
            <NavLink to={'home'}>The MovieDB</NavLink>
            <NavLink to={'movie_list'}>Movies</NavLink>
            <NavLink to={'genre'}>Genres</NavLink>
            <NavLink to={'search'}>Search</NavLink>

        </div>
    );
};

export {Header};