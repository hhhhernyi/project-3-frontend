import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import moment from "moment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit'; 
import { useNavigate } from "react-router";

import * as clientService from "../services/clientsService";
import { Link } from "react-router";
import ResponsiveAppBar from "../components/Navbar";

export default function ClientList() {
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    async function getClients() {
      const clientData = await clientService.indexClient();
      console.log('Raw client data:', clientData);

      // Transform clientData into the format expected by DataGrid
      const rows = clientData.map((client) => ({
        id: client._id, // DataGrid requires a unique `id` for each row
        fullName: `${client.name}`,
        priority: client.priority,
        lastMet: moment(client.lastmet).format('DD-MM-YYYY'),
        contact: client.handphoneNumber,
        occupation: client.occupation,
        address: client.address,
        existingPlans: client.existingPlans.join(', '), // Convert array to string
      }));

      setClientList(rows);
    }
    getClients();
  }, []);

const navigate = useNavigate();

  const handleEditClient = (_id) => {
   navigate(`/clients/${_id}`)
  };

  const columns = [
    {
      field: 'fullName',
      headerName: 'Full name',
      width: 160,
    },
    {
      field: 'priority',
      headerName: 'Priority',
      width: 120,
    },
    {
      field: 'lastMet',
      headerName: 'Last Met',
      width: 120,
    },
    {
      field: 'existingPlans',
      headerName: 'Existing Plans',
      width: 200,
    },
    {
      field: 'contact',
      headerName: 'Contact',
      width: 200,
    },
    {
      field: 'occupation',
      headerName: 'Occupation',
      width: 200,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 200,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <IconButton
          aria-label="edit"
          onClick={() => handleEditClient(params.row.id)} 
          sx={{ color: "grey" }} 
        >
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <>
      <div className="clientListPage">
        <ResponsiveAppBar />
        <h2>Client List</h2>

        <Box sx={{ height: 400, width: '100%', backgroundColor: 'white' }}>
          <DataGrid
            rows={clientList} // Pass the transformed client data
            columns={columns} // Pass the column definitions
            pageSize={5} // Number of rows per page
            rowsPerPageOptions={[5, 10, 20]} // Options for rows per page
            checkboxSelection={false} // Disable row selection
          />
        </Box>

        {/* Styled Buttons */}
        <Box sx={{ display: 'flex', gap: 2, marginTop: 3, justifyContent: 'center' }}>
          <Button
            variant="contained"
            component={Link}
            to="/home"
            sx={{
              backgroundColor: '#1976d2', // Blue color
              color: '#fff', // White text
              '&:hover': {
                backgroundColor: '#1565c0', // Darker blue on hover
              },
            }}
          >
            Back to Home
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/clients/new"
            sx={{
              backgroundColor: '#4caf50', // Green color
              color: '#fff', // White text
              '&:hover': {
                backgroundColor: '#388e3c', // Darker green on hover
              },
            }}
          >
            Create a New Client
          </Button>
        </Box>
      </div>
    </>
  );
}