
export const addPost = ({dispatch}) => (next) => (action) => {
    if (action.type === 'addPost') {
        const {name, postsText, img} = action.payload 
        const post = {
            id: new Date().getTime().toString() + '_' + name,
            name, postsText, img,
            likesCount: Math.round(Math.random() * 200 + 300),
            timeAgo: Math.round(Math.random() * 8 + 3) + ' Minutes ago',
            comments: []
        }
        

        dispatch({type: 'post/addPost', payload: post})
        dispatch({type: 'users/addPost', payload: post})

        return
    }
    next(action)
}

export const deletePost = ({ dispatch }) => (next) => (action) => {
    if (action.type === 'deletePost') {
        dispatch({type: 'post/deletePost', payload: action.payload})
        dispatch({type: 'users/deletePost', payload: action.payload})
        return 
    }
    next(action)
}