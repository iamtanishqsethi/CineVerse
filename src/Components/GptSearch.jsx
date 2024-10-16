import SearchBar from "./SearchBar";
import MovieSuggestions from "./MovieSuggestions";
import {BG_URL} from "../Utils/constants";

const GptSearch=()=>{
    // console.log(process.env.REACT_APP_KEY)
    return (
        <>
            <div className={"fixed bg-black -z-10"}>
                <img
                    src={BG_URL}
                    alt="bg"
                    className={"opacity-60 h-screen object-cover md:h-full"}
                />
            </div>
            <div className="">

                <SearchBar/>
                <MovieSuggestions/>
            </div>
        </>

    )
}
export default GptSearch