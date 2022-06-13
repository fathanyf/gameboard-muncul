import { getDocs, collection, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from "../../config/firebase";
import { addDoc, doc, query, updateDoc, where, orderBy } from "firebase/firestore";
import { leaderBoard } from './index';


export const get_leader_board = (id) => {
    return(dispatch) => {
        const q = query(collection(db, "gamepoint"), orderBy("totalpoint", "desc"))
        getDocs(q)
            .then((Snapshot) => {
                let result = []
                Snapshot.docs.forEach((doc) =>{
                    result.push({ ...doc.data(), id: doc.id })
                })
                console.log("leader result");
                dispatch(leaderBoard(result))
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
                let result = []
                snapshot.docs.forEach((doc) => {
                    result.push({ ...doc.data(), id: doc.id})
                })
                dispatch(playerData(result))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
