import {BG_URL} from "../Utils/constants"
import lang from "../Utils/languageConstants";
import {useSelector} from "react-redux";
const SearchBar=()=>{

    const langValue=useSelector(store=>store.config.lang)
    // console.log(langValue)




    return(
        <div className="pt-[10%] flex items-center justify-center">
            <div className={"absolute bg-black -z-10"}>
                <img
                    src={BG_URL}
                    alt="bg"
                    className={"opacity-60"}
                />
            </div>
            <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
                <input className="p-4 m-4 col-span-10"
                       type="text" placeholder={lang[langValue].searchPlaceholder}/>
                <button className="col-span-2 py-2  px-4 m-4 bg-red-600 text-white rounded-lg">{lang[langValue].search}</button>
            </form>
        </div>
    )
}
export default SearchBar