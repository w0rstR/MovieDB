import s from './TvShopPage.module.css'
import {useEffect, useState} from "react";
import tvService from "../../Services/tv.service";
import MovieList from "../../Components/MovieList/MovieList";
import Button from "../../Components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getByTerm} from "../../Store/tv/tv.slice";
import {Pagination} from "antd";

export default function TvShopPage(){
    const {tvList,term} = useSelector(state => state['tvReducer'])
    const [pageId, setPageId] = useState(1)
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(getByTerm({term:"popular"}))
    },[])

    const onChange=(page)=>{

    }

    return(
        <div className={s.container}>
            <div className={s.wrap}>
                <Button title={`Popular`} term={"popular"}/>
                <Button title={`Top Rated`} term={"top_rated"}/>
                <Button title={`On the Air`} term={"on_the_air"}/>
                <Button title={`Aring Today`} term={"airing_today"}/>
            </div>
            <div>
                {tvList.results ? <MovieList moviList={tvList.results}/>: null}
            </div>
        </div>
    )
}