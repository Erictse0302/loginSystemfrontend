import React, { useState } from 'react'
import './LoginSignup.css'
import axios from 'axios';


const LoginSignup = () => {
   
    const [formData, setFormData] = useState({
        lastName:'',
        username: '',
        password: '',
        email: '',
      });
    
      const [isRegistration, setIsRegistration] = useState(true);

    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };


      
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        
    try {
        const endpoint = isRegistration ? '/api/signup' : '/api/login';
        const response = await axios.post(`http://localhost:8080${endpoint}`, formData);
        console.log(isRegistration ? 'Registration successful:' : 'Login successful:',response.data );
        // Handle success, e.g., store authentication token in local storage
      } catch (error) {
        console.error(isRegistration ? 'Registration failed:' : 'Login failed:',response.data);
        // Handle error, e.g., show an error message to the user
        
      } };
       
      
  return (
   <div className="container">
    <div className="header">
        <div className="text">{isRegistration
          ? 'Sign Up'
          : 'Login In'}</div>
        <div className="underline"></div>
    </div>
   <form onSubmit={handleSubmit}>
    <div className="inputs">
        <div className="input">
            <img src="" alt="" />
            <input type="text" placeholder='Username'  name = 'username'value={setFormData.username}
            onChange={handleChange}/>
        </div>
        {isRegistration?
        <div className="input">
            <img src="" alt="" />
            <input type="text" placeholder='lastName' name='lastName'  value={setFormData.lastName}
            onChange={handleChange} />
        </div>:<div></div>}
        {isRegistration?
        <div className="input">
            <img src="" alt="" />
            <input type="email" placeholder='Email' name='email'  value={setFormData.email}
            onChange={handleChange} />
        </div>:<div></div>}
        <div className="input">
            <img src="" alt="" />
            <input type="password" placeholder='Password' name = 'password' value={setFormData.password}
            onChange={handleChange} />
        </div>
    </div>


    <div className="submit-container">
    <button  className="submit-container" type="submit">{isRegistration ? 'Register' : 'Login'}</button>

    </div>
    </form>
    <div className="forgot-password">
    <p  onClick={() => setIsRegistration(!isRegistration)}>
    {isRegistration
          ? 'Already have an account? Click here to login.'
          : 'Don\'t have an account? Click here to register.'}
      </p>
    
    </div>
   </div>
  )
}

export default LoginSignup