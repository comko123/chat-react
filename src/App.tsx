import { BrowserRouter,Routes,Route } from "react-router-dom"
import SoketTest from "./SoketTest"
import HomePage from "./HomePage"

function App() {
 return(<>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/soket" element={<SoketTest/>}/>

  </Routes>
 </BrowserRouter>
 </>)
}

export default App
