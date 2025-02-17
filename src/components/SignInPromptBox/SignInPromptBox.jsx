import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";

const SignInPromptBox = () => {
  const [inputDetails, setInputDetails] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputDetails({
      username: "",
      password: "",
    });
};

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputDetails({...inputDetails, [name]: value });
}
console.log(inputDetails)
// needs to check for validation, if input details !== db, send error, else navigate()
return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField id="usernameLogin" name="username" label="Username:" variant="outlined" value={inputDetails.username} onChange={handleInputChange} />
        <TextField id="passwordLogin" name="password" label="Password:" variant="outlined" value={inputDetails.password} onChange={handleInputChange} />
        <br />
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
};

export default SignInPromptBox;
