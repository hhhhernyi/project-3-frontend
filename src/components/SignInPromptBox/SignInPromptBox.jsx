import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const SignInPromptBox = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
            <TextField id="outlined-basic" label="Username:" variant="outlined" />
            <TextField id="outlined-basic" label="Password:" variant="outlined" />
            <br/>
            <Button variant="contained">Submit</Button>
            </form>
        </div>
    )

}

export default SignInPromptBox;