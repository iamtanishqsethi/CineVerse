import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{
    // console.log(movies);

    return(
        <div className="py-2 md:py-4  px-6 md:px-10">
            <h1 className=" text-xl md:text-3xl font-bold text-white py-4">{title}</h1>
            <div className="flex overflow-hidden  shadow-black shadow-xl hover:overflow-x-scroll ">
                {movies?.map((movie) => (
                    <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>))}
            </div>
        </div>
    )
}
export default MovieList