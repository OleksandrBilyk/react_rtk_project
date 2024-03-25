import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovies, IMovie, IMovie_details} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[],
    page: string,
    total_pages: number,
    total_results: number,
    movie: IMovie_details,
    id: number
}

const initialState: IState = {
    movies: [],
    page: '1',
    total_pages: 0,
    total_results: 0,
    movie: null,
    id: null
};

const getAll = createAsyncThunk<IMovies, string>(
    'movieSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getById = createAsyncThunk<IMovie_details, string>(
    'movieSlice/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(+id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        nextPage: state => {
            state.page = `${+state.page+1}`
        },
        prevPage: state => {
            state.page = `${+state.page-1}`
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.page = action.payload.page
                state.movies = action.payload.results
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload
            })


})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getById
}

export {
    movieReducer,
    movieActions
}