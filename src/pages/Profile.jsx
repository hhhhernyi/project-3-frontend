import { Link } from 'react-router';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../components/Navbar';

const Profile = () => {
    return <div>
      <ResponsiveAppBar/>
      <h2>Profile</h2>
        <div className='clientListPageButtons'>
           <Button variant="outlined" ><Link to='/home' >Back to Home</Link></Button>
           </div>
    
    </div>;
  };
  
  export default Profile;