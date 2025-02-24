import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useParams} from "react-router";
import * as clientService from "../services/clientsService";
import * as productService from "../services/productService";
import ResponsiveAppBar from "../components/Navbar";
import { Link } from "react-router";

const AddNewProductsPage = () => {
  // const navigate = useNavigate();
  const { clientId } = useParams();
  const [client, setClient] = useState({});
  const [productId, setProductId] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [clientProductsToSell, setClientProductsToSell] = useState([]);



  async function handleAddToClient(productId) {
    //event.preventDefault()
    console.log("added this to client: ", productId);
    const updatedClient = await clientService.assignProductToClient(
      clientId,
      productId
    );
    console.log("updatedClient: ", updatedClient);
  }
  function handleChange(event) {
    setProductId(event.target.value);
  }

  async function handleClick() {
    const clientData = await clientService.showClient(clientId);
    console.log(clientData);
    setClient(clientData);
  }

  useEffect(() => {
    async function fetchClientDetails() {
      try {
        const clientData = await clientService.showClient(clientId);
        const productData = await productService.indexProduct();
        setClient(clientData);
        setClientProductsToSell(clientData.productsToSell);
        setAllProducts(productData);
      } catch (error) {
        console.error("Failed to fetch client details:", error);
      }
    }
    fetchClientDetails();
  }, [clientId]);

  return (
    <>
      <ResponsiveAppBar />
      <div>
        <h3>Add a new product for {client.name}</h3>
      </div>
      <div>
        Name: {client.name}
        <br />
        Contact Number: {client.handphoneNumber}
        <br />
        Priority: {client.priority}
        <br />
        Comments: {client.comments}
        <br />
        Pipeline:
        {clientProductsToSell.length === 0 ? <p>No Products Found</p> : null}
        <ol>
          {clientProductsToSell.map((product) => (
            <li key={product._id}>
              <p>
                {product.name}, {product.company}
              </p>
            </li>
          ))}
        </ol>
        Available Products: (Please add one by one)
        <ol>
          <div>
            <form onSubmit={() => handleAddToClient(productId)}>
              <select onChange={handleChange} value={productId}>
                <option disabled value="">
                  Endowment
                </option>
                {allProducts
                  .filter((product) => product.category === "Endowment")
                  .map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <button type="submit" onClick={handleClick}>
                add to client list
              </button>
            </form>
          </div>

          <div>
            <form onSubmit={() => handleAddToClient(productId)}>
              <select onChange={handleChange} value={productId}>
                <option disabled value="">
                  Investment
                </option>
                {allProducts
                  .filter((product) => product.category === "Investment")
                  .map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <button type="submit" onClick={handleClick}>
                add to client list
              </button>
            </form>
          </div>

          <div>
            <form onSubmit={() => handleAddToClient(productId)}>
              <select onChange={handleChange} value={productId}>
                <option disabled value="">
                  Life
                </option>
                {allProducts
                  .filter((product) => product.category === "Life")
                  .map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <button type="submit" onClick={handleClick}>
                add to client list
              </button>
            </form>
          </div>

          <div>
            <form onSubmit={() => handleAddToClient(productId)}>
              <select onChange={handleChange} value={productId}>
                <option disabled value="">
                  Personal Accident
                </option>
                {allProducts
                  .filter((product) => product.category === "Accident")
                  .map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <button type="submit" onClick={handleClick}>
                add to client list
              </button>
            </form>
          </div>

          <div>
            <form onSubmit={() => handleAddToClient(productId)}>
              <select onChange={handleChange} value={productId}>
                <option disabled value="">
                  Hospitalization
                </option>
                {allProducts
                  .filter((product) => product.category === "Hospitalization")
                  .map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <button type="submit" onClick={handleClick}>
                add to client list
              </button>
            </form>
          </div>

          
        </ol>
        <Button variant="outlined" type="submit" onClick={handleClick}>
          <Link to={`/clients/${clientId}`}>Go back</Link>
        </Button>
      </div>
    </>
  );
};

export default AddNewProductsPage;
