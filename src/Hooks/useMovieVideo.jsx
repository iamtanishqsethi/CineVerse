import {API_OPTIONS} from "../Utils/constants";
import {addTrailerVideo} from "../Utils/movieSlice";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
//TODO: not working with the hook now need to fix it
//getting undefined length property type error

const useMovieVideo = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo=useSelector((store)=>store?.movies?.trailerVideo);
    const getMovieVideos=async ()=>{
        const data= await fetch(
            "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
            API_OPTIONS);
        const json=await data.json();
        // console.log(json?.results);


        const filteredData=json?.results?.filter((video)=>video.type==="Trailer")
        const trailer=filteredData.length ?
            filteredData[0]:json.results[0];//if not trailer just take the first video available

        dispatch(addTrailerVideo(trailer))


    }
    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, []);
}
export default useMovieVideo