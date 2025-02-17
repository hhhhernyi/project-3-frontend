import Button from '@mui/material/Button';

const SignInPromptBox = () => {

    return (
        <div>
            <form >
            <span>Login:</span>
            <span>Password:</span>
            </form>
            <Button variant="contained">Submit</Button>
        </div>
    )

}

export default SignInPromptBox;