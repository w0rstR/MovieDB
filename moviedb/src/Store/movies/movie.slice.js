import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import moviesService from "../../Services/movies.service";

export const getPopular=createAsyncThunk(
    'movieSlice/GetPopular',
    async (_,{dispatch})=>{
        try{
            const movies = await moviesService.getAllPopular()
            dispatch(setPopular({movies}))
        }catch (e) {
            console.log(e)
        }
    }
)

export const getUpComing=createAsyncThunk(
    'movieSlice/getUpComing',
    async (_,{dispatch})=>{
        try{
            const movies = await moviesService.getUpComing()
            dispatch(setUpComing({movies}))
        }catch (e) {
            console.log(e)
        }
    }
)

export const getById=createAsyncThunk(
    'movieSlice/getById',
    async ({id},{dispatch})=>{
        try {
            const movie = await moviesService.getById(id)
            dispatch(setMovie({movie}))
        }catch (e) {
            console.log(e)
        }
    }
)




const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        popularMovie: [],
        upComigMovie: [],
        movieList: [],
        movieItem:[]
    },
    reducers: {
        setPopular: (state, action) => {
            state.popularMovie = action.payload.movies
        },
        setUpComing: (state, action) => {
            state.upComigMovie = action.payload.movies
        },
        setMovie: (state, action) => {
            state.movieItem = action.payload.movie
        }
    }


})
const movieReducer = movieSlice.reducer
export default movieReducer
export const {setPopular,setUpComing,setMovie} = movieSlice.actions