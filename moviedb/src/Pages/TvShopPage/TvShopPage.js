import s from './TvShopPage.module.css'
import {useEffect, useState} from "react";
import tvService from "../../Services/tv.service";
import MovieList from "../../Components/MovieList/MovieList";
import Button from "../../Components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getByTerm} from "../../Store/tv/tv.slice";

export default function TvShopPage(){

    const [list,setList]= useState()
    const {tvList} = useSelector(state => state['tvReducer'])
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(getByTerm({term:"popular"}))
    },[])
    //
    // const showItems=(term,e)=>{
    //     const list = tvService.getByTerm(term).then(value => setList(value.results))
    // }

    return(
        <div className={s.container}>
            <div className={s.wrap}>
                {/*<button className={s.btn} onClick={()=>showItems('popular')}>Popular</button>*/}
                {/*<button className={s.btn} onClick={()=>showItems('top_rated')}>Top Rated</button>*/}
                {/*<button className={s.btn} onClick={()=>showItems('on_the_air')}>On the Air</button>*/}
                {/*<button className={s.btn} onClick={()=>showItems('airing_today')}>Aring Today</button>*/}
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