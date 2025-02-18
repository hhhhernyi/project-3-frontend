import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import * as clientService from '../services/clientsService'
import { Link } from 'react-router';
import ClientCard from '../components/ClientCard/ClientCard';


export default function ClientList () {
  const [clientList, setClientList] = useState([])
  const priorityColors={
    'High': '#ffb3ba',
    'Medium': '#ffffba',
    'Low': '#baffc9'
  }

  useEffect(()=>{
    async function getClients() {
      const clientData = await clientService.index()
      setClientList(clientData)
    }
    getClients();
  },[])
    return <div className='clientListPage'>
      <h2>Here is your list of clients</h2>
      <Button variant="outlined"><Link to='/clients/new' >Create a new client</Link></Button>
      <div className='fullClientList'>
         {clientList.map((item)=>(
       <Link key={item._id} to={`/clients/${item._id}`} ><ClientCard name={item.name} priority={item.priority} style={priorityColors[`${item.priority}`]}/></Link>
      ))}
      </div>
     



    </div>;
  };