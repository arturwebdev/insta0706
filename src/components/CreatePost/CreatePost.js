import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { selectUsers } from '../../store/slice/users/usersSlice';
import './CreatePost.css'
const CreatePost = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {currentUser} = useSelector(selectUsers)
    const formRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const [{ value: img }, { value: postsText }] = formRef.current
        console.log(img, postsText);
        dispatch({type: 'addPost', payload: {img, postsText, name: currentUser.username}})
        formRef.current.reset()
        navigate('/')
    }

    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form style={{marginTop: '50px'}} ref={formRef} onSubmit={handleSubmit}>
                <input type="text" placeholder='img' /><br/><br/>
                <input type="text" placeholder='description' /><br/><br/>
                <label class="input-file">
                    <input type="submit" style={{display: 'none'}} name="file"/>		
                    <span>Выберите файл</span>
                </label>
            </form>
        </div>
    );
}

export default CreatePost;
