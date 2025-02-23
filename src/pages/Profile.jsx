import { Link } from 'react-router';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../components/Navbar';
import * as clientService from '../services/clientsService'

const Profile = () => {
  const { user } = useContext(UserContext);
  const [clientInfo, setClientInfo] = useState([])
  const [formData, setFormData] = useState({
    monthlyGoal:''
  })

  function handleSubmit(event) {
    event.preventDefault()
    localStorage.setItem('monthlyGoal', formData.monthlyGoal)
    setFormData({monthlyGoal:''});
  }

  function handleChange(event){
    setFormData({ ...formData, [event.target.name]: event.target.value });
}

  useEffect(()=>{
    async function getData() {
      const clientData = await clientService.indexClient()
      setClientInfo(clientData)
    }
    getData()
  },[])

    return <div>
      <ResponsiveAppBar/>
      <div className='profilePageInfo'>
        <h2>Profile</h2>
        <p>username: {user.username}</p>
        <p>number of clients: {clientInfo.length}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='monthlyGoal'>Monthly Goal: </label>
          <input id='monthlyGoal' type='number' name='monthlyGoal' onChange={handleChange}></input>
          <button type='submit' >Update</button>
        </form>
      </div>
      
       
    
    </div>;
  };
  
  export default Profile;