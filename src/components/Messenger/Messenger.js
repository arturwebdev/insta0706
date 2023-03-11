import './Messenger.css'
import MessengerPeoplesMessages from '../MessengerPeoplesMessages/MessengerPeoplesMessages';
import MessengerChatSection from '../MessengerChatSection/MessengerChatSection';
import {useSelector} from "react-redux";
import {selectMessage} from "../../store/slice/message/messageSlice";


function Messenger() {
	const {messageToUserId} = useSelector(selectMessage)
  return (
	 <div className='Messenger'>
		<div className='Messenger-auto'>
			<div className='Messenger-left-col'>
				<div className='Messenger-left-col-direct'>
					<p>Direct</p>
					<i className="fa-duotone fa-pen-to-square"></i>
				</div>
				<div className='Messenger-left-col-peoples'>
					<div className='Primary-General'>
						<p>Primary</p>
						<p>General</p>
					</div>
					<MessengerPeoplesMessages />
				</div>
			</div>
			{
				messageToUserId && <MessengerChatSection />
			}
		</div>
	 </div>
  )
}

export default Messenger
