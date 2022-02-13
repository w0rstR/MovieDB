import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import moviesService from "../../Services/movies.service";
import tvService from "../../Services/tv.service";

// export const getPopular=createAsyncThunk(
//     'movieSlice/GetPopular',
//     async (_,{dispatch})=>{
//         try{
//             const movies = await moviesService.getAllPopular()
//             dispatch(setPopular({movies}))
//         }catch (e) {
//             console.log(e)
//         }
//     }
// )
//
// export const getUpComing=createAsyncThunk(
//     'movieSlice/getUpComing',
//     async (_,{dispatch})=>{
//         try{
//             const movies = await moviesService.getUpComing()
//             dispatch(setUpComing({movies}))
//         }catch (e) {
//             console.log(e)
//         }
//     }
// )
//
// export const getById=createAsyncThunk(
//     'movieSlice/getById',
//     async ({id},{dispatch})=>{
//         try {
//             const movie = await moviesService.getById(id)
//             dispatch(setMovie({movie}))
//         }catch (e) {
//             console.log(e)
//         }
//     }
// )

export const getByTerm=createAsyncThunk(
    'tvSlice/getByTerm',
    async({term},{dispatch})=>{
        try {
            const movies = await tvService.getByTerm(term)
            dispatch(setTvs({movies}))
        }catch (e) {
            console.log(e)
        }
    }
)

export const getById = createAsyncThunk(
    'tvSlice/getById',
    async ({id},{dispatch})=>{
        try {
            const movie = await tvService.getById(id)
            dispatch(setTv({movie}))
        }catch (e) {
            console.log(e)
        }
    }
)




const tvSlice = createSlice({
    name: 'tvSlice',
    initialState: {
        tvList: [],
        tvItem: []
    },
    reducers: {
        setTvs: (state, action) => {
            state.tvList = action.payload.movies
        },
        setTv: (state, action) => {
           state.tvItem = action.payload.movie
        }

    }


})
const tvReducer = tvSlice.reducer
export default tvReducer
export const {setTv,setTvs} = tvSlice.actions