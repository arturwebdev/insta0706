import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'
import {useSelector} from "react-redux";
import {selectMessage} from "../../store/slice/message/messageSlice";
import {selectUsers} from "../../store/slice/users/usersSlice";

function MessengerChatSection() {
	const {messageToUserId} = useSelector(selectMessage)
	const {usersData} = useSelector(selectUsers)

	return (
	 <div className='Messenger-right-col'>
		<div className='UserSction'>
			<p>{ usersData.find(user => user.id === messageToUserId).username}</p>
			<p>i</p>
		</div>
		<div className='Chat'>
			<MessengerChat />
		</div>
		<MessengerChatForm />
	 </div>
  )
}

export default MessengerChatSection
