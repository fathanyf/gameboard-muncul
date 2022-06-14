import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { get_game_board } from "../../store/games/action";
import moment from "moment";
import { selectUser } from "../../store/user/action";
// import { getUser } from "../../store/user/action";

const GameBoard = () => {

    const user = useSelector(selectUser)

    const gameBoard= useSelector((state) => state.game.GameBoard)
    const loadingGamesStats = useSelector((state) => state.game.loadingGamesStats)
    const errorGamesStats = useSelector((state) => state.game.errorGamesStats)
    const dispatch = useDispatch()
    // const auth = useSelector((state) => state.user)



    console.log("user", user);

    useEffect(() => {
        dispatch(get_game_board())
    }, [dispatch])

    return (
        <div className="card">
        <div className="card-body">
        
                {
                    gameBoard ? (
                    gameBoard.map((e, index) => {
                        <div className="direct-chat-msg" key={index}>
                        <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-left">{e.name}</span>
                            <span className="direct-chat-timestamp float-right">{moment(e.createdAt.toDate()).fromNow()}</span>
                        </div>
                        {
                            (!e.avatar) ? (
                                <img className="direct-chat-img" src='/blank-avatar.svg' alt="message user image" />
                            ) :
                                <img className="direct-chat-img" src={e.avatar} alt="message user image" />
                        }
                        <div className="direct-chat-text">
                            <p className='text-center'><i className="fas fa-gamepad"></i>: <span className="badge badge-secondary"> {e.playCount}</span><i className="fas fa-thumbs-up ml-4"></i> : <span className="badge badge-success">{e.userWin}</span>  <i className="fas fa-handshake ml-4"></i> : <span className="badge badge-info">{e.userDraw}</span>  <i className="fas fa-thumbs-down ml-4"></i> : <span className="badge badge-danger">{e.userLoss}</span>  <i className="fas fa-award ml-4"></i> : <span className="badge badge-primary">{e.point}</span></p>
                        </div>
                        <hr />
                    </div>
                    })
                ) : loadingGamesStats ? (
                    <div className="text-center">
                        <p className='text-light'>loading...</p>
                    </div>
                ) : (
                    <p>{errorGamesStats? errorGamesStats : "data empty"}</p>
                )
                }
        </div>
    </div>

    )

}

export default GameBoard