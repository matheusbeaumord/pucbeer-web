/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/Api/products';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';
import { deleteProduct } from '../../services/Api/products';



const ProductsList = ({ handleEdit, setFetchProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((r) => { setProducts(r); });
  }, []);


  const handleDelete = async (id) => {
    await deleteProduct(id).then(() => setFetchProducts('idle'));
  };
  
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} handleEdit={handleEdit} handleDelete={handleDelete} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductsList;
