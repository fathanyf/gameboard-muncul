import Head from 'next/head'
import React, { useEffect } from 'react'
import { selectUser } from '../../store/user/action'
import { useDispatch, useSelector } from 'react-redux'
import { get_leader_board, get_player} from '../../store/player/action'
import { get_game_board, get_games, add_game  } from '../../store/games/action'
import { get_profile_data, get_total_point } from '../../store/profile/action'
import moment from 'moment'
import { useRouter } from 'next/router'

const Account = () => {
    const user = useSelector(selectUser);
    const router = useRouter()
    let { id } = router.query
    
    // const leaderBoard = useSelector((state) => state.player.leaderBoard)
    // const gamesBoard = useSelector((state) => state.player.gamesBoard)
    // const profileData = useSelector((state) => state.player.profileData)
    const data = useSelector((state) => state.game.gamesBoard)

    console.log('data', data);

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(add_game())
    // }, [dispatch])

    // useEffect(() =>{
    //     dispatch(get_player())
    // }, [dispatch])

    // useEffect(() =>{
    //     dispatch(get_games())
    // }, [dispatch])

    useEffect(() => {
        dispatch(get_game_board())
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(get_leader_board())
    // }, [dispatch])

    // useEffect(() => {
    //     dispatch(get_profile_data(id))
    // }, [dispatch, id])

    // useEffect(() => {
    //     dispatch(get_total_point(id))
    // }, [dispatch], id)

    

    
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
                                {
                    data.map((e, index) => {
                      return (
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
                      )
                    })
                  }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-danger">
                                <div className="card-header text-center">
                                    <h3 className="card-title">Player List</h3>
                                </div>
                                {/* <div className="user-panel  d-flex">
                          <div className="image">
                            {
                              !e.avatar ? (
                                <img src="/blank-avatar.svg" className="img-circle elevation-2" alt="User Image" />
                              ) : (
                                <img src={e.avatar} className="img-circle elevation-2" alt="User Image" />
                              )
                            }
                          </div>
                          <div className="info">
                            <Link href={{ pathname: '/account', query: { id: e.id } }}>
                              <a className="d-block">{e.name}</a>
                            </Link>
                          </div>
                        </div> */}
                            </div>
                            <div className="card card-danger">
                                <div className="card-header">
                                    <h3 className="card-title">Leader Board</h3>
                                </div>
                     {/* <ul className="products-list product-list-in-card pl-2 pr-2" key={index}>
                                                    <li className="item">
                                                        {
                                                            (e.totalpoint === 0) ? (
                                                                <> */}
                                                                    {/* <div className="product-img">
                                                                        <img src='/blank-avatar.svg' alt="Product Image" className="img-size-50" />
                                                                    </div>
                                                                    <div className="product-info">
                                                                        <a href="" className="product-title">{e.name}
                                                                            <span className="badge badge-warning float-right">0</span></a>
                                                                        <span className="product-description">
                                                                            <small><span><b>Update at : </b></span>00:00:00</small>
                                                                        </span>
                                                                    </div> */}
                                                                {/* </> */}

                                                            {/* ) : (
                                                                <>
                                                                    <div className="product-img">
                                                                        <img src={e.avatar} alt="Product Image" className="img-size-50" />
                                                                    </div>
                                                                    <div className="product-info">
                                                                        <a className="product-title">{e.name}
                                                                            <span className="badge badge-warning float-right">{e.totalpoint}</span></a>
                                                                        <span className="product-description">
                                                                            <small><span><b>Update at : </b></span>{moment(e.updatedAt === undefined ? " " : e.updatedAt.toDate()).calendar()}</small>
                                                                        </span>
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                    </li>
                                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Account