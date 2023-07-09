import { useEffect, useState } from 'react'
import { getOrdersFromId } from '../../services/Api/orders';
import OrderCard from './OrderCard';
import { Link } from 'react-router-dom';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersFromId(
      JSON.parse(localStorage.getItem('token')),
    ).then((r) => { setOrders(r) });
  }, []);
  
  if (!localStorage.getItem('token')) {
    return (<Link to="/login" />);
  }
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {orders.map(
        (order, key) => <OrderCard data={ { order, key } } key={ key } />,
      )}
    </div>);
};
export default OrdersList;
