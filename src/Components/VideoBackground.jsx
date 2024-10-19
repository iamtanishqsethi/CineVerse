import {API_OPTIONS} from "../Utils/constants"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTrailerVideo} from "../Utils/movieSlice";
import useMovieVideo from "../Hooks/useMovieVideo";
const VideoBackground = ({movieId}) => {
    // const [trailerId, setTrailerId] = useState(null);//can do this but we can also do this with redux store
    useMovieVideo(movieId)
    const trailerVideo=useSelector(store=>store?.movies?.trailerVideo);

    return (

        <div className="-my-4">
            <iframe
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&controls=0&playlist="+trailerVideo?.key}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
                    referrerPolicy="strict-origin-when-cross-origin" >

            </iframe>
        </div>
    )
}
export default VideoBackground