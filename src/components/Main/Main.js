import React from 'react'
import {NavLink} from 'react-router-dom'
import IMAGES from '../../images'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
import Suggestions from '../Suggestions/Suggestions'
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUsers} from "../../store/slice/users/usersSlice";
import {logOutMess} from "../../store/slice/message/messageSlice";

function Main() {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(selectUsers)
     const logoutFuc = () => {
         dispatch(logout())
         dispatch(logOutMess())
     }

    return (
        <section className="main">
            <div className="wrapper">
                <div className="left-col">
                    <Stories/>
                    <Posts/>
                </div>
                <div className="right-col">
                <span className="profile-card">
                    <div className="profile-pic">
                        <NavLink to='/profile'>
                           <img src={currentUser?.avatar} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        <p className="username">{currentUser?.username}</p>
                        <p className="sub-text">{currentUser?.name}</p>
                    </div>
                    <button className="action-btn" onClick={logoutFuc}>switch</button>
                </span>
                    <p className="suggestion-text">Suggestions for you</p>
                    <Suggestions/>
                </div>
            </div>
        </section>
    )
}

export default Main