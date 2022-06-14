import { getDocs, collection, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from "../../config/firebase";
import { addDoc, doc, query, updateDoc, where, orderBy } from "firebase/firestore";
import { gamesBoard } from "./index";

export const get_game_board = () => {
    return(dispatch) => {
        const q = query(collection(db, 'gamepoint'), orderBy("point", "desc"))
        getDocs(q)
            .then((Snapshot) => {
                console.log("2. berhasil dapat data :", Snapshot.docs);
                let gamepoint = []
                Snapshot.docs.forEach((doc) =>{
                    gamepoint.push({ ...doc.data(), id: doc.id })
                })
                console.log(gamepoint);
                dispatch(gamesBoard(gamepoint))
            })
            .catch((error) =>{
                console.log(error);
            })
    }
}

