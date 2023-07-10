/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BeerContext } from '../../context/BeerContext';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import { useMatch  } from 'react-router-dom';


const ProductCard = ({product, handleEdit, handleDelete}) => {
  const { name, price, urlImage, id } = product;
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart } = useContext(BeerContext);
  const accPrice = price.replace('.', ',');

  if (!localStorage.getItem('token')) {
    return (<Link to="/login" />);
  }

  const isOnCheckout = useMatch({
    path: '/admin/produtos',
  });  

  const handleAddToCart = () => {
    // Verifica se o produto já está no carrinho
    setQuantity(quantity + 1)
    if (cart[product.id]) {
      // Se estiver, incrementa a quantidade
      setCart(prevCart => ({
        ...prevCart,
        [product.id]: {
          product: product,
          quantity: prevCart[product.id].quantity + 1,
        },
      }));
    } else {
      // Se não estiver, adiciona o produto ao carrinho
      setCart(prevCart => ({
        ...prevCart,
        [product.id]: {
          product: product,
          quantity: 1,
        },
      }));
    }
  };

  const handleRemoveFromCart = () => {
    // Verifica se o produto está no carrinho
    if (quantity > 0)setQuantity(quantity - 1);
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
    <Card className="card-item" sx={{ display: 'flex', width: 200, height: 300, justifyContent: 'space-between', flexDirection: 'column',  background: '#ffffff33', borderRadius: '10px'}}>
      <Box display="flex" flexDirection="column" alignItems="center" my={2}>
        <CardMedia
          component="img"
          alt={`${product.id}-product-img`}
          image={urlImage}
          sx={{
            width: 100,
            height: 110,
          }}
        />
        <CardContent sx={{ display: 'flex', height: 180, justifyContent: 'space-between', flexDirection: 'column'}}>
          <Typography variant="h5" component="h2" align="center" >
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {`R$ ${accPrice}`}
          </Typography>
          { !isOnCheckout ? (
              <Grid container alignItems="center" justifyContent="center" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={handleRemoveFromCart}
                  >
                    -
                  </Button>
                </Grid>
                <Grid item>
                  <Typography variant="body2">{quantity}</Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={handleAddToCart}
                  >
                    +
                  </Button>
                </Grid>
              </Grid>
              ) : (
                <Grid container alignItems="center" justifyContent="center" spacing={1}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="inherit"
                      onClick={() => handleEdit(true, product)}
                    >
                      Editar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="inherit"
                      onClick={() => handleDelete(product.id)}
                    >
                      Excluir
                    </Button>
                  </Grid>
                </Grid>
              )
        }
        </CardContent>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ProductCard;
