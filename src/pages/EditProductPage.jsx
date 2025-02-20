// import { useParams } from "react-router"
// import { useEffect, useState } from "react";
// import * as productService from '../services/productService'
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { useNavigate } from "react-router";

// export default function EditProductPage () {
//     const navigate = useNavigate()
//     const {productId} = useParams()
//     const [formData, setFormData] = useState({})

//     async function handleSubmit(event) {
//         event.preventDefault()
//         console.log('updated form data: ',formData)
//         const updatedProduct = await productService.updateProduct(productId, formData)
//         console.log('updated product: ', updatedProduct)
        
//     }
//     function handleChange(event){
//         console.log(event.target.value)
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     }
//     function handleClick() {
//         navigate(`/products/${productId}`);
//     }
//      useEffect(() => { 
//             async function fetchProductDetails() {
//                 try {
//                     const clientData = await productService.showProduct(productId);
//                     setFormData(productData)
//                     console.log('product Data: ',productData)
//                 } catch (error){
//                     console.error("Failed to fetch product details:", error);
//                 }
//             } 
//             fetchProductDetails();
//         }, [productId]);

//   return (
//     <div>
//         <p>Edit details for {formData.name}</p>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Name:</label>
//                 <input type="text"name="name"  value={formData.name} onChange={handleChange}/>
//             </div>

//             <div>
//                 <label>company:</label>
//                 <input type="text" name="company" value={formData.company} onChange={handleChange} />
//             </div>

//             <div>
//                 <label>category:</label>
//                 <input type="text" name="category" value={formData.category} onChange={handleChange} />
//             </div>

//             <div>
//                 <label>link:</label>
//                 <input type="text" name="link" value={formData.link} onChange={handleChange} />
//             </div>
           

//             <div>
//                 <Button variant="outlined" type='submit' onClick={handleClick}>Confirm Changes</Button>
//                 <Button variant="outlined" type='submit' onClick={handleClick}>Go back</Button>

//             </div>
//         </form>
//     </div>
//   )
// }