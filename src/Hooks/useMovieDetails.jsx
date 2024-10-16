import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../Utils/constants";
import {addMovieDetails} from "../Utils/movieSlice";
import {useEffect} from "react";

const useMovieDetails=(movieId)=>{
    const dispatch = useDispatch();
    const getMovieDetails=async (movieId)=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS)
        const json = await data.json()
        // console.log(json)
        dispatch(addMovieDetails(json))
    }
    useEffect(() => {
        getMovieDetails(movieId)
    }, []);
}
export default useMovieDetails;