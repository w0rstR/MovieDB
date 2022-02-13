import {configureStore} from '@reduxjs/toolkit'
import movieReducer from "./movies/movie.slice";
import tvReducer from "./tv/tv.slice";



const store = configureStore({
    reducer: {
        movieReducer:movieReducer,
        tvReducer:tvReducer
    }
})

export default store