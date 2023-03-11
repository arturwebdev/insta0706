import './MessengerChat.css'
import {useSelector} from "react-redux";
import {selectUsers} from "../../store/slice/users/usersSlice";
import {selectMessage} from "../../store/slice/message/messageSlice";
import {all} from "axios";

function MessengerChat() {
    const {currentDialog,messageToUserId,currentUserId} = useSelector(selectMessage)
  return (
	 <div className='MessengerChat'>
          {currentDialog.map(message => (
            <div style={{display:'grid',justifyContent: message.fromId === currentUserId ? 'flex-end' : 'flex-start'}}>
                <p className={(message.fromId === currentUserId && 'current') + ' message_type'}>{message.message}</p>
                <span style={{textAlign: message.fromId === currentUserId ? 'right' : 'left', margin:message.fromId === currentUserId ?'0 15px 0  0':'0 0 0 15px'}}>{message.time}</span>
            </div>
                )) }
	 </div>
  )
}

export default MessengerChat
