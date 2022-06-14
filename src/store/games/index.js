import { createSlice } from "@reduxjs/toolkit"

export const gameSlice = createSlice({
    name: 'games',
    initialState: {
        games: [],
        gamesBoard:[],
        loadingGames:true,
        loadingGamesStats:true,
        errorGamesStats:true
    },
    reducers: {
        gamesData(state, action) {
            state.games = action.payload
            state.loadingGames = false
        },
        gamesBoard(state,action){
            state.gamesBoard = action.payload
            state.loadingGamesStats = false
            state.errorGamesStats = false
        },
        
    },
})

export const { gamesData, gamesBoard, addGameData } = gameSlice.actions
export default gameSlice.reducer