const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/clients`;


// view all clients
async function indexClient() {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          });
          return  res.json();
    } catch (err) {
        console.log(err);
    }
}

// create a new client
async function createClient(clientFormData) {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(clientFormData),
          });
          return  res.json();
    } catch (err) {
        console.log(err);
    }
}

// show a single client
async function showClient(clientId) {
    try {
        const res = await fetch(`${BASE_URL}/${clientId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          })
          return res.json()

    } catch (err) {
        console.log(err)
    }
    
}
// delete client
async function deleteClient(clientId) {
    try {
        const res = await fetch(`${BASE_URL}/${clientId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${localStorage.getItem('token')}` 
           
          },
        });
    
      return res.json()

      } catch (err) {
        console.error(err)
        
      }
    };

export {
    indexClient,
   createClient,
   showClient,
   deleteClient
  };