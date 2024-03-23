import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IMovies, IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[],
    page: number
    trigger: boolean
}

const initialState: IState = {
    movies: [],
    trigger: null
};

const getAll = createAsyncThunk<IMovie[], void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addMatcher(isFulfilled(create), state => {
                state.trigger = !state.trigger
            })
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create
}

export {
    carReducer,
    carActions
}