import { Grid, Card, CardContent, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import * as productService from '../services/productService';
import ResponsiveAppBar from '../components/Navbar';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const [product, setProduct] = useState([]);

  const categoryColors = {
    'Life': '#ffb3ba',
    'Hospitalization': '#ffffba',
    'Accident': '#baffc9',
    'Investment': '#b0e57c',
    'Endowment': '#d1c4e9',
  };

  useEffect(() => {
    async function getProducts() {
      const productData = await productService.indexProduct();
      console.log(productData);
      setProduct(productData);
    }
    getProducts();
  }, []);

  const uniqueCategories = [...new Set(product.map((item) => item.category))];

  return (
    <div>
      <ResponsiveAppBar />
      <h2>Our List of Products</h2>



     
      <Container maxWidth="lg" style={{ padding: '0 20px' }}>  {/* Adjust the padding as needed */}
        <Grid
          container
          spacing={3}  
          style={{ marginTop: '20px' }}
        >
          {uniqueCategories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Card
                style={{
                  backgroundColor: categoryColors[category] || '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%', 
                }}
              >
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div">
                    {category}
                  </Typography>

                  <Link to={`/products/category/${category}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" size="small" style={{ marginTop: '10px' }}>
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductList;
