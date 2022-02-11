import {urls} from "../Config/urls";
import axiosService from "./axios.service";
import {API_KEY} from "./API_KEY";




const moviesService={
    getAllPopular:()=>axiosService.get(`${urls.movie}/popular?api_key=${API_KEY}&language=en-US&page=1`).then(value => value.data),
    getUpcoming:()=>axiosService.get(`${urls.movie}/upcoming?api_key=${API_KEY}&language=en-US&page=1`).then(value => value.data)
}

export default moviesService