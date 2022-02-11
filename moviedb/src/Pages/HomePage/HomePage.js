import s from './HomePage.module.css'
import MovieList from "../../Components/MovieList/MovieList";
import {useEffect, useState} from "react";
import moviesService from "../../Services/movies.service";

export default function HomePage(){
    const [popularMovie,setPopularMovie] = useState([])
    const [upComingMovie,setUpComingMovie] = useState([])
    useEffect(()=>{
        moviesService.getAllPopular().then(value=>setPopularMovie(value.results.slice(0,5)))
    },[])
    useEffect(()=>{
        moviesService.getUpcoming().then(value=>setUpComingMovie(value.results.slice(0,8)))
    },[])
    return(
        <div className={s.container}>
            <MovieList movilist={upComingMovie} title={'UP COMING MOVIES'}/>
            <MovieList movilist={popularMovie} title={'POPULAR MOVIES'}/>
        </div>
    )
}