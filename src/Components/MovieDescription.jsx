import {useNavigate, useParams} from "react-router-dom";
import useMovieDetails from "../Hooks/useMovieDetails";
import {useSelector} from "react-redux";
import {BG_URL, IMG_URL, LOGO} from "../Utils/constants";

const MovieDescription = () => {
    const {movieId} = useParams();
    // console.log(movieId)
    useMovieDetails(movieId)
    const details=useSelector((store)=>store?.movies?.movieDetails)
    // console.log(details)
    const navigate=useNavigate()

    return (
        <div>
            <div
                className={"  absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row  md:justify-between  "}>
                <img
                    src={LOGO}
                    alt="logo"
                    className={"w-44  mx-auto md:mx-0"}
                />
                <button className="bg-gray-600 py-2 m-2 px-6 rounded font-medium text-white bg-opacity-45"
                        onClick={() => navigate("/browse")}>Browse
                </button>
            </div>
            <div className={"fixed bg-black"}>
                <img
                    src={BG_URL}
                    alt="bg"
                    className={"opacity-60 h-screen object-cover md:h-full"}
                />
            </div>
            <div
                className="w-11/12 md:w-11/12 absolute p-12 bg-black bg-opacity-80 mx-auto my-32 right-0 left-0 text-white">
                <div
                    className="flex flex-col md:flex-row items-center">
                    <div className="px-4">
                        <h1 className="text-5xl my-4 font-bold">{details?.original_title}</h1>
                        <h2 className="text-gray-400 font-bold text-xl">{details?.tagline}</h2>
                        <div className="py-4 px-2 my-4">
                            <h2 className="font-medium text-xl my-2"> Release Date : {details?.release_date}</h2>
                            <h2 className="font-bold text-xl">OverView</h2>
                            <p className="text-gray-300  text-lg my-2">{details?.overview}</p>
                            <span className="font-medium text-xl my-2 ">Rating <span
                                className="mx-1 py-1 px-1.5 bg-yellow-600 font-bold rounded-lg">{(details?.vote_average)}</span></span>
                        </div>
                    </div>
                    <div className="items-center px-10">
                        <img
                            className="rounded-lg w-60"
                            src={IMG_URL + details?.poster_path} alt="poster"/>
                    </div>

                </div>
            </div>

        </div>

    )
}
export default MovieDescription;