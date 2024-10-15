import SearchBar from "./SearchBar";
import MovieSuggestions from "./MovieSuggestions";
import {BG_URL} from "../Utils/constants";

const GptSearch=()=>{
    console.log(process.env.REACT_APP_KEY)
    return (
        <div>
            <div className={"fixed bg-black -z-10"}>
                <img
                    src={BG_URL}
                    alt="bg"
                    className={"opacity-60"}
                />
            </div>
            <SearchBar/>
            <MovieSuggestions/>
        </div>
    )
}
export default GptSearch