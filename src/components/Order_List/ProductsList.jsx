/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Grid, TextField, Slider, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { getAllProducts, deleteProduct } from '../../services/Api/products';
import classNames from "classnames";
import { useMatch  } from 'react-router-dom';



const ProductsList = ({ handleEdit, setFetchProducts }) => {
  const [products, setProducts] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const isOnAdmin = useMatch({
    path: '/admin/products',
  });

  useEffect(() => {
    getAllProducts().then((r) => { 
      setProducts(r);
      setFilteredProducts(r);
      setMinPrice(Math.min(...r.map((product) => product.price)));
      setMaxPrice(Math.max(...r.map((product) => product.price)));
    });
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id).then(() => setFetchProducts('idle'));
  };

  const handleNameSearch = (event) => {
    const name = event.target.value.toLowerCase();
    setSearchName(name);
    filterProducts(name, priceRange);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    filterProducts(searchName, newValue);
  };

  const filterProducts = (name, range) => {
    const [minPrice, maxPrice] = range;
    const filtered = products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(name);
      const priceMatch = product.price >= minPrice && product.price <= maxPrice;
      return nameMatch && priceMatch;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div className={classNames({
        'admin-searchBar': isOnAdmin,
        "searchBar": !isOnAdmin
      })}>
        <h2>
        Filtro
        </h2>
          <div>
            <TextField
            label="Search by name"
            value={searchName}
            onChange={handleNameSearch}
            placeholder="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            />
          </div>
          <div style={{minWidth: '300px', textAlign: 'center'}}>
            <Typography >
            Faixa de preço
            </Typography>
            <Slider
            aria-label="Always visible"
            value={priceRange}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
            onChange={handlePriceChange}
            />
          </div>
      </div>
      <div>
        <Grid container spacing={2}>
          {filteredProducts.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} handleEdit={handleEdit} handleDelete={handleDelete} />
          </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ProductsList;
