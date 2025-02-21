import { useState } from "react"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import * as productService from '../services/productService'
import ResponsiveAppBar from "../components/Navbar";

export default function NewProducts() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name:'',
        company:'',
        category:'',
        link:''
    })
    async function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        const newProduct = await productService.createProduct(formData)
        console.log('new product: ', newProduct)
    } 
    function handleClick() {
        navigate('/products')   
    }
    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    return (
        <>
        <ResponsiveAppBar/>
        <h1>create a new product</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">name: </label>
            <input id='name' onChange={handleChange} name='name'></input>

            <label htmlFor="company">company:</label>
            <input id='company' onChange={handleChange} name='company'></input>
            
            <label htmlFor="category">category:</label>
            <select id='category' onChange={handleChange} name='category'>
                <option value='' disabled selected>Select Category</option>
                <option value='Life'>Life</option>
                <option value='Hospitalization'>Hospitalization</option>
                <option value='Accident'>Accident</option>
                <option value='Investment'>Investment</option>
                <option value='Endowment'>Endowment</option>
            </select>

            <label htmlFor="link">link</label>
            <input id='link' onChange={handleChange} name='link'></input>

            <Button onClick={handleClick} variant="outlined" type='submit'>Create Product!</Button>
            <Button onClick={handleClick} variant="outlined" >Back to all products</Button>

        </form>

        </>
    )
}