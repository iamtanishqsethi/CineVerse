import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions=()=>{

    const {movieResults,movieNames}=useSelector(store=>store.gpt)
    if(!movieNames){
        return null//show  nothing or shimmer ui
    }


    return(
        <div className="p-4 m-4 bg-black text-white bg-opacity-85 rounded">
            <div>
                {/*<h1>{movieNames[0]}</h1>*/}
                {movieNames.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}

            </div>


        </div>
    )

}
export default MovieSuggestions