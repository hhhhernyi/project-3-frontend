import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as clientService from '../services/clientsService';


const IndividualClientInfo = () =>{

    const { clientId } = useParams();
    const [client, setClient] = useState(null);

    useEffect(() => {
        async function fetchClientDetails() {
            try {
                const clientData = await clientService.getClientById(clientId);

                setClient(clientData);
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