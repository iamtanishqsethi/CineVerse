import {IMG_URL} from "../Utils/constants";

const MovieCard=({posterPath})=>{
    if(!posterPath) return

    return (
        <div >
            <div className=" w-32 md:w-48  pr-4">
                <img
                className="rounded-lg"
                src={IMG_URL+posterPath} alt="poster"/>
            </div>

        </div>
    )
}
export default MovieCard;