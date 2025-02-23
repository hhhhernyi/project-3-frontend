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

  return (
    <div>
      <ResponsiveAppBar />
      <h2>Our List of Products</h2>

      {/* <div className="clientListPageButtons">
        <Button variant="outlined" color="primary">
          <Link to="/home" style={{ textDecoration: 'none' }}>
            Back to Home
          </Link>
        </Button>
        <Button variant="outlined" color="secondary">
          <Link to="/products/new" style={{ textDecoration: 'none' }}>
            Create a new Product
          </Link>
        </Button>
      </div> */}

      {/* Wrap the content with a Container to add padding */}
      <Container maxWidth="lg" style={{ padding: '0 20px' }}>  {/* Adjust the padding as needed */}
        <Grid
          container
          spacing={3}  // Space between grid items
          style={{ marginTop: '20px' }}
        >
          {product.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <Card
                style={{
                  backgroundColor: categoryColors[item.category] || '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%', // Ensure Card fills the height of the Box
                }}
              >
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div">
                    {item.name}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    <strong>Category:</strong> {item.category}
                  </Typography> */}
                  {/* <Typography variant="body2" color="text.secondary">
                    <strong>Company:</strong> {item.company}
                  </Typography> */}
                  <Link to={`/products/category/${item.category}`} style={{ textDecoration: 'none' }}>
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
