import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import {useSelector} from "react-redux";


const Browse=()=>{
    //fetch data from api and update data
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    const showGPTSearch=useSelector(store=>store.gpt.showGPT)

    return(
        <div className="overflow-x-hidden">
            <Header/>
            {/*
            main video container
            -  video background
             - video title
             Secondary container
             - movie lists * n
                   - cards * n
              */}
            {showGPTSearch ? <GptSearch/>:<>
                <MainContainer/>
                <SecondaryContainer/>
            </>

            }
            {/*need to pass  the two components inside a tag as unlike html jsx can only return 1 component /1 element */}
        </div>
    )

}
export default Browse