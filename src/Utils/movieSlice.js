import {createSlice} from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        trailerVideo:null,
        movieDetails:null,
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addMovieDetails:(state,action)=>{
            state.movieDetails=action.payload
        }

    }
})
export const {addNowPlayingMovie,addPopularMovies,addTrailerVideo,addTopRatedMovies,addUpcomingMovies,addMovieDetails} = movieSlice.actions;
export default movieSlice.reducer