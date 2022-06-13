import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from "../../config/firebase";
import { addDoc, doc, query, updateDoc, where, orderBy } from "firebase/firestore";
import { gamesData, gamesBoard } from "./index";

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
                console.log(result);
                dispatch(gamesBoard(result))
            })
            .catch((error) =>{
                console.log(error);
            })
    }
}

export const add_game = (data) => {
    return(dispatch => {
        const gameRef = collection(db, 'gamestats')
        getDocs(gameRef)
            .then(() => {
                let newGameStat = {
                    playerId: data.playerId,
                    point: data.point,
                    playCount: data.playCounter,
                    userWin: data.userWin,
                    userLoss: data.userLoss,
                    userDraw: data.userDraw,
                    name:data.name,
                    avatar:data.avatar,
                    createdAt: serverTimestamp()
                }
                console.log(newGameStat);
                addDoc(gameRef, newGameStat);
                dispatch(addGameData(newGameStat))
            })
            .catch((error) =>{
                console.log(error);
            })
    })
}
