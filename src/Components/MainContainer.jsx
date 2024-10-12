import {useSelector} from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer=()=>{
    const movies=useSelector(store => store?.movies?.nowPlayingMovies)
    if(movies===null) return;//this is know as early return to avoid null error when fetching
    const mainMovie=movies[0]
    //showing the trailer and title of first movie from list of movies
    const {original_title,overview,id}=mainMovie;
    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground moveId={id}/>
        </div>
    )
}
export default MainContainer;