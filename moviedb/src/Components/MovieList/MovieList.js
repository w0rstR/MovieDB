import MovieItem from "../MovieItem/MovieItem";
import {useEffect} from "react";
import s from './MovieList.module.css'

export default function MovieList({movilist,title}){
    useEffect(()=>{
        console.log(movilist)
    },[movilist])
    return(
        <div>
            <div>
                {title ? title : null}
            </div>
            <div className={s.container}>
                { movilist ? movilist.map(item=><MovieItem key={item.id} item={item}/>): null}
            </div>
        </div>
    )
}