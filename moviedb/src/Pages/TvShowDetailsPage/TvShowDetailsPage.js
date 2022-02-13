
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getById} from "../../Store/tv/tv.slice";
import {useParams} from "react-router-dom";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";

export default function TvShowDetailsPage(){
    const {id} = useParams()
    const {tvItem} = useSelector(state => state['tvReducer'])

    const dispatch = useDispatch()



    useEffect(()=>{
        dispatch(getById({id}))
    },[id])
    return(
        <div>
            {tvItem ? <MovieDetails item={tvItem}/>: null}
        </div>
    )
}

