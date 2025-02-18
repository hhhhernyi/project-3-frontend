import React, { useState } from 'react';

const ClientForm = () => {
  
  const [form, setForm] = useState({
    name: '',
    handphoneNumber: '',
    priority: 'High',
    comments: '',
    agent: '',
    existingProducts: '',
    productsToSell: ''
  });

  const [error, setError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form), // Send the form state as the request body
      });

      if (response.ok) {
        alert('Client added successfully');
        // Optionally reset the form fields here
        setForm({
          name: '',
          handphoneNumber: '',
          priority: 'High',
          comments: '',
          agent: '',
          existingProducts: '',
          productsToSell: ''
        });
      } else {
        const data = await response.json();
        setError(data.message || 'An error occurred while adding the client');
      }
    } catch (err) {
      setError('An error occurred while sending the request');
      console.error('Error:', err);
    }
  };


  return (
    <div>
        <h2>Create New Client</h2>
        <form onSubmit={handleSubmit}></form>
    
        <label>Name:</label>
        <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        />

        <label>Handphone Number</label>
        <input
        type="Number"
        name="handphoneNumber"
        value={form.handphoneNumber}
        onChange={handleChange}
        />

        <label>Priority:</label>
        <select
            name="priority"
            value={form.priority}
            onChange={handleChange}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

        <label>Comments:</label>
        <input
            type="text"
            name="comments"
            value={form.comment}
            onChange={handleChange}
            />

        <label>Agent ID:</label>
        <input
            type="text"
            name="agent"
            value={form.agent}
            onChange={handleChange}
            />

        <label>Existing Products:</label>
        <input
            type="text"
            name="existingProducts"
            value={form.existingProducts}
            onChange={handleChange}
            />

         <label>Products to sell:</label>
        <input
            type="text"
            name="productsToSell"
            value={form.productsToSell}
            onChange={handleChange}
            />

        </div>

  )
};

export default ClientForm;
