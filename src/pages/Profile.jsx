import { Link } from 'react-router';
import Button from '@mui/material/Button';

const Profile = () => {
    return <div><h2>Profile</h2>
        <div className='clientListPageButtons'>
           <Button variant="outlined" ><Link to='/home' >Back to Home</Link></Button>
           </div>
    
    </div>;
  };
  
  export default Profile;