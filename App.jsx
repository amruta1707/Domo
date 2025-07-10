import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './component/Demo'

function App() {
  const [count, setCount] = useState(0)
  const empnm="Asika"
  const email="asika@123"
    let user={
      salary:50000,
      age:19,
      destination:"Sangli"
    }
  return (
    <div >
    <h1 style={{"color":"blue"}}>Information about the employee</h1>
    <h3 style={{"textAlign":"left"}}>Employee Name:{empnm}</h3>
    <h3 style={{"textAlign":"left"}}>Employee Email:{email}</h3>
    <Demo userobj={user}/>

    

    </div>
  )
}

export default App
