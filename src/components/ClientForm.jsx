import { useState } from "react";
import { useNavigate } from "react-router";
import ResponsiveAppBar from "./Navbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AlertSuccess from "./AlertComponent/alertSuccess";
import AlertFailure from "./AlertComponent/AlertFailure";
import Button from '@mui/material/Button';

const ClientForm = () => {
  const [form, setForm] = useState({
    name: '',
    handphoneNumber: '',
    priority: '',
    comments: '',
    // agent:'',
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log(value);
  };

  function handleChangeExisting(event) {
    console.log(form.existingPlans, event.target.name, event.target.value);
    setForm({
      ...form,
      [form.existingPlans]: form.existingPlans.push(event.target.value),
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.handphoneNumber) {
      setError("Please fill in all required fields.");
      return; // Don't proceed with the fetch request if validation fails
    }
    console.log(form);

    try {
      const response = await fetch("http://localhost:3000/clients", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMessage('Client added successfully');
        // Optionally reset the form fields here
        setForm({
          name: '',
          handphoneNumber: '',
          priority: 'High',
          comments: '',
        //   agent:'',

        //   existingProducts: '',
        //   productsToSell: ''
        });
      } else {
        const data = await response.json();
        console.log(data);
        setError(data.message || 'An error occurred while adding the client');
      }
    } catch (err) {
      setError("An error occurred while sending the request");
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <ResponsiveAppBar/>
        <h2>Create New Client</h2>
        <form onSubmit={handleSubmit}>

        <div>
        <label>Name:</label>
        <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        />
        </div>

        <div>
        <label>Handphone Number</label>
        <input
        type="text"
        name="handphoneNumber"
        value={form.handphoneNumber}
        onChange={handleChange}
        />
        </div>

        <div>
  <label>Priority:</label>
  <select
    name="priority"
    value={form.priority}
    onChange={handleChange}
  >
    <option value="" disabled selected>Select Priority</option> {/* Blank option */}
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
  </select>
</div>

        <div>
        <label>Comments:</label>
        <input
            type="text"
            name="comments"
            value={form.comments}
            onChange={handleChange}
            />
        </div>

        {/* <div>
        <label>Agent ID:</label>
        <input
            type="text"
            name="agent"
            value={form.agent}
            onChange={handleChange}
            />
        </div>  */}

        {/* <div>
        <label>Existing Products:</label>
        <input
            type="text"
            name="existingProducts"
            value={form.existingProducts}
            onChange={handleChange}
            />
        </div> */}

        {/* <div>
         <label>Products to sell:</label>
        <input
            type="text"
            name="productsToSell"
            value={form.productsToSell}
            onChange={handleChange}
            />
        </div> */}
        <div>
        <button type="submit">Add Client</button>
        </div>
        <div>
        <button onClick={() => navigate('/clients')}>Back to Client Page</button>
        </div>
        </form>
        </div>

  )
};

export default ClientForm;