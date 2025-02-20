import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import * as productService from '../services/productService';

const ProductList = () => {
  const [product, setProduct] = useState([]);

  const categoryColors = {
    'Life': '#ffb3ba',
    'Hospitalization': '#ffffba',
    'Accident': '#baffc9',
    'Investment': '#b0e57c',
    'Endowment': '#d1c4e9'
  };

  useEffect(() => {
    async function getProducts() {
      const productData = await productService.indexProduct();
      console.log(productData);
      setProduct(productData);
    }
    getProducts();
  }, []);

  return (
    <div>
      <h2>Our List of Products</h2>

      <div className='clientListPageButtons'>
        <Button variant="outlined" color="primary">
          <Link to='/home' style={{ textDecoration: 'none' }}>Back to Home</Link>
        </Button>
        <Button variant="outlined" color="secondary">
          <Link to='/products/new' style={{ textDecoration: 'none' }}>Create a new Product</Link>
        </Button>
      </div>

      <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" style={{ marginTop: '20px' }}>
        {product.map((item) => (
          <Box key={item._id} sx={{ width: { xs: '100%', sm: '48%', md: '30%' }, marginBottom: '20px' }}>
            <Card
              style={{
                backgroundColor: categoryColors[item.category] || '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Category:</strong> {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Company:</strong> {item.company}
                </Typography>
                <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" size="small" style={{ marginTop: '10px' }}>
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default ProductList;
