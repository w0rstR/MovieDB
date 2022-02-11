import {useEffect} from "react";

export default function MovieItem({item}){
    useEffect(()=>{
        console.log()
    })
    return(
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="MovieItem"/>
            </div>
        </div>
    )
}