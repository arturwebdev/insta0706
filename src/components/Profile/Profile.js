import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css'
import {selectUsers} from "../../store/slice/users/usersSlice";
import Loading from "../Loading/Loading";
const Profile = () => {
    const dispatch = useDispatch()
    const {currentUser, isLoad} = useSelector(selectUsers)

    return (
        <>
        <header>
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={currentUser?.avatar} alt=""/>
                    </div>
                    <div className="profile-user-settings">
                        <div className='name_username'>
                        <h1 className="profile-user-name">{currentUser?.username}</h1>
                        <h2 className="">{currentUser?.name}</h2>
                        </div>
                        <button className="btn profile-edit-btn">Edit Profile</button>
                        <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
    
                    </div>
                    <div className="profile-stats">
                        <ul>
                            <li><span className="profile-stat-count">{currentUser?.userPosts.length}</span> posts</li>
                            <li><span className="profile-stat-count">{currentUser?.followers}</span> followers</li>
                            <li><span className="profile-stat-count">{currentUser?.following}</span> following</li>
                        </ul>
                    </div>
                    <div className="profile-bio">

                        <p>{currentUser?.bio}</p>
                    </div>
                </div>
            </div>
        </header>
    
        <div className="container">
            <div className="gallery">
        { isLoad ? <Loading/> :
            currentUser?.userPosts.map(el => (
                <div key={el.id} className="gallery-item">
                    <img src={el.img} className="gallery-image" alt=""/>
                    <div className="gallery-item-info">
                        <ul>
                            <span onClick={() => dispatch({type: 'deletePost', payload: el.id})} className='del'>X</span>
                            <li className="gallery-item-likes"><span >Likes</span> {el.likesCount}</li>
                            <li className="gallery-item-comments"><span >Comments</span> {el.commentsCount}</li>
                        </ul>
                    </div>
                </div>
            ))
        }
        </div>
        </div>
    
        </>
    );
}

export default Profile;
