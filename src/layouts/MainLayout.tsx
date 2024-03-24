import {Outlet} from "react-router-dom";

import {Header} from "../components";
import style from './MainLayout.module.css'
import {useAppSelector} from "../hooks/reduxHooks";

const MainLayout = () => {
    const {isDarkMode} = useAppSelector(state => state.darkTheme);

    return (
        <div className={isDarkMode ? style.Dark_Theme : style.Theme}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};