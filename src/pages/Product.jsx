import { Link } from 'react-router';
import Button from '@mui/material/Button';

const Product = () => {
    return <div><h2>Product</h2>
    <div className='clientListPageButtons'>
           <Button variant="outlined" ><Link to='/home' >Back to Home</Link></Button>
           </div>
           </div>;
  };
  
  export default Product;