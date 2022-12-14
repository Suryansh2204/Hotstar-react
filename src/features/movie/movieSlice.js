import { createSlice } from "@reduxjs/toolkit";

const initialState={
    recommend:null,
    newDisney:null,
    original:null,
    trending:null,
};

const movieSlice=({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.recommend=action.played.recommend;
            state.newDisney=action.played.newDisney;
            state.original=action.played.original;
            state.trtending=action.played.trtending;
        },
    },
});

export const {setMovies}=movieSlice.actions;
export const selectRecommend=state=>state.movie.recommend;
export const selectNewDisney=state=>state.movie.newDisney;
export const selectOriginal=state=>state.movie.original;
export const selectTrending=state=>state.movie.trending;

export default movieSlice.reducer;