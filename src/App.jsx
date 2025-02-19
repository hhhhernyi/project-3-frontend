import { Routes, Route } from "react-router";
import SignInPromptBox from "./components/SignInPromptBox/SignInPromptBox";
import SignUp from "./pages/SignUp";
import HomePage from './pages/HomePage';
import ClientList from './pages/ClientList'; 
import ProductList from './pages/ProductList'; 
import Profile from './pages/Profile'; 
import ClientForm from "./components/ClientForm";
import IndividualClientInfo from "./pages/IndividualClientInfo";
import NewProducts from "./pages/NewProduct";
import EditClientPage from "./pages/EditClientPage";

const App = () => {
  return (
    <>
      <h3 className="welcomeText">Welcome to the insurance CRM portal!</h3>
      
      <Routes>
        <Route path='/' element={<SignInPromptBox />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/clients' element={<ClientList />} /> 
        <Route path='/clients/new' element={<ClientForm />}/>
        <Route path='/clients/:clientId' element={<IndividualClientInfo />}/>
        <Route path='/product' element={<ProductList />} /> 
        <Route path='/profile' element={<Profile />} /> 
      </Routes>
    </>
  );
};

export default App;