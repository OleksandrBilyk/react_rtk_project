import React from "react";
import {DarkModeToggle} from "react-dark-mode-toggle-2";
import {useAppDispatch, useAppSelector} from "../hooks";
import {darkThemeActions} from "../store";


const DarkTheme = () => {
    const dispatch = useAppDispatch();
    const {isDarkMode} = useAppSelector(state => state.darkTheme);
    return (

        <div>
            <DarkModeToggle
                onChange={() => dispatch(darkThemeActions.ThemeSwitch())}
                isDarkMode={isDarkMode}
            />
        </div>
    );
};
export {DarkTheme};