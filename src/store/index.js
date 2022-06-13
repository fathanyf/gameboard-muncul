import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/action"
import gameReducer from './games/action'
import pointReducer from './point/action'

export const store = configureStore({
    reducer: {
        game: gameReducer,
        user: userReducer,
        pointReducer
    }
})