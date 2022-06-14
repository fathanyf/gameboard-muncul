import { getDocs, collection, getDoc, serverTimestamp, limit } from 'firebase/firestore'
import { db } from "../../config/firebase";
import { addDoc, doc, query, updateDoc, where, orderBy } from "firebase/firestore";
import { leaderBoard, playerData } from './index';


export const get_leader_board = (id) => {
    return(dispatch) => {
        const q = query(collection(db, 'gamestats'), orderBy("point", "desc"), limit(3))
        getDocs(q)
            .then((Snapshot) => {
                console.log("2a. berhasil dapat data :", Snapshot.docs);
                let gamestats = []
                Snapshot.docs.forEach((doc) =>{
                    gamestats.push({ ...doc.data(), id: doc.id })
                })
                console.log(gamestats);
                dispatch(leaderBoard(gamestats))
            })
            .catch((error) =>{
                console.log(error);
            })
    }
}

export const get_player = () => {
    return(dispatch) => {
        const dbRef = query(collection(db, 'gamestats'), limit(3))
        getDocs(dbRef)
            .then((snapshot) => {
                console.log("2b. berhasil dapat data :", snapshot.docs);
                let gamestats = []
                snapshot.docs.forEach((doc) => {
                    gamestats.push({ ...doc.data(), id: doc.id})
                })
                console.log(gamestats);
                dispatch(playerData(gamestats))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
