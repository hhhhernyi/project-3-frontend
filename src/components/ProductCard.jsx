import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imageone from '../assets/stockFamilyPhotos/imageone.jpg';
import { getProductsByCategory, indexProduct } from '../services/productService';
import { useParams } from 'react-router';


export default function ProductCard( {product} ) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();


  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       setLoading(true);
  //       let productData;
        
  //       if (category) {
  //         // Fetch products by category
  //         productData = await getProductsByCategory(category);
  //       } else {
  //         // Fetch all products
  //         productData = await indexProduct();
  //       }
        
  //       console.log("product data", productData);
  //       setProducts(productData);
  //     } catch (error) {
  //       console.error('Failed to fetch products:', error);
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  
  //   fetchProducts();
  // }, [category]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };


  return (
<div>
          <Card key={product._id}>
            <CardMedia
              sx={{ height: 140 }}
              image={imageone}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Company: {product.company}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Category: {product.category}
              </Typography>
              <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
                Added: {formatDate(product.createdAt)}
              </Typography>
            </CardContent>
            <CardActions>
              {product.link && (
                <Button size="small" href={product.link} target="blank" rel="noopener noreferrer">
                  Learn More
                </Button>
              )}
            </CardActions>
          </Card>
        
      
      
    </div>
  );
}