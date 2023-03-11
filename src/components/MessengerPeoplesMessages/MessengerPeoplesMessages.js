import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../store/slice/users/usersSlice";
import {useEffect} from "react";
import {currUserId} from "../../store/slice/message/messageSlice";

function MessengerPeoplesMessages() {
	const dispatch = useDispatch()
	const {currentUser,usersData} = useSelector(selectUsers)
	useEffect(() => {
		dispatch(currUserId(currentUser.id))
		},[currentUser])
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			usersData.filter(el => el.id !== currentUser.id).map(el => <MessengerPeoplesMessage key={el.id} id={el.id} img={el.avatar} name={el.username} active={el.activity}/>)
		}
	 </div>
  )
}

export default MessengerPeoplesMessages
