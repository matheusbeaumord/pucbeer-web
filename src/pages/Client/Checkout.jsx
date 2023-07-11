import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import { BeerContext } from '../../context/BeerContext';
import { sendProducts } from '../../services/Api/products';

import CartList from '../../components/Order_List/CartList'

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css'
import '../Pages.css'

const Checkout = () => {
  const navigateTo = useNavigate();

  const { cart, setCart } = useContext(BeerContext);

  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');

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

  const goToOrders = () => {
    navigateTo('/orders'),
    setCart('')
  };
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
    try {
      await sendProducts(body, token);
      toast.success('Predido realizado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } catch (error) {
      toast.error(error)
    }
    setTimeout(goToOrders, timeToGoToProducts);
  };

  const disableRule = () => {
    if (street && houseNumber && finalValue) {
      return true;
    }
  };

  return (
    <div>
    <Header />
    
    <div className="checkout">
      <div>
        <CartList removeItem={true} />
      </div>
      <div className="submit-form">
        <div>
          <Typography variant="body1" className="price">
            {`Total: R$ ${accPrice(finalValue)}`}
          </Typography>
        </div>
        <div className='adress-content'>
          <TextField
            label="Endereço"
            type="text"
            size='small'
            className='adress'
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            data-testid="checkout-street-input"
          />
          <TextField
            label="Número"
            type="text"
            size='small'
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
            data-testid="checkout-house-number-input"
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="inherit"

            disabled={!disableRule()}
            onClick={finalizarPedido}
            data-testid="checkout-finish-btn"
          >
            Finalizar Pedido
          </Button>
        </div>
        <ToastContainer />
      </div>
    </div>
  </div>
  );
};

export default Checkout;
