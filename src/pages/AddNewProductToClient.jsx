import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useParams, useNavigate } from 'react-router';
import * as clientService from '../services/clientsService';
import * as productService from '../services/productService'


const AddNewProductsPage = () =>{

    const navigate = useNavigate()
    const { clientId } = useParams();
    const [client, setClient] = useState({});
    const [allProducts, setAllProducts]= useState([])
    const [clientProductsToSell, setClientProductsToSell] = useState([])

    async function handleAddToClient(productId){
        console.log('added this to client: ',productId)
        const updatedClient = await clientService.assignProductToClient(clientId,productId)
        console.log('updatedClient: ',updatedClient)
        // fire off a service and send a request to backend
        navigate(`/clients/${clientId}`)
    }

    function handleClick() {
        navigate(`/clients`)
    }

    useEffect(() => {
        async function fetchClientDetails() {
            try {
                const clientData = await clientService.showClient(clientId);
                const productData = await productService.indexProduct()
                setClient(clientData);
                setClientProductsToSell(clientData.productsToSell)
                setAllProducts(productData)
                console.log('client info: ',clientData)
            } catch (error){
                console.error("Failed to fetch client details:", error);
            }
        } 
        fetchClientDetails();
    }, [clientId]);

    

    return (
        <>
        <div><h3>Add a new product for {client.name}</h3></div>
        <div>
            Name: {client.name}<br/>
            Contact Number: {client.handphoneNumber}<br/>
            Priority: {client.priority}<br/>
            Comments: {client.comments}<br/>
            Pipeline: 
            {clientProductsToSell.length===0? <p>No Products Found</p>: null }
            {clientProductsToSell.map((product)=>(
                <p key={product._id}>{product.name}, {product.company}</p>
            ))}
            
            Available Products:
            <ol>
                {allProducts.map((product)=>(
                    <li key={product._id}>{product.name} <button onClick={()=>handleAddToClient(product._id)}>add to client list</button></li>
                ))}

            </ol>
            <Button variant="outlined" type='submit' onClick={handleClick}>Go back</Button>
            
        </div>
        </>
        )
}

export default AddNewProductsPage;


//button to go back
// edit
//delete 

// front end service 
// back end controller 