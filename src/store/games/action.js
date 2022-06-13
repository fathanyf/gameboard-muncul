import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection, getDoc } from 'firebase/firestore'
import { db } from "../../config/firebase";
import { addDoc, doc, query, updateDoc, where } from "firebase/firestore";

export const get_games = () => {
    return (dispatch) => {
        const dbRef = collection(db, 'games')
        getDocs(dbRef)
            .then((snapshot) => {
                let games = []
                snapshot.docs.forEach((doc) => {
                    games.push({ ...doc.data(), id: doc.id })
                })
                dispatch(gamesData(games))
            })
            .catch((err) => {
                console.log(err);
            })


    }
}

export const get_game_board = () => {
    return(dispatch) => {
        const q = query(collection(db, "gamepoint"), orderBy("totalpoint", "desc"))
        getDocs(q)
            .then((Snapshot) => {
                let result = []
                Snapshot.docs.forEach((doc) =>{
                    result.push({ ...doc.data(), id: doc.id })
                })
                console.log("game board");
                dispatch(gamesBoard(result))
            })
            .catch((error) =>{
                console.log(error);
            })
    }
}

export const gameSlice = createSlice({
    name: 'games',
    initialState: {
        games: [],
    },
    reducers: {
        gamesData(state, action) {
            state.games = action.payload
            state.loadingGames = false
        },
        gamesBoard(state,action){
            state.gamesBoard = action.payload
            state.addLoadingGameStats = false
        },
    },
})

export const { gamesData } = gameSlice.actions
export default gameSlice.reducer