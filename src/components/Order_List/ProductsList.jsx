import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/Api/products';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((r) => { console.log(r); setProducts(r); });
  }, []);
  
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <ProductCard data={ { product, index } } key={ index } />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductsList;
