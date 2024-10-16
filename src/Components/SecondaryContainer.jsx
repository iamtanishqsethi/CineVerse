import MovieList from "./MovieList";
import {useSelector} from "react-redux";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";

const SecondaryContainer=()=>{
    const movies=useSelector(store=>store.movies)
    return(
        <div className=" bg-black">
            {/*
            movie list - popular
                - movie cards (horizontal)
            movie list - now playing
            movie list - trending
            movie list - ???
            */}
            <div className=" mt-0 md:-mt-60 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
                <MovieList title={"Popular"} movies={movies.popularMovies}/>
                <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
            </div>

        </div>
    )
}
export default SecondaryContainer;