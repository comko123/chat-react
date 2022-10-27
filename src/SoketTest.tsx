import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SockJS from 'sockjs-client'

const sock = new SockJS('https://chat-springmvc.herokuapp.com/chat')

const SoketTest = () => {
    const navigate =  useNavigate()
    const msg = useRef<HTMLInputElement>(null)
const [chat,setChat] = useState<(string|undefined)[]>([])
    const sendMessage = () =>{
        if(!msg.current?.value)return;
        sock.send(msg.current?.value)
        setChat(state=>[...state,msg.current?.value])
        return msg.current?.value === null
    }
    const onMessage = (msg:any) => {
        const data = msg.data
        console.log(msg)
        let sessionId = null 
        let message = null
        const arr = data.split(":")
        for(let i=0; i<arr.length; i++){
        console.log('arr[' + i + ']: ' + arr[i])}
        const cur_session = '${user}' 
        console.log("cur_session : " + cur_session)
        sessionId = arr[0]
        message = arr[1]
        
        if(sessionId === cur_session){
        return <p>{sessionId+":"+message}</p>}
        else{return <p>{sessionId+":"+message}</p>}}
    
    const onClose = () => {
        setChat(chat=>[...chat,"user님이 퇴장하셨습니다."])   
    }
    
    const onOpen = () => {
        setChat(chat=>["user님이 입장하셨습니다.",...chat])   
    }
    sock.onmessage = onMessage
    sock.onclose = onClose
    sock.onopen = onOpen

    useEffect(()=>onOpen(),[])
    return(<><h1>chat</h1>
	<hr/>
	<div><div id="msgArea" >
        {chat.map((item,index) =><div key={index}>{item}</div>)}
        </div><div>
            <form onSubmit={e=>e.preventDefault()}>
			message : <input type="text" id="msg" ref = {msg}/>
			<input type = "button" onClick={sendMessage} value = "보내기"/>
            <input type = "button" onClick={()=>{
                onClose()
                navigate('/')
            }} value = "나가기"/>
    </form></div></div></>)}
export default SoketTest