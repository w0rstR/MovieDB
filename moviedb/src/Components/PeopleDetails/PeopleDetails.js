import s from "./PeopleDetails.module.css"
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import peopleService from "../../Services/people.service";
import {getById} from "../../Store/people/people.slice";
import PeopleDetailsItem from "../PeopleDetailsItem/PeopleDetailsItem";

export default function PeopleDetails() {
    const {item} = useSelector(state => state['peopleReducer'])
    const {id} = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getById(id))
    }, [id])

    return (
        <div>

        </div>
    )
}