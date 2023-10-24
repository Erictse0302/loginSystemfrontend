import React, { useState } from 'react'
import './LoginSignup.css'


const LoginSignup = () => {
    const[action,setAction] = useState("Sign Up")

  return (
   <div className="container">
    <div className="header">
        <div className="text">Sign up</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
        <div className="input">
            <img src="" alt="" />
            <input type="text" placeholder='Username'/>
        </div>
        {action==="Login"?<div></div>:
        <div className="input">
            <img src="" alt="" />
            <input type="email" placeholder='Email' />
        </div>}
        <div className="input">
            <img src="" alt="" />
            <input type="password" placeholder='Password'/>
        </div>
    </div>
    {action==="Sign Up"?<div></div>:
    <div className="forgot-password">
        Lost Password? <span>Click Here</span>
    </div>}
    <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

    </div>
   </div>
  )
}

export default LoginSignup