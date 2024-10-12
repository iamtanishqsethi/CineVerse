import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse=()=>{
    //fetch data from api and update data
    useNowPlayingMovies()

    return(
        <div >
            <Header/>
            {/*
            main video container
            -  video background
             - video title
             Secondary container
             - movie lists * n
                   - cards * n
              */}
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )

}
export default Browse