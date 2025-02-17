import { Routes, Route } from "react-router";
import SignInPromptBox from "./components/SignInPromptBox/SignInPromptBox";
import SignUp from "./pages/SignUp";
import HomePage from './pages/HomePage';
import ClientList from './pages/ClientList'; 
import Product from './pages/Product'; 
import Profile from './pages/Profile'; 

const App = () => {
  return (
    <>
      <h3>Welcome to the insurance CRM portal!</h3>
      
      <Routes>
        <Route path='/' element={<SignInPromptBox />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/clients' element={<ClientList />} /> 
        <Route path='/product' element={<Product />} /> 
        <Route path='/profile' element={<Profile />} /> 
      </Routes>
    </>
  );
};

export default App;