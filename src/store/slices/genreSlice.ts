import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IMovies, IMovie, IMovie_details, IGenre, IGenries, IRecGenre} from "../../interfaces";
import {genreService} from "../../services";
import {AxiosError} from "axios";

interface IGenreState {
    genresList: IGenre[],
    page: number,
    movies: IMovie[],
    // total_pages: number,
    // total_results: number,
    // movie: IMovie_details,
    with_genres: number,
    // Genre_req: IRecGenre
}

const initialState: IGenreState = {
    genresList: [],
    page: 1,
    movies: [],
    // total_pages: 0,
    // total_results: 0,
    // movie: null,
    with_genres: null,
    // Genre_req: {with_genres:0, page:1}
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