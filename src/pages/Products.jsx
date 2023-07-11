import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header/Header';
import HeaderAdmin from '../components/Header/HeaderAdmin';
import ProductsList from '../components/Order_List/ProductsList';
import { BeerContext } from '../context/BeerContext';
import Button from '@mui/material/Button';
import CartList from '../components/Order_List/CartList'
import './Pages.css'
import { getAllProducts} from '../services/Api/products';


const Products = () => {
  const { cart } = useContext(BeerContext);
  const navigateTo = useNavigate();

  const [fetchProducs, setFetchProducts] = useState('idle');
  const [products, setProducts] = useState([]);

  const value = Object.values(cart).reduce((t, { quantity, product }) => {
    if (!Number.isNaN(parseFloat(product.price))) {
      return t + quantity * parseFloat(product.price);
    }
    return 0;
  }, 0);

  const accPrice = parseFloat(value).toFixed(2).toString().replace('.', ',');
  const admin = JSON.parse(localStorage.getItem('role'));
  
  useEffect(() => {
    if (fetchProducs === 'idle') {
      setFetchProducts('pending')
      setProducts([])
      getAllProducts().then((r) => {
        setFetchProducts('done')
        setProducts(r)
      });
    }
  }, [fetchProducs]);
  
  return (
    <div>
      {admin === 'administrator' ? <HeaderAdmin /> : <Header />}
      <div className="products">
        <div className="client-products-list">
        <ProductsList products={products} />
        </div>
        <div className="client-cart">
          <CartList cart={cart}/>
          <Button
            onClick={() => navigateTo('/checkout')}
            variant="contained"
            disabled={!value > 0}
            fullWidth
            color="inherit"
            style={{marginTop: '5%'}}
          >
            {`R$ ${accPrice}`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
