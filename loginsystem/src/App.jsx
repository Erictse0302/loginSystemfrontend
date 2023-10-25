import { useState } from 'react'
import './App.css'
import LoginSignup from './Components/LoginSingup/LoginSignup'
import AuthContent from './Components/LoginSingup/AuthContent'

function App() {
 

  return (
    <>
      <div>
        <LoginSignup/>
       <AuthContent/>
      </div>
    </>
  )
}

export default App
