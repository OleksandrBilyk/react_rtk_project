import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IRecFindKeyword, ISearchRes} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IFindState {
    movies: IMovie[],
    page: number,
    total_pages: number,
    total_results: number,
    query: string
}

const initialState: IFindState = {
    movies: [],
    page: 1,
    total_pages: 0,
    total_results: 0,
    query: null
};

const getFindMovie = createAsyncThunk<ISearchRes, IRecFindKeyword>(
    'movieFindSlice/getFindKeyword',
    async ({query, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.findFilms(query, page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const movieFindSlice = createSlice({
    name: 'movieFindSlice',
    initialState,
    reducers: {
        nextPage: state => {
            state.page = state.page+1
        },
        prevPage: state => {
            state.page = state.page-1
        },
        find_keyword: (state, action) => {
            state.query = action.payload
            state.page = 1
            state.total_pages = 0
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getFindMovie.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages
                state.total_results = action.payload.total_results
            })


})

const {reducer: findFilmsReducer, actions} = movieFindSlice;

const findFilmsActions = {
    ...actions,
    getFindMovie
}

export {
    findFilmsReducer,
    findFilmsActions
}