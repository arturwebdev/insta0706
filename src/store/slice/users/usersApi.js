import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function () {
        const {data:postData} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')
        const {data:usersData} = await axios.get('https://jsonplaceholder.typicode.com/users')

        const data = usersData.map(user => ({
            id: user.id.toString(),
            username: user.username.toLowerCase(),
            name: user.name,
            activity: Math.round(Math.random() * 10 ),
            avatar:'https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg',
            email: user.email.toLowerCase(),
            postsCount: postData.filter(post => user.id === post.albumId).length,
            password: user.address.city.toLowerCase(),
            followers:Math.round(Math.random() * 500 + 200),
            following:Math.round(Math.random() * 500 + 200),
            bio: user.company.catchPhrase + " " + user.company.bs,
            userPosts: [
                ...postData.filter(post => user.id === post.albumId).map(item => ({
                    id: item.id.toString() + '_' + user.username.toLowerCase(),
                    postsText: item.title,
                    img: item.url,
                    likesCount: Math.round(Math.random() * 200 + 300),
                    commentsCount: Math.round(Math.random() * 60 + 10),
                    timeAgo:Math.round(Math.random() * 8 + 3) + ' Minutes ago',
                    comments:[]
                    })
                )
            ]
        }))
        return data

    }
)