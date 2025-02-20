import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import * as productService from "../services/productService";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "../components/Navbar";

const IndividualProductInfo = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleDeleteProduct = async () => {
    try {
      await productService.deleteProduct(productId);
      navigate("/product");
    } catch (err) {
      console.log(err);
    }
  };
  function handleEditProduct() {
    navigate(`/products/${productId}/edit`);
  }

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
        Name: {product.name}
        Company: {product.company}
        Category: {product.catagory}
        Link: {product.link}
        <Button
          className="deleteProduct"
          variant="outlined"
          onClick={handleDeleteProduct}
          type="delete"
        >
          Delete
        </Button>
        <Button
          className="editProduct"
          variant="outlined"
          onClick={handleEditProduct}
        >
          Edit
        </Button>
        <Button variant="outlined" type="submit" onClick={handleClick}>
          Go back
        </Button>
      </div>
    </>
  );
};

export default IndividualProductInfo;
