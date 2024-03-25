import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovies, IMovie, IGenre, IGenries, IRecGenre} from "../../interfaces";
import {genreService} from "../../services";
import {AxiosError} from "axios";

interface IGenreState {
    genresList: IGenre[],
    page: number,
    movies: IMovie[],
    with_genres: number,
}

const initialState: IGenreState = {
    genresList: [],
    page: 1,
    movies: [],
    with_genres: null,
};

const getAll = createAsyncThunk<IGenries>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getGenre = createAsyncThunk<IMovies, IRecGenre>(
    'genreSlice/getGenre',
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getGenre(with_genres, page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        nextPage: state => {
            state.page = state.page+1
        },
        prevPage: state => {
            state.page = state.page-1
        },
        genreId: (state, action) => {
            state.with_genres = action.payload
            state.page = 1
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genresList = action.payload.genres
            })
            .addCase(getGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results
            })


})

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAll,
    getGenre

}

export {
    genreReducer,
    genreActions
}