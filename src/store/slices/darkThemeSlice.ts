import {createSlice} from "@reduxjs/toolkit";



interface IThemeState {
    isDarkMode: boolean
}

const initialState: IThemeState = {
    isDarkMode: false
};


const darkThemeSlice = createSlice({
    name: 'darkThemeSlice',
    initialState,
    reducers: {
        ThemeSwitch: state => {
            state.isDarkMode = !state.isDarkMode
        }
    },

})

const {reducer: darkThemeReducer, actions} = darkThemeSlice;

const darkThemeActions = {
    ...actions,

}

export {
    darkThemeReducer,
    darkThemeActions
}