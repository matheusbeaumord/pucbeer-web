import { useContext } from 'react';

import { Typography, Button } from '@mui/material';
import { BeerContext } from '../../context/BeerContext';



// eslint-disable-next-line react/prop-types
const CartList = ({ removeItem }) => {

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
    <div>
      <Typography variant="h5" gutterBottom>
        Carrinho
      </Typography>
      {Object.values(cart).map((item, index) => (
        <div key={index}>
          <Typography variant="body1">
            Produto: {item.product.name}
          </Typography>
          <Typography variant="body2">
            Quantidade: {item.quantity}
          </Typography>
          <Typography variant="body2">
            Preço: R$ {item.product.price}
          </Typography>
          {removeItem && 
            <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveFromCart(item.product)}
            >
                Remover
            </Button>
          }
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CartList;