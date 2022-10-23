import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const router = useNavigate()
return(<>
<h3>start live chat</h3>
<button onClick = {()=>router('/soket')}>Soket Chat</button>
</>)
} 
export default HomePage
//https://velog.io/@cksal5911/WebSoket-stompJSReact-%EC%B1%84%ED%8C%85-1