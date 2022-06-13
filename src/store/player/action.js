export const get_leader_board = () => {
    return(dispatch) => {
        const q = query(collection(db, "gamepoint"), orderBy("totalpoint", "desc"))
        getDocs(q)
            .then((Snapshot) => {
                let result = []
                Snapshot.docs.forEach((doc) =>{
                    result.push({ ...doc.data(), id: doc.id })
                })
                console.log("leader result");
                dispatch(boardData(result))
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
        leaderBoard(state,action){
            state.leaderBoard = action.payload
            state.addLoadingGameStats = false
        },
    },
})

export const { gamesData } = gameSlice.actions
export default gameSlice.reducer