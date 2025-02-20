import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useParams, useNavigate } from 'react-router';
import * as clientService from '../services/clientsService';
import ResponsiveAppBar from '../components/Navbar';


const IndividualClientInfo = () =>{

    const navigate = useNavigate()
    const { clientId } = useParams();
    const [client, setClient] = useState({});
    const [clientProductsToSell, setClientProductsToSell] = useState([])

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

    function handleClick() {
        navigate(`/clients`)
    }
    function handleAddNewProducts(){
        navigate(`/clients/${clientId}/product`)
    }

    useEffect(() => {
        async function fetchClientDetails() {
            try {
                // should be using .showClient() instead of .getClientById() , inside of ClientService got no function called .getClientById()
                const clientData = await clientService.showClient(clientId);

                setClient(clientData);
                setClientProductsToSell(clientData.productsToSell)
                console.log('client info: ',clientData)
            } catch (error){
                console.error("Failed to fetch client details:", error);
            }
        } 
        fetchClientDetails();
    }, [clientId]);

    

    return (
        <>
        <ResponsiveAppBar/>
        <div><h3>Client Details</h3></div>
        <div>
            Name: {client.name}
            Contact Number: {client.handphoneNumber}
            Priority: {client.priority}
            Comments: {client.comments}
            Agent ID: 
            Existing Products: 
            Pipeline: 
            {clientProductsToSell.length===0? <p>No Products Found</p>: null }
            {clientProductsToSell.map((product)=>(
                <p key={product._id}>{product.name}, {product.company}</p>
            ))}
            
            {/* .map((product)=>(
                <p key={product._id}>{product.name}</p>
            ))} */}
            <Button className='deleteClient' variant="outlined" onClick={handleDeleteClient} type='delete'>Delete</Button>
            <Button className='editClient' variant="outlined" onClick={handleEditClient} >Edit</Button>
            <Button variant="outlined" type='submit' onClick={handleClick}>Go back</Button>
            <Button variant="outlined" type='submit' onClick={handleAddNewProducts}>Add New Products</Button>
            
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