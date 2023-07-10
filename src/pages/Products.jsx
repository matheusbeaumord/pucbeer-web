import { useContext } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header/Header';
import HeaderAdmin from '../components/Header/HeaderAdmin';
import ProductsList from '../components/Order_List/ProductsList';
import { BeerContext } from '../context/BeerContext';
import Button from '@mui/material/Button';
import CartList from '../components/Order_List/CartList'
import './Pages.css'

const Products = () => {
  const { cart } = useContext(BeerContext);
  const navigateTo = useNavigate();

  const value = Object.values(cart).reduce((t, { quantity, product }) => {
    if (!Number.isNaN(parseFloat(product.price))) {
      return t + quantity * parseFloat(product.price);
    }
    return 0;
  }, 0);

  const accPrice = parseFloat(value).toFixed(2).toString().replace('.', ',');
  const admin = JSON.parse(localStorage.getItem('role'));
  
  return (
    <div>
      {admin === 'administrator' ? <HeaderAdmin /> : <Header />}
      <div className="products">
        <div className="client-products-list">
          <ProductsList  />
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
