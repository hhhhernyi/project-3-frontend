import { Link } from 'react-router';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import * as productService from '../services/productService'
import ProductCard from '../components/ClientCard/ProductCard';

const ProductList = () => {

    const [product, setProduct] = useState([]);
    const categoryColors={
        'High': '#ffb3ba',
        'Medium': '#ffffba',
        'Low': '#baffc9'
      }

  useEffect(()=>{
    async function getProducts() {
      const productData = await productService.indexProduct()
      setProduct(productData)
    }
    getProducts();
  },[])

    


    return <div>
        
    <h2>Our List of Products</h2>
    <div className='clientListPageButtons'>
           <Button variant="outlined" ><Link to='/home' >Back to Home</Link></Button>
           <Button variant="outlined" ><Link to='/products/new' >Create a new Product</Link></Button>
           </div>
          

        <div className='fullProductList'>
                    {product.map((item)=>(
                  <Link key={item._id} to={`/productss/${item._id}`} ><ProductCard name={item.name} company={item.company} style={categoryColors[`${item.category}`]}/></Link>
                 ))}
                 </div>
        </div>


  };
  
  export default ProductList;