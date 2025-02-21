import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router";
import * as clientService from "../services/clientsService";
import ResponsiveAppBar from "../components/Navbar";
import moment from 'moment';


const IndividualClientInfo = () => {
  const navigate = useNavigate();
  const { clientId } = useParams();
  const [client, setClient] = useState({});
  const [clientProductsToSell, setClientProductsToSell] = useState([]);

  const handleDeleteClient = async () => {
    try {
      await clientService.deleteClient(clientId);
      navigate("/clients");
    } catch (err) {
      console.log(err);
    }
  };
  function handleEditClient() {
    navigate(`/clients/${clientId}/edit`);
  }

  function handleClick() {
    navigate(`/clients`);
  }
  function handleAddNewProducts() {
    navigate(`/clients/${clientId}/product`);
  }

  useEffect(() => {
    async function fetchClientDetails() {
      try {
        const clientData = await clientService.showClient(clientId);
        setClient(clientData);
        setClientProductsToSell(clientData.productsToSell);
        console.log("client info: ", clientData);
      } catch (error) {
        console.error("Failed to fetch client details:", error);
      }
    }
    fetchClientDetails();
  }, [clientId]);

  return (
    <>
      <div className="individualClientInfoPage">
        <ResponsiveAppBar />
        <div className="individualClientCard">        
        <div className="individualClientInfoPageHeader">
          <h3>Client Details</h3>
        </div>
        <div className="individualClientInfoPageDetails">
          <div>Name: {client.name}</div>
          <div>Contact Number: {client.handphoneNumber}</div>
          <div>Annual Income: {client.annualIncome}</div>
          <div>Priority: {client.priority}</div>
          <div>Comments: <p className="individualClientComments">{client.comments}</p></div>
          <div className="dateOfBirth">DOB: {moment(client.dateOfBirth).format('DD-MM-YYYY')}</div>
          <div>Occupation: {client.occupation}</div>
          <div>Address: {client.address}</div>
          <div className="lastmet">Date Last Met: {moment(client.lastmet).format('DD-MM-YYYY')}</div>
          <div>Existing Products: {client.existingPlans}</div>
          {clientProductsToSell.length === 0 ? <p>No Products Found</p> : null}
          {clientProductsToSell.map((product) => (
            <p key={product._id}>
              {product.name}, {product.company}
            </p>
          ))}
          </div>

          <div className="individualClientInfoPageButtons">
             <Button
            className="deleteClient"
            variant="outlined"
            onClick={handleDeleteClient}
            type="delete"
          >
            Delete
          </Button>
          <Button
            className="editClient"
            variant="outlined"
            onClick={handleEditClient}
          >
            Edit
          </Button>
          <Button variant="outlined" type="submit" onClick={handleClick}>
            Go back
          </Button>
          <Button
            variant="outlined"
            type="submit"
            onClick={handleAddNewProducts}
          >
            Add New Products
          </Button>
          </div>    
          </div>  
        </div>
      
    </>
  );
};

export default IndividualClientInfo;

//button to go back
// edit
//delete

// front end service
// back end controller
