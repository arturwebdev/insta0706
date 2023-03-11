import './MessengerPeoplesMessage.css'
import {useDispatch} from "react-redux";
import {messageTo} from "../../store/slice/message/messageSlice";

function MessengerPeoplesMessage({name,active,img,id}) {
	const dispatch = useDispatch()

	return (
	 <div onClick={() => dispatch(messageTo(id))} style={{cursor:"pointer"}} className='Messenger-left-col-people-message'>
		<div className='Messsage-img'>
			<img src={img} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{name}</p>
			<p>{active === 0? 'Active now' : active + ' Minutes ago'} </p>
		</div>
	 </div>
  )
}

export default MessengerPeoplesMessage
