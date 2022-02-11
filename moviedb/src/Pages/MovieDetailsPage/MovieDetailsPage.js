import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import moviesService from "../../Services/movies.service";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";

export default function MovieDetailsPage(){
    const {id} = useParams()
    const [movie,setMovie] = useState()

    useEffect(()=>{
        moviesService.getById(id).then(value => setMovie(value))
    },[id])
    return(
        <div>
            {movie ? <MovieDetails item={movie}/>: null}
        </div>
    )
}