import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import { BeerContext } from '../../context/BeerContext';
import { sendProducts } from '../../services/Api/products';

import CartList from '../../components/Order_List/CartList'

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Checkout = () => {
  const navigateTo = useNavigate();

  const { cart } = useContext(BeerContext);

  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [endSale, setEndSale] = useState(false);

  if (!localStorage.getItem('token')) {
    return (<Link to="/login" />);
  }

  const finalValue = Object.values(cart).reduce((t, { quantity, product }) => {
    if (!Number.isNaN(parseFloat(product.price))) {
      return t + quantity * parseFloat(product.price);
    }
    return 0;
  }, 0);

  const accPrice = (price) => parseFloat(price).toFixed(2).toString().replace('.', ',');

  const backToProducts = () => navigateTo('/products');
  const timeToGoToProducts = 2000;

  const finalizarPedido = async (e) => {
    const body = {
      deliveryAddress: street,
      deliveryNumber: houseNumber,
      listProducts:  Object.values(cart).map((product) => ({
        [product.product.id]: product.quantity,
      }))
        .reduce((acc, atual) => {
          const valor = Object.values(atual)[0];
          const key = Object.keys(atual);
          acc[key] = valor;
          return acc;
        }, {}),
    };
    const token = JSON.parse(localStorage.getItem('token'));
    e.preventDefault();
    await sendProducts(body, token);
    setEndSale(true);
    setTimeout(backToProducts, timeToGoToProducts);
  };

  const disableRule = () => {
    if (street && houseNumber && finalValue) {
      return true;
    }
  };

  return (
    <div>
    <Header />
    <Typography variant="h4" data-testid="top-title">
      Checkout
    </Typography>
    <CartList removeItem={true} />
    <div>
      <Typography variant="body1" data-testid="order-total-value">
        {`Total: R$ ${accPrice(finalValue)}`}
      </Typography>
    </div>
    <div>
      <TextField
        label="Rua"
        type="text"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        data-testid="checkout-street-input"
      />
    </div>
    <div>
      <TextField
        label="Número da casa"
        type="text"
        value={houseNumber}
        onChange={(e) => setHouseNumber(e.target.value)}
        data-testid="checkout-house-number-input"
      />
    </div>
    <div>
      <Button
        variant="contained"
        disabled={!disableRule()}
        onClick={finalizarPedido}
        data-testid="checkout-finish-btn"
      >
        Finalizar Pedido
      </Button>
    </div>
    {endSale && <Typography variant="body1">Compra realizada com sucesso!</Typography>}
  </div>
  );
};

export default Checkout;
