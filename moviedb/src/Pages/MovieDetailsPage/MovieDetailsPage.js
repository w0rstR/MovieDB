import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import moviesService from "../../Services/movies.service";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import {useDispatch, useSelector} from "react-redux";
import {setMovie} from "../../Store/movies/movie.slice";

export default function MovieDetailsPage(){
    const {id} = useParams()
    const {movieItem} = useSelector(state => state['movieReducer'])

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setMovie({id}))
    },[id])
    return(
        <div>
            {/*{movie ? <MovieDetails item={movie}/>: null}*/}
        </div>
    )
}