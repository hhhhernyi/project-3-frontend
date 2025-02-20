import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../Contexts/UserContext";
import * as authService from "../../services/authService";

const SignInPromptBox = () => {
  const { setUser } = useContext(UserContext);
  const [inputDetails, setInputDetails] = useState({
    username: "",
    password: "",
  });

  // changed this handle submit to async function
  // when user submit form, we will run try catch
  // we will use signIn function from authService to sign in the user
  // if successful sign in, we will get a token back, saved to a variable signedInUser
  // setUser is from the userContext, we will use it to set the state of User to signedInUser
  // navigate to home page
  // if sign in fail, error message will show (maybe can use prompt)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("login details: ", inputDetails);
      const signedInUser = await authService.signIn(inputDetails);
      setUser(signedInUser);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
    setInputDetails({
      username: "",
      password: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputDetails({ ...inputDetails, [name]: value });
  };

  // needs to check for validation, if input details !== db, send error, else navigate()

  const navigate = useNavigate();
  function navigateToSignUp() {
    console.log("test");
    navigate("/sign-up");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="signInTextFields">
          <div className="usernameLogin">
          <TextField
            id="usernameLogin"
            name="username"
            label="Username:"
            variant="outlined"
            value={inputDetails.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="passwordLogin">
          <TextField
            id="passwordLogin"
            name="password"
            label="Password:"
            variant="outlined"
            value={inputDetails.password}
            onChange={handleInputChange}
          />
        </div>
        </div>
        

        <div className="signInPageButtons">
          <Button variant="contained" type="submit">Sign In</Button>
          <Button variant="contained" onClick={navigateToSignUp}>Sign-up</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInPromptBox;
