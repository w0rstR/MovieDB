import {useEffect} from "react";
import s from "./MovieItem.module.css"
import {Link} from "react-router-dom";
export default function MovieItem({item}){

    return(
        <div>
            <div className={s.container}>
                <div className={s.main}>
                    <Link to={`movies/${item.id.toString()}`}>
                        <img className={s.image} src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="MovieItem"/>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}