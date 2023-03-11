import React, {useRef} from 'react'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import PostComment from "../PostComment/PostComment";
import {useDispatch, useSelector} from "react-redux";
import {addComment} from "../../store/slice/post/postSlice";
import {selectUsers} from "../../store/slice/users/usersSlice";

function Post({id, comments, img, name, likesCount, postsText, timeAgo}) {
  const formRef = useRef(null)
    const {currentUser} = useSelector(selectUsers)
    const dispatch = useDispatch();
    const  handleSubmit = (e) => {
      e.preventDefault()

        const  [{value:body}] = formRef.current
        if (body.length) {
        dispatch(addComment({
            id,body,
            userName: currentUser?.username
        }))
        formRef.current.reset()
    }
    }

    return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                    <div className="profile-pic"><img src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            {!!postsText.trim().length && <p className="description"><span>{name} </span> {postsText}</p>}
            <p className="post-time">{timeAgo}</p>
            <PostComment {...{comments}}/>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="comment-wrapper">
            <img src={IMAGES.smile} className="icon" alt=""/>
            <input type="text" className="comment-box" placeholder="Add a comment"/>
            <button className="comment-btn">post</button>
        </form>
    </div>
  )
}

export default Post