import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useParams, useNavigate } from 'react-router';
import * as clientService from '../services/clientsService';


const IndividualClientInfo = () =>{

    const navigate = useNavigate()
    const { clientId } = useParams();
    const [client, setClient] = useState({});

    const handleDeleteClient = async () => {
        try {
            await clientService.deleteClient(clientId);
            navigate('/clients');

        } catch (err){
            console.log(err)
        }
    }
    function handleEditClient() {
        navigate(`/clients/${clientId}/edit`)
    }

    useEffect(() => {
        async function fetchClientDetails() {
            try {
                // should be using .showClient() instead of .getClientById() , inside of ClientService got no function called .getClientById()
                const clientData = await clientService.showClient(clientId);

                setClient(clientData);
                console.log(clientData)
            } catch (error){
                console.error("Failed to fetch client details:", error);
            }
        } 
        fetchClientDetails();
    }, [clientId]);

    

    return (
        <>
        <div><h3>Client Details</h3></div>
        <div>
            Name: {client.name}
            Contact Number: {client.handphoneNumber}
            Priority: {client.priority}
            Comments: {client.comments}
            Agent ID: 
            Existing Products: 
            Pipeline:
            <Button className='deleteClient' variant="outlined" onClick={handleDeleteClient} type='delete'>Delete</Button>
            <Button className='editClient' variant="outlined" onClick={handleEditClient} >Edit</Button>
            
        </div>
        </>
        )
}

export default IndividualClientInfo;


//button to go back
// edit
//delete 

// front end service 
// back end controller 