import React from 'react'
import IMAGES from '../../images'
import Story from '../Story/Story'
import {useSelector} from "react-redux";
import {selectUsers} from "../../store/slice/users/usersSlice";

function Stories() {
    const {usersData,currentUser} = useSelector(selectUsers)
  return (
    <div className="status-wrapper">
        <Story key={currentUser?.id} img={currentUser?.avatar} name={currentUser?.username} />


        {usersData.filter(el => el.id !== currentUser?.id).map(el => (<Story key={el.id} img={el.avatar} name={el.username} />))

        }
    </div>
  )
}

export default Stories