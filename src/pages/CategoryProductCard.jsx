import { useEffect, useState } from 'react';
import * as productService from '../services/productService';
import ResponsiveAppBar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { useParams, Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const CategoryProductCard = () => {
    const [productList, setProductlist] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        async function fetchProductsByCategory() {
            try {
                const productData = await productService.getProductsByCategory(categoryId);
                setProductlist(productData);
            } catch (error) {
                console.error("Error fetching products by category:", error);
            }
        }
        fetchProductsByCategory();
    }, [categoryId]);

    return (
        <>
            <ResponsiveAppBar />
            <Container sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Products in Category: {categoryId}
                </Typography>
                {productList.length > 0 ? (
                    <Grid container spacing={3}>
                        {productList.map((product) => (
                            <Grid item key={product._id} xs={12} sm={6} md={4}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography variant="body1">No products found in this category.</Typography>
                )}
                <Button
                    variant="outlined"
                    component={Link}
                    to="/products/category"
                    sx={{ mt: 3 }}
                >
                    Back to Product List
                </Button>
            </Container>
        </>
    );
};

export default CategoryProductCard;