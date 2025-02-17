import { Routes, Route } from "react-router";
import SignInPromptBox from "./components/SignInPromptBox/SignInPromptBox";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <>
    <h3>Welcome to the insurance CRM portal!</h3>
    
    <Routes>
      <Route path='/' element={<SignInPromptBox />}/>
      <Route path='/sign-up' element={<SignUp />}/>
    </Routes>
    </>
)};

export default App;
