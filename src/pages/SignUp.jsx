import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as authService from '../services/authService'

export default function SignUp() {
    // set initial state of the form
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        passwordCfm:''
    })

    async function handleSubmit(event) {
    event.preventDefault()
        // i need to create a new user if validation is all clear
        // i need to await the user.create() or something
        // send formData as a body to our server
        console.log('user creation details: ',formData)
        // formData is what i want to send to my server, so i need to have a service.create in which i can post
        const newUser = await authService.signUp(formData)
        // after creation, i should be return a token
        console.log('new token: ',newUser)
        
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
    <form onSubmit={handleSubmit} className='signUpPage'>
        <p>Please enter your details below: </p>

        <label className='signUpFormLabel' htmlFor='username' >Username:</label>
        <input className='signUpPageInput' id="username" onChange={handleChange} placeholder='username' name='username' ></input>

        <label className='signUpFormLabel' htmlFor='password' >Password:</label>
        <input className='signUpPageInput' id="password" onChange={handleChange} placeholder='password' name='password' ></input>

        <label className='signUpFormLabel' htmlFor='passwordCfm' >Confirm Password:</label>
        <input className='signUpPageInput' id="passwordCfm" onChange={handleChange}placeholder='confirm your password' name='passwordCfm' ></input>

        <Button className='signUpPageButton' variant="outlined" onClick={handleClick} type='submit'>Create Account!</Button>
    </form>
    </div>

    </>
  )
}
