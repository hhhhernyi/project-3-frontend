import { useState } from 'react';
import { useNavigate } from 'react-router';
import ResponsiveAppBar from './Navbar';

const ClientForm = () => {
  const [form, setForm] = useState({
    name: '',
    handphoneNumber: '',
    priority: 'High', // Set a default value for priority
    comments: '',
    lastmet: '',
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.handphoneNumber) {
      setError('Please fill in all required fields.');
      return;
    }
    console.log(form);

    try {
      const response = await fetch('http://localhost:3000/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMessage('Client added successfully');
        setForm({
          name: '',
          handphoneNumber: '',
          priority: 'High',
          comments: '',
          lastmet: '',
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
      <ResponsiveAppBar />
      <h2>Create New Client</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
          <label>Handphone Number:</label>
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

        <div>
          <label>Last Met Date:</label>
          <input
            type="date"
            name="lastmet"
            value={form.lastmet}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Add Client</button>
        </div>
        <div>
          <button onClick={() => navigate('/clients')}>Back to Client Page</button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;