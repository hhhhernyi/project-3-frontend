import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import * as clientService from "../services/clientsService";
import { Link } from "react-router";
import ClientCard from "../components/ClientCard/ClientCard";
import ResponsiveAppBar from "../components/Navbar";

export default function ClientList() {
  const [clientList, setClientList] = useState([]);
  const priorityColors = {
    High: "#ffb3ba",
    Medium: "#ffffba",
    Low: "#baffc9",
  };

  useEffect(() => {
    async function getClients() {
      const clientData = await clientService.indexClient();

      const sortedClientData = clientData.sort((a, b) => {
            const priorityOrder = { High:3, Medium:2, Low:1};
            return priorityOrder[b.priority] - priorityOrder[a.priority];

      });

      setClientList(sortedClientData);
    }
    getClients();
  }, []);

  
  return (
    <div className="clientListPage">
      <ResponsiveAppBar />
      <h2>Client Listed by Urgency</h2>
      <div className="clientListPageButtons">
        <Button variant="outlined">
          <Link to="/home">Back to Home</Link>
        </Button>
        <Button variant="outlined">
          <Link to="/clients/new">Create a new client</Link>
        </Button>
      </div>

      <div className="fullClientList">
        {clientList.map((item) => (
          <Link key={item._id} to={`/clients/${item._id}`}>
            <ClientCard
            className="clientCard"
              name={item.name}
              priority={item.priority}
              style={priorityColors[`${item.priority}`]}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
