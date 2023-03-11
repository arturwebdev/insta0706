import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async function () {
        const {data:postData} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const {data:comData} = await  axios.get('https://jsonplaceholder.typicode.com/comments')

        const data = postData.map(post => ({
            id: post.id.toString(),
            name:post.title.split(' ')[0],
            postsText: post.title.split(' ').slice(1).join(' '),
            img: post.url,
            likesCount: Math.round(Math.random() * 200 + 300),
            timeAgo:Math.round(Math.random() * 8 + 3) + ' Minutes ago',
            comments:[
                ...comData.filter(comment => comment.postId === post.id).map(comment => ({
                    id: comment.id.toString(),
                    userName: comment.name.split(' ')[0],
                    body: comment.body
                }))
            ]
        }))
        return data
    }
)