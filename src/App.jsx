import { Routes, Route } from "react-router";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import ClientList from "./pages/ClientList";
import ProductList from "./pages/ProductList";
import Profile from "./pages/Profile";
import ClientForm from "./components/ClientForm";
import IndividualClientInfo from "./pages/IndividualClientInfo";
import EditClientPage from "./pages/EditClientPage";
import AddNewProductsPage from "./pages/AddNewProductToClient";
import SignInPage from "./pages/SignIn";
import CategoryProductCard from "./pages/CategoryProductCard";
import PageNotFound from "./pages/PageNotFound";
import { useContext } from "react";
import { UserContext } from "./Contexts/UserContext";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/clients/new" element={<ClientForm />} />
          <Route path="/clients/:clientId" element={<IndividualClientInfo />} />
          <Route path="/clients/:clientId/edit" element={<EditClientPage />} />
          <Route path="/clients/:clientId/product" element={<AddNewProductsPage />} />
          <Route path="/products/category" element={<ProductList />} />
          <Route path='/products/category/:categoryId' element={<CategoryProductCard /> } /> 
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
};

export default App;
