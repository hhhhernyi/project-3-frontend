import { Routes, Route } from "react-router";
import SignInPromptBox from "./components/SignInPromptBox/SignInPromptBox";
import SignUp from "./pages/SignUp";
import HomePage from './pages/HomePage';
import ClientList from './pages/ClientList'; 
import ProductList from './pages/ProductList'; 
import IndividualProductInfo from "./pages/IndividualProduct";
import Profile from './pages/Profile'; 
import ClientForm from "./components/ClientForm";
import IndividualClientInfo from "./pages/IndividualClientInfo";
import NewProducts from "./pages/NewProduct";
import EditClientPage from "./pages/EditClientPage";
import AddNewProductsPage from "./pages/AddNewProductToClient";
import ResponsiveAppBar from "./components/Navbar";
// import { UserContext } from "./Contexts/UserContext";
// import { useContext } from "react";
// import EditProductPage from "./pages/EditProductPage";


const App = () => {

  // const { isLoggedIn } = useContext(UserContext)

  return (
    <>
      
      
      {/* {isLoggedIn && <ResponsiveAppBar />} */}
        <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<SignInPromptBox />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/clients' element={<ClientList />} /> 
        <Route path='/clients/new' element={<ClientForm />}/>
        <Route path='/clients/:clientId/edit' element={<EditClientPage />}/>
        <Route path='/clients/:clientId' element={<IndividualClientInfo />}/>
        <Route path='/clients/:clientId/product' element={<AddNewProductsPage />}/>
        <Route path='/products/new' element={<NewProducts />} /> 
        {/* <Route path='/products/:productId/edit' element={<EditProductPage />}/> */}
        <Route path='/products/:productId' element={<IndividualProductInfo />}/>
        <Route path='/products' element={<ProductList />} /> 
        <Route path='/profile' element={<Profile />} /> 
      </Routes>
    </>
  );
};

export default App;