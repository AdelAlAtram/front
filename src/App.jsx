import { useState } from 'react'
import reactLogo from './assets/react.svg'
<link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'/>
import NavBar from '../src/Navbar/Navbar'
import ComingSoon from './Navbar/ComingSoon'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NavBar/>
   <br/>
   <ComingSoon/>
   </>
  )
}

export default App
