import './MessengerChatForm.css'
import IMAGES from '../../images'
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {messageSubmit} from "../../store/slice/message/messageSlice";

function MessengerChatForm() {
	const dispatch = useDispatch()
	const formRef = useRef(null)
	const handleSubmit = (e) => {
		e.preventDefault()
		if (formRef.current[0].value) {
			dispatch(messageSubmit(formRef.current[0].value))
			formRef.current.reset();
		}

	}
  return (
	 <form ref={formRef} className='Chat-input' onSubmit={handleSubmit}>
		<input type='text' placeholder='Message...'/>
		<img src={IMAGES.like} alt=''/>
	 </form>
  )
}

export default MessengerChatForm
