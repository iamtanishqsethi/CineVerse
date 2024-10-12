import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../Utils/constants";
import {addNowPlayingMovie} from "../Utils/movieSlice";
import {useEffect} from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowplayingMovies= async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovie(json.results));
    }
    useEffect(() => {
        getNowplayingMovies()
    }, []);
}
export default useNowPlayingMovies