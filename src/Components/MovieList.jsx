import MovieCard from "./MovieCard";
import {Link} from "react-router-dom";

const MovieList=({title,movies})=>{
    // console.log(movies);

    return(
        <div className="py-2 md:py-4  px-6 md:px-10">
            <h1 className=" text-xl md:text-3xl font-bold text-white py-4">{title}</h1>
            <div className="flex  shadow-black shadow-xl overflow-x-scroll ">

                {movies?.map((movie) => (
                    <Link key={movie?.id} to={"/browse/"+movie.id}><MovieCard  posterPath={movie?.poster_path}/></Link>
                    ))}
                {/*{movies?.map((movie) => (*/}
                {/*    <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>))}*/}
            </div>
        </div>
    )
}
export default MovieList