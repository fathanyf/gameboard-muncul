import { getDocs, collection, getDoc, serverTimestamp, limit } from 'firebase/firestore'
import { db } from "../../config/firebase";
import { addDoc, doc, query, updateDoc, where, orderBy } from "firebase/firestore";
import { gamesData, gamesBoard } from "./index";

export const get_game_board = () => {
    return(dispatch) => {
        const q  = query(collection(db, 'gamestats'), orderBy("createdAt", "desc"), limit(5))
        getDocs(q)
        // const updateTimestamp = await updateDoc(docRef, {
        //     timestamp: serverTimestamp()
        // });
            .then((Snapshot) => {
                console.log("2. berhasil dapat data :", Snapshot.docs);
                let gamestats = []
                Snapshot.docs.forEach((doc) =>{
                    gamestats.push({ ...doc.data(), id: doc.id })
                })
                console.log(gamestats);
                dispatch(gamesBoard(gamestats))
            })
            .catch((error) =>{
                console.log(error);
            })
    }
}

// export const get_user = () => {
//     return (dispatch) => {
//         const dbRef = collection(db, 'games')
//         getDocs(dbRef)
//             .then((snapshot) => {
//                 let games = []
//                 snapshot.docs.forEach((doc) => {
//                     games.push({ ...doc.data(), id: doc.id })
//                 })
//                 console.log(games);
//                 dispatch(userData(games))
//             })
//             .catch((error) => {
//                 console.log(error);
//             })


//     }
// }

