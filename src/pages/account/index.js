import Head from 'next/head'
import GameBoard from '../../components/game-components/GameBoard'
import PlayerList from '../../components/player-components/PlayerList'
import React, { useEffect } from 'react'
import { selectUser } from '../../store/user/action'
import { useDispatch, useSelector } from 'react-redux'
import { get_leader_board, get_player} from '../../store/player/action'
import { get_game_board } from '../../store/games/action'
import { useRouter } from 'next/router'
import LeaderBoard from '../../components/player-components/LeaderBoard'

const Account = () => {
    const user = useSelector(selectUser);
    const router = useRouter()
    let { id } = router.query
    
    const leaderBoard = useSelector((state) => state.player.leaderBoard)
    const gamesBoard = useSelector((state) => state.player.gamesBoard)
    const profileData = useSelector((state) => state.player.profileData)
    const data = useSelector((state) => state.game.gamesBoard)

    console.log('data', data);

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(get_player())
    }, [dispatch])

    useEffect(() => {
        console.log();
        dispatch(get_game_board())
    }, [dispatch])

    useEffect(() => {
        dispatch(get_leader_board())
    }, [dispatch])

    return (
        <>
            <Head>
                <title>Chapter 10 | Account </title>
            </Head>
            <section className='dark-mode'>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-3">
                            <div className="card card-danger card-outline">
                                <div className="card-body box-profile">
                                    <h3 className="profile-username text-center">joko</h3>

                                    <ul className="list-group list-group-unbordered mb-3">
                                        <li className="list-group-item">
                                            <b>Address</b> <a className="float-right">jl kenangan</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Phone</b> <a className="float-right">0899</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card card-widget widget-user-2 shadow-sm">
                                <div className="widget-user bg-danger">
                                    <h5 className="p-2 text-center">Game History</h5>
                                </div>
                                <div className="card-footer p-0">
                                    <ul className="nav flex-column">

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header p-2 bg-danger">
                                    <h2 className='text-center text-light'>Game Board</h2>
                                </div>
                                <div className="card-body">
                                <GameBoard />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-danger">
                                <div className="card-header text-center">
                                    <h3 className="card-title">Player List</h3>
                            </div>
                            < PlayerList />   
                            </div>
                            <div className="card card-danger">
                                <div className="card-header">
                                    <h3 className="card-title">Leader Board</h3>
                                </div>
                            <LeaderBoard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Account