import s from "../MovieItem/MovieItem.module.css";

export default function MovieDetails({item}){

    return(
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} alt="MovieItem"/>
            </div>
            <div>
                <h2>{item.title}</h2>
                <div>{item.overview}</div>
            </div>
        </div>
    )
}