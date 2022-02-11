import s from "./PopularMovies.module.css"
import MovieItem from "../MovieItem/MovieItem";
import {useEffect, useState} from "react";

export default function PopularMovies({movilist}){
    const [active,setActive]= useState(true)
    const [movieList,setMovieList] = useState()
    useEffect(()=>{
            setMovieList(movilist.slice(0,5))
            console.log(movilist.slice(0,5))
    },[movilist])

    const showMore=()=>{
        if(movilist.length==movieList.length){
            setActive(false)
        }else {
            setMovieList(movilist.slice(0,movieList.length+2))
        }

    }

    return(
        <div>
            <div className={s.title}>
                POPULAR MOVIES
            </div>
            <div className={s.container}>
                { movieList ? movieList.map(item=><MovieItem key={item.id} item={item}/>): null}
            </div>
            <div className={s.btnWrap}>
                <button className={active ? s.btn : s.notActive} onClick={()=>showMore()}>Show more</button>
            </div>
        </div>
    )
}