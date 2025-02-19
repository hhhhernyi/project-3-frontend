import { Link } from 'react-router';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import * as productService from '../services/productService'
import ProductCard from '../components/ClientCard/ProductCard';

const ProductList = () => {

    const [product, setProduct] = useState([]);
    const categoryColors={
        'Life': '#ffb3ba',
        'Hospitalization': '#ffffba',
        'Accident': '#baffc9',
        'Investment': '#b0e57c',
        'Endowment': '#d1c4e9'
      }

  useEffect(()=>{
    async function getProducts() {
      const productData = await productService.indexProduct()
      console.log(productData);
      setProduct(productData)
    }
    getProducts();
  },[])

    


  return (
    <div>
      <h2>Our List of Products</h2>
      <div className='clientListPageButtons'>
        <Button variant="outlined">
          <Link to='/home'>Back to Home</Link>
        </Button>
        <Button variant="outlined">
          <Link to='/products/new'>Create a new Product</Link>
        </Button>
      </div>

      <div className='fullProductList'>
        {product.map((item) => (
          <div key={item._id} className='productDetails'>
            <Link to={`/products/${item._id}`}>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Company:</strong> {item.company}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
  };
  
  export default ProductList;