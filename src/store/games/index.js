import { createSlice } from "@reduxjs/toolkit"

export const gameSlice = createSlice({
    name: 'games',
    initialState: {
        gamesBoard:[],
        loadingGames:true,
        loadingGamesStats:true,
        errorGamesStats:true
    },
    reducers: {
        gamesBoard(state,action){
            state.gamesBoard = action.payload
            state.loadingGamesStats = false
            state.errorGamesStats = false
        },
        
    },
})

export const { gamesBoard } = gameSlice.actions
export default gameSlice.reducer