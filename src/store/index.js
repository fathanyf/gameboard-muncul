import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/action"
import gameReducer from './games/'
import pointReducer from './point/action'
import playerReducer from './player'

export const store = configureStore({
    reducer: {
        game: gameReducer,
        user: userReducer,
        player: playerReducer,
        pointReducer
    }
})