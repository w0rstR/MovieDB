import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import moviesService from "../../Services/movies.service";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import {useDispatch, useSelector} from "react-redux";
import {getById, setMovie} from "../../Store/movies/movie.slice";
import s from "./MovieDetailsPage.module.css"

export default function MovieDetailsPage(){
    const {id} = useParams()
    const {movieItem} = useSelector(state => state['movieReducer'])

    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getById({id}))
    },[id])
    return(
        <div className={s.container}>
            {movieItem ? <MovieDetails item={movieItem}/>: null}
        </div>
    )
}