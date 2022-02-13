import s from './MoviePage.module.css'
import MovieList from "../../Components/MovieList/MovieList";
import {useEffect, useState} from "react";
import moviesService from "../../Services/movies.service";
import {Pagination} from "antd";

export default function MoviesPage(){
    const [movieList,setMovieList] = useState([])
    const [id,setId] = useState(1)


    useEffect(()=>{
       moviesService.getAllPopular().then(value => setMovieList(value.results))
    },[])

    useEffect(()=>{

    },[id])

    const onChange=(page)=>{
        console.log(page)
    }

    return(
        <div className={s.container}>
            <div className={s.pagination}>
                <Pagination  showSizeChanger defaultCurrent={3} total={500} onChange={onChange}/>
            </div>
            {movieList ? <MovieList moviList={movieList}/> : null}
        </div>
    )
}