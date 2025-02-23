import imageone from '../assets/stockFamilyPhotos/imageone.jpg' ;
// import imagetwo from '../assets/stockFamilyPhotos/imagetwo.jpg' ;
// import imagethree from '../assets/stockFamilyPhotos/imagethree.jpg' ;
// import imagefour from '../assets/stockFamilyPhotos/imagefour.jpg' ;
// import imagefive from '../assets/stockFamilyPhotos/imagefive.jpg' ;
// import imagesix from '../assets/stockFamilyPhotos/imagesix.jpg' ;
// import imageseven from '../assets/stockFamilyPhotos/imageseven.jpg' ;
import { useEffect, useState } from 'react';
import * as productService from '../services/productService';
import ResponsiveAppBar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { useParams, Link } from 'react-router';


const CategoryProductCard = ({ category }) => {

    const [productList, setProductlist] = useState([]);

      useEffect(() => {
        async function ProductsbyCategory() {
          const productData = await productService.getProductsByCategory(categoryId);
          console.log(productData);
        //   setProduct(productData);
        setProductlist(productData);
        }
        ProductsbyCategory();
      }, []);


    const { categoryId } = useParams();

    return (
        <>
            <ResponsiveAppBar />
            <div>
                {productList.length > 0 ? (
                    productList.map((product) => (
                        <ProductCard key={product.id} product={product}  />
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
        </>
    );
};


export default CategoryProductCard;