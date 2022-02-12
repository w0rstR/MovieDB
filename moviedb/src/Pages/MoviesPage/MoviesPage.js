import s from './MoviePage.module.css'
import MovieList from "../../Components/MovieList/MovieList";
import {useEffect, useState} from "react";
import moviesService from "../../Services/movies.service";
import {Pagination} from "antd";

export default function MoviesPage(){
    const [movieList,setMovieList] = useState([])

    useEffect(()=>{
       moviesService.getAllPopular().then(value => setMovieList(value.results))
    },[])

    return(
        <div className={s.container}>
            <div>
                <Pagination  showSizeChanger defaultCurrent={3} total={500}/>
            </div>
            {movieList ? <MovieList moviList={movieList}/> : null}
        </div>
    )
}