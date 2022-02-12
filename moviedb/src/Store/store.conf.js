import {configureStore} from '@reduxjs/toolkit'
import movieReducer from "./movies/movie.slice";



const store = configureStore({
    reducer: {
        movieReducer:movieReducer
    }
})

export default store