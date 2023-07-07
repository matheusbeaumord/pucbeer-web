import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllOrders } from '../../services/Api/orders';
import AdminOrderCard from './AdminOrderCard';

const AdminOrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders(
      JSON.parse(localStorage.getItem('token')),
    ).then((r) => { setOrders(r) });
  }, []);
  if (!localStorage.getItem('token')) {
    return (<Link to="/login" />);
  }
  return (
    <div>
      <h1>Página pedidos</h1>
      {orders.map(
        (order, key) => <AdminOrderCard data={ { order, key } } key={ key } />,
      )}
    </div>);
};
export default AdminOrdersList;
