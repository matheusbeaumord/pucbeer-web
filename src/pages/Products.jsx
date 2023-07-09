import { useContext } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header/Header';
import HeaderAdmin from '../components/Header/HeaderAdmin';
import ProductsList from '../components/Order_List/ProductsList';
import { BeerContext } from '../context/BeerContext';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartList from '../components/Order_List/CartList'

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
      <Typography variant="h1">Produtos</Typography>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <ProductsList cart={cart} />
        </div>
        <div>
          <CartList cart={cart}/>
          <Button
            onClick={() => navigateTo('/checkout')}
            variant="contained"
            disabled={!value > 0}
            fullWidth
            color="inherit"
            style={{marginTop: '15%'}}
          >
            {`Ver Carrinho R$ ${accPrice}`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
