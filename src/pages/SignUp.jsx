import Fab from '@mui/material/Fab';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function SignUp() {
    // set initial state of the form
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        passwordCfm:''
    })

    function handleSubmit(event) {
    event.preventDefault()
        // i need to create a new user if validation is all clear
        // i need to await the user.create() or something
        // send formData as a body to our server
        
        setFormData({
            username:'',
            password:'',
            passwordCfm:''
        })
    }
    function handleClick() {
        navigate('/')
    }

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }


  return (
    <>
    <div className='signUpPage'>
    <p>Sign up as a new user!</p>
    <form onSubmit={handleSubmit} className='signuppage'>
        <p>Please enter your details below: </p>

        <label htmlFor='username' >Username:</label>
        <input id="username" onChange={handleChange} placeholder='username' name='username' ></input><br/>

        <label htmlFor='password' >Password:</label>
        <input id="password" onChange={handleChange} placeholder='password' name='password' ></input><br/>

        <label htmlFor='passwordCfm' >Confirm Password:</label>
        <input id="passwordCfm" onChange={handleChange}placeholder='confirm your password' name='passwordCfm' ></input><br/>

        <Fab variant="extended" onClick={handleClick}>Create Account!</Fab>
    </form>
    </div>

    </>
  )
}
