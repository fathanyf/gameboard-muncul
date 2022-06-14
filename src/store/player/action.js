import { getDocs, collection, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from "../../config/firebase";
import { addDoc, doc, query, updateDoc, where, orderBy } from "firebase/firestore";
import { leaderBoard, playerData } from './index';


export const get_leader_board = (id) => {
    return(dispatch) => {
        const q = query(collection(db, 'gamepoint'), orderBy("point", "desc"))
        getDocs(q)
            .then((Snapshot) => {
                console.log("2a. berhasil dapat data :", Snapshot.docs);
                let gamepoint = []
                Snapshot.docs.forEach((doc) =>{
                    gamepoint.push({ ...doc.data(), id: doc.id })
                })
                console.log(gamepoint);
                dispatch(leaderBoard(gamepoint))
            })
            .catch((error) =>{
                console.log(error);
            })
    }
}

export const get_player = () => {
    return(dispatch) => {
        const dbRef = collection(db, 'users')
        getDocs(dbRef)
            .then((snapshot) => {
                console.log("2b. berhasil dapat data :", snapshot.docs);
                let users = []
                snapshot.docs.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id})
                })
                console.log(users);
                dispatch(playerData(users))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
