import {API_OPTIONS, BG_URL} from "../Utils/constants"
import lang from "../Utils/languageConstants";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import model from "../Utils/gemini";
import {addGptMovieResults} from "../Utils/gptSlice";


const SearchBar=()=>{
    const dispatch = useDispatch();
    const langValue=useSelector((store)=>store.config.lang)
    // console.log(langValue)

    const fetchMovieResults=async (movieName)=>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=true&page=1', API_OPTIONS)
        const json = await data.json();
        return json.results;
    }

    const searchText=useRef(null)
    const handleGPTSearchClick= async ()=>{
        // console.log(searchText.current.value)
        //make api call to chatGPT and get movie results


        const gptQuery="Act as Movie Recommendation system and suggest some movies for the query "+ searchText.current.value +" only give the names of 5 movies , comma seperated like the example result given ahead  " +
            "example: avengers,sholay,iron man,thor,interstellar"
        // const gptResult = await client.chat.completions.create({
        //     messages: [{ role: 'user', content: searchText.current.value }],
        //     model: 'gpt-3.5-turbo',
        // });
        // console.log(gptResult.choices)
        const result=await model.generateContent(gptQuery)
        if(!result.response.text()){
            console.log("error")
            //build error page or something
        }
        // console.log(result.response.text())
        const resultMovies=result.response.text().split(", ")
        // console.log(resultMovies)
        const promiseArr=resultMovies.map((movie)=>fetchMovieResults(movie))


        const tmdbResults= await Promise.all(promiseArr)
        //promise.all will wait till all the promises in the promise array
        // console.log(tmdbResults)

        dispatch(addGptMovieResults({movieNames:resultMovies,movieResults:tmdbResults}))

    }



    return(
        <div className=" pt-[45%] md:pt-[10%] flex items-center justify-center">

            <form className=" w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e)=>e.preventDefault()}>
                <input
                    ref={searchText}
                    className="p-4 m-4 col-span-9"
                       type="text" placeholder={lang[langValue]?.searchPlaceholder}/>
                <button className="col-span-3 py-2 px-4 m-4 bg-blue-500 text-white rounded-lg"
                onClick={handleGPTSearchClick}
                >{lang[langValue]?.search}</button>
            </form>
        </div>
    )
}
export default SearchBar