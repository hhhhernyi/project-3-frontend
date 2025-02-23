import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import * as productService from "../services/productService";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "../components/Navbar";

const IndividualProductInfo = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();



  function handleClick() {
    navigate(`/product`);
  }

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const productData = await productService.showProduct(productId);

        setProduct(productData);
        console.log(productData);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    }
    fetchProductDetails();
  }, [productId]);

  return (
    <>
    <ResponsiveAppBar/>
      <div>
 
      

     
      </div>
    </>
  );
};

export default IndividualProductInfo;
