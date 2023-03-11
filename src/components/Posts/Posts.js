import React, {useEffect, useMemo} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {selectPost} from "../../store/slice/post/postSlice";
import {fetchPost} from "../../store/slice/post/postApi";
import Post from "../Post/Post";
import Loading from "../Loading/Loading";
import {selectSearch , resetSearch} from "../../store/slice/search/searchSlice";


function Posts() {
    // const posts = [
    //     {
    //         id: '1',
    //         img: IMAGES.cover1,
    //         name: 'user1',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //
    //     },
    //     {
    //         id: '2',
    //         img: IMAGES.cover2,
    //         name: 'user2',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     },
    //     {
    //         id: '3',
    //         img: IMAGES.cover3,
    //         name: 'user3',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     },
    //     {
    //         id: '4',
    //         img: IMAGES.cover4,
    //         name: 'user4',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     }
    // ]
  const dispatch = useDispatch();
  const {postData,isLoading} = useSelector(selectPost)
  const search = useSelector(selectSearch)
  useEffect(() => {
    if (!postData.length){
    dispatch(fetchPost())
    }
    return () => {
      dispatch(resetSearch())
    }
  },[])

  const filterPosts = useMemo(() => {
    return [...postData.filter(post => post.name.includes(search))]
  }, [search,postData]);
  return (
    <>
        {
          isLoading ? <Loading /> :
              filterPosts.map(el => <Post key={el.id} id={el.id} img={el.img} comments={el.comments} name={el.name} likesCount={el.likesCount} postsText={el.postsText} timeAgo={el.timeAgo} />)
        }
    </>
  )
}

export default Posts