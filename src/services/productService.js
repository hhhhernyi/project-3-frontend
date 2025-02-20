const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/products`;


// view all products
async function indexProduct() {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          });
          return  res.json();
    } catch (err) {
        console.log(err);
    }
}

// create a new product
async function createProduct(productFormData) {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(productFormData),
          });
          return  res.json();
    } catch (err) {
        console.log(err);
    }
}

// show a single product
async function showProduct(productId) {
    try {
        const res = await fetch(`${BASE_URL}/${productId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          })
          return res.json()

    } catch (err) {
        console.log(err)
    }
    
}

async function deleteProduct(productId) {
    try {
        const res = await fetch(`${BASE_URL}/${productId}`, {
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

    async function updateProduct(productId, formData) {
            try {
                const res = await fetch(`${BASE_URL}/${productId}`, {
                    method: 'PUT',
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                 },
                 body: JSON.stringify(formData),
                  });
                  return  res.json();
            } catch (err) {
                console.log(err);
            }
    
        }

export {
    indexProduct,
    createProduct,
    showProduct,
    deleteProduct,
    updateProduct
  };