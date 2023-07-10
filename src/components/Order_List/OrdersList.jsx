/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { getOrdersFromId, getAllOrders } from '../../services/Api/orders';
import OrderCard from './OrderCard';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';
import { Slider, Typography, FormControlLabel, Checkbox } from '@mui/material';
import AdminOrderCard from '../Admin/AdminOrderCard'

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const [selectedStatus, setSelectedStatus] = useState(['Pendente', 'Entregue']);

  if (!localStorage.getItem('token')) {
    return <Link to="/login" />;
  }
  const isOnAdmin = useMatch({
    path: '/admin/orders',
  });

  const endpoint = isOnAdmin ? getAllOrders : getOrdersFromId

  
  
  useEffect(() => {
    endpoint(JSON.parse(localStorage.getItem('token'))).then((r) => {
      setOrders(r);
      setFilteredOrders(r);
      setMinPrice(Math.min(...r.map((order) => order.total_price)));
      setMaxPrice(Math.max(...r.map((order) => order.total_price)));
    });
  }, []);

 

  const handleStatusChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedStatus((prevSelectedStatus) => [...prevSelectedStatus, value]);
    } else {
      setSelectedStatus((prevSelectedStatus) => prevSelectedStatus.filter((status) => status !== value));
    }
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  
  useEffect(() => {
    filterProducts(priceRange, selectedStatus);
  }, [priceRange, selectedStatus]);

  const filterProducts = (range, status) => {
    const [minPrice, maxPrice] = range;
    let filtered = orders;
  
    filtered = orders.filter((order) => {
      const priceMatch = order.total_price >= minPrice && order.total_price <= maxPrice;
      const statusMatch = status.includes(order.status);
      return priceMatch && statusMatch;
    });

    setFilteredOrders(filtered);
  };

   
  return (
    <div className="order">
      <div
        className="order-searchBar"
        >
        <h2>Filtro</h2>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                value="Pendente"
                checked={selectedStatus.includes('Pendente')}
                onChange={handleStatusChange}
              />
            }
            label="Pendente"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Entregue"
                checked={selectedStatus.includes('Entregue')}
                onChange={handleStatusChange}
              />
            }
            label="Entregue"
          />
        </div>
        <div style={{ minWidth: '300px', textAlign: 'center' }}>
          <Typography>Faixa de preço</Typography>
          <Slider
            aria-label="Always visible"
            value={priceRange}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
            onChange={handlePriceChange}
          />
        </div>
      </div>
      <div className="order-list">
        {filteredOrders.map((order, key) => (
          isOnAdmin ? <AdminOrderCard data={ { order, key } } key={ key } /> : <OrderCard data={{ order, key }} key={key} />
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
