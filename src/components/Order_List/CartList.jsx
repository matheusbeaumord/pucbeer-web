import { useContext } from 'react';

import { Typography, Button } from '@mui/material';
import { BeerContext } from '../../context/BeerContext';
import { useMatch  } from 'react-router-dom';
import classNames from "classnames";
import './CartList.css';

const CartList = () => {

  const isOnCheckout = useMatch({
    path: '/checkout',

  });

  const { cart, setCart } = useContext(BeerContext);

  const handleRemoveFromCart = (product) => {
    // Verifica se o produto está no carrinho
    if (cart[product.id]) {
      // Verifica se a quantidade é maior que 1
      if (cart[product.id].quantity > 1) {

        // Se for maior que 1, decrementa a quantidade
        setCart(prevCart => ({
          ...prevCart,
          [product.id]: {
            product: product,
            quantity: prevCart[product.id].quantity - 1,
          },
        }));
      } else {
        // Se for igual a 1, remove o produto do carrinho
        setCart(prevCart => {
          const updatedCart = { ...prevCart };
          delete updatedCart[product.id];
          return updatedCart;
        });
      }
    }
  };

  return (
    <div style={{minWidth: '300px'}}>
      {Object.values(cart).map((item, index) => (
        <div 
          key={index} 
          className={classNames('cart-item', {
            "checkout-page": isOnCheckout,
          })}>
            <div>
              <Typography variant="h6">
                Produto: {item.product.name}
              </Typography>
              <Typography variant="body2" className="quantity">
                Quantidade: {item.quantity}
              </Typography>
              <Typography variant="body2" className="price">
                Preço: R$ {item.product.price}
              </Typography>
            </div>
          {!!isOnCheckout && 
            <div>
              <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => handleRemoveFromCart(item.product)}
                  size='small'
              >
                  Remover
              </Button>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default CartList;