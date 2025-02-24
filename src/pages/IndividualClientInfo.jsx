import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router";
import * as clientService from "../services/clientsService";
import ResponsiveAppBar from "../components/Navbar";
import moment from "moment";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const IndividualClientInfo = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { clientId } = useParams();
  const [client, setClient] = useState({});
  const [clientExistingPlans, setClientExistingPlans] = useState([])
  const [clientProductsToSell, setClientProductsToSell] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

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
        setClientExistingPlans(clientData.existingPlans)
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
          <div className="individualClientCardTop">
          <div className="individualClientInfoPageHeader"><h3>Client Details</h3></div>
          <div className="individualClientInfoPageButtons">
            <Button
              className="deleteClient"
              variant="outlined"
              onClick={handleClickOpen}
              type="delete"
            >
              Delete
            </Button>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm to delete client?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteClient} autoFocus>
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
            <Button
              className="editClient"
              variant="outlined"
              onClick={handleEditClient}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              type="submit"
              onClick={handleClick}
            >
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
          <div className="individualClientCardMiddle">
            <div className="individualClientCardLeft">
            <div><strong>Name:</strong> {client.name}</div>
            <div className="dateOfBirth">
              <strong>DOB:</strong> {moment(client.dateOfBirth).format("DD-MM-YYYY")}
            </div>
            <div><strong>Occupation:</strong> {client.occupation}</div>
            <div><strong>Address:</strong> {client.address}</div>
            <div><strong>Contact Number: </strong>{client.handphoneNumber}</div>
            <div><strong>Annual Income:</strong> {client.annualIncome}</div>
            <div><strong>Priority:</strong> {client.priority}</div>

            <div className="lastmet">
              <strong>Date Last Met: </strong>{moment(client.lastmet).format("DD-MM-YYYY")}
            </div>
            <div className="nextAppt">
              <strong>Next Appt:</strong> {moment(client.nextAppt).format("DD-MM-YYYY")}
            </div>
            <div><strong>Existing Products:</strong> <ul>{clientExistingPlans.map((item, index)=>(<li key={index}>{item}</li>))}</ul></div>

            </div>
          <div className="individualClientCardRight">
          <div className="pipelineInfo">
              <p>
                <strong>Pipeline:</strong>
              </p>
              {clientProductsToSell.length === 0 ? (
                <p>No Products Found</p>
              ) : null}
              {clientProductsToSell.map((product) => (
                <div key={product._id} className="individualClientPipeline">
                  <p className="productNameParagraph">
                    {product.name}, {product.company}
                  </p>
                  <Button variant="outlined">Case closed</Button>
                </div>
              ))}
            </div>

          </div>
          </div>
          
          <div className="individualClientCardBottom">
            <div>
              Comments:
              <p className="individualClientComments">{client.comments}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualClientInfo;
