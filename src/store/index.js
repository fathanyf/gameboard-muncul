import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/action"
import gameReducer from './games/index'
import pointReducer from './point/action'
import playerReducer from './player/index'

export const store = configureStore({
    reducer: {
        games: gameReducer,
        user: userReducer,
        player: playerReducer,
        pointReducer
    }
})