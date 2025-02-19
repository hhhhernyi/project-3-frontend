import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as clientService from '../services/clientsService';


const IndividualClientInfo = () =>{

    const { clientId } = useParams();
    const [client, setClient] = useState(null);

    useEffect(() => {
        async function fetchClientDetails() {
            try {
                // should be using .showClient() instead of .getClientById() , inside of ClientService got no function called .getClientById()
                const clientData = await clientService.showClient(clientId);

                setClient(clientData);
            } catch (error){
                console.error("Failed to fetch client details:", error);
            }
        } 
        fetchClientDetails();
    }, []);

    

    return (
        <>
        <div><h3>Client Details</h3></div>
        <div>
            Name: {client.name}
            Contact Number: {client.phone}
            Priority: {client.priority}
            Comments: {client.comments}
            Agent ID: 
            Existing Products: 
            Pipeline:
        </div>
        </>
        )
}

export default IndividualClientInfo;