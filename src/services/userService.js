const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

// find a single User
async function showUser(userId) {
    try {
        const res = await fetch(`${BASE_URL}/${userId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          })
          return res.json()

    } catch (err) {
        console.log(err)
    }
    
}
async function updateUser(userId, formData) {
    try {
        const res = await fetch(`${BASE_URL}/${userId}`, {
            method: 'PUT',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
          });
          return  res.json();
    } catch (err) {
        console.log(err)
    }
    
}

export {
    showUser,
    updateUser
  };