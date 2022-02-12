import s from './HomePage.module.css'
import MovieList from "../../Components/MovieList/MovieList";
import {useEffect, useState} from "react";
import moviesService from "../../Services/movies.service";
import UpComingMovies from "../../Components/UpComingMovies/UpComingMovies";
import PopularMovies from "../../Components/PopularMovies/PopularMovies";

export default function HomePage(){
    const [popularMovie,setPopularMovie] = useState([])
    const [upComingMovie,setUpComingMovie] = useState([])
    const [availableMovie,setAvailableMovie] = useState([])


    // useEffect(()=>{
    //     moviesService.getAllPopular().then(value=>setPopularMovie(value.results))
    // },[])
    // useEffect(()=>{
    //     moviesService.getUpcoming().then(value=>setUpComingMovie(value.results))
    // },[])

    return(
        <div className={s.container}>
            <div className={s.wrap}>
                <div className={s.first} >
                    <UpComingMovies movilist={upComingMovie}/>
                </div>
                <div className={s.second} >
                    <PopularMovies movilist={popularMovie}/>
                </div>
            </div>
        </div>
    )
}