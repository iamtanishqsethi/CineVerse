import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";


const Browse=()=>{
    //fetch data from api and update data
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    return(
        <div >
            <Header/>
            {/*
            main video container
            -  video background
             - video title
             Secondary container
             - movie lists * n
                   - cards * n
              */}
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )

}
export default Browse