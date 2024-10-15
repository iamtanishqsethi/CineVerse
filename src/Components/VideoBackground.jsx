import {API_OPTIONS} from "../Utils/constants"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTrailerVideo} from "../Utils/movieSlice";
const VideoBackground = ({movieId}) => {
    // const [trailerId, setTrailerId] = useState(null);//can do this but we can also do this with redux store
    const trailerVideo=useSelector(store=>store?.movies?.trailerVideo);
    // console.log(movieId)
    const dispatch = useDispatch();


    //fetch trailer here NAnd updating store with trailer video
    const getMovieVideos=async ()=>{
        const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json=await data.json();
        // console.log(json?.results);

        const trailers=json?.results?.filter(video=>video.type==="Trailer")
        const trailer=trailers?.length ? trailers[0]:json?.results[0];//if not trailer just take the first video available
        // // setTrailerId(trailer.key);
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer))



    }
    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, []);

    return (

        <div >
            <iframe
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&controls=0"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
                    referrerPolicy="strict-origin-when-cross-origin" >

            </iframe>
        </div>
    )
}
export default VideoBackground