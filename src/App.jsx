import { Routes, Route } from "react-router";
import SignInPromptBox from "./components/SignInPromptBox/SignInPromptBox";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import ClientList from "./pages/ClientList";
import ProductList from "./pages/ProductList";
import IndividualProductInfo from "./pages/IndividualProduct";
import Profile from "./pages/Profile";
import ClientForm from "./components/ClientForm";
import IndividualClientInfo from "./pages/IndividualClientInfo";
import NewProducts from "./pages/NewProduct";
import EditClientPage from "./pages/EditClientPage";
import AddNewProductsPage from "./pages/AddNewProductToClient";
import SignInPage from "./pages/SignIn";
<<<<<<< HEAD
import CategoryProductCard from "./pages/CategoryProductCard";
import ProductCard from "./components/ProductCard";

=======
import PageNotFound from "./pages/PageNotFound";
import { useContext } from "react";
import { UserContext } from "./Contexts/UserContext";
>>>>>>> fd4ea8a8c9af9c6be16801af5b55caa7416482ca

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/clients' element={<ClientList />} /> 
        <Route path='/clients/new' element={<ClientForm />}/>
        <Route path='/clients/:clientId' element={<IndividualClientInfo />}/>
        <Route path='/clients/:clientId/edit' element={<EditClientPage />}/>
        <Route path='/clients/:clientId/product' element={<AddNewProductsPage />}/>
        <Route path='/products' element={<ProductList />} /> 
        <Route path='/products/category/:categoryId' element={<CategoryProductCard /> } /> 
        {/* <Route path='/products/new' element={<NewProducts />} />  */}
        {/* <Route path='/products/:productId' element={<IndividualProductInfo />}/> */}
        <Route path='/profile' element={<Profile />} /> 
      </Routes>
=======
      {user ? (
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/clients/new" element={<ClientForm />} />
          <Route path="/clients/:clientId" element={<IndividualClientInfo />} />
          <Route path="/clients/:clientId/edit" element={<EditClientPage />} />
          <Route path="/clients/:clientId/product" element={<AddNewProductsPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<NewProducts />} />
          <Route path="/products/:productId" element={<IndividualProductInfo />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
>>>>>>> fd4ea8a8c9af9c6be16801af5b55caa7416482ca
    </>
  );
};

export default App;
