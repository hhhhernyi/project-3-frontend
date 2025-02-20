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
        console.log('user creation details: ',formData)
        const newUser = await authService.signUp(formData)
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
    <form onSubmit={handleSubmit} className='signUpForm'>
        <p>Please enter your details below: </p>

        <div className='signUpUsername'>
        <label className='signUpFormLabel' htmlFor='username' >Username:</label>
        <input className='signUpPageInput' id="username" onChange={handleChange} placeholder='username' name='username' ></input>
        </div>

        <div className='signUpPassword'>
        <label className='signUpFormLabel' htmlFor='password' >Password:</label>
        <input className='signUpPageInput' id="password" onChange={handleChange} placeholder='password' name='password' ></input>
        </div>

        <div className='signUpPasswordCfm'>
        <label className='signUpFormLabel' htmlFor='passwordCfm' >Confirm Password:</label>
        <input className='signUpPageInput' id="passwordCfm" onChange={handleChange}placeholder='confirm your password' name='passwordCfm' ></input>
        </div>

       
        
        <Button className='signUpPageButton' variant="outlined" onClick={handleClick} type='submit' >Create Account!</Button>
    </form>
    </div>

    </>
  )
}

