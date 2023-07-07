import React from 'react';
import Header from '../../components/Header/Header';
import OrdersList from '../../components/Order_List/OrdersList';

const Orders = () => (
  <div>
    <Header />
    <h1 data-testid="top-title">Meus Pedidos</h1>
    <OrdersList />
  </div>
);

export default Orders;
