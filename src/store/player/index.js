


import { createSlice } from "@reduxjs/toolkit"

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        leaderBoard: [],
        playerData:[],
        loadingleaderBoard:true,
        loadingPlayerData:true,
    },
    reducers: {
        leaderBoard(state, action) {
            state.leaderBoard = action.payload
            state.loadingleaderBoard = false
        },
        playerData(state,action){
            state.playerData = action.payload
            state.loadingPlayerData = false
        },
    },
})

export const { leaderBoard, playerData } = playerSlice.actions
export default playerSlice.reducer