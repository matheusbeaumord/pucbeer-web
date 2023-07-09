/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import './AdminOrderCard.css'
import { Button } from '@mui/material';
import {updateOrderStatus} from '../../services/Api/orders'
import { ToastContainer, toast } from 'react-toastify';

const AdminOrderCard = (props) => {
  const { data } = props;
  const { key, order } = data;
  const { sale_date: date, total_price: price, products } = order;
  const accPrice = parseFloat(price).toFixed(2).toString().replace('.', ',');

  const handleApprove = () => {
    try {
      toast.success('Entrega em andamento', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      updateOrderStatus(order.sale_id)

    } catch (error) {
      toast.error(error)
      throw new Error(error)
    }
  }

  return (
    <>
    <ToastContainer />

    <div
      role="button"
      tabIndex={0}
      className='card'
    >
      <div className='card-title' >
        <div>
          <h3 data-testid={`${key}-order-date`}>{`Status: ${order.status}`}</h3>
        </div>
        <div>
          <h3 data-testid={`${key}-order-date`}>{dateFormat(date, 'dd/mm')}</h3>
        </div>
      </div>
      <ul className="list-products">
        {products.map((product, index) => (
          <li key={index}>{`${product.quantity} - ${product.product_name}`}</li>
          ))}
      </ul>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
      <Button
        variant="contained"
        color="inherit"
        data-testid={`${key}-product-plus`}
        onClick={handleApprove}
        disabled={order.status !== 'Pendente'}
      >
        Aprovar
      </Button>
      <h3>{`R$ ${accPrice}`}</h3>
      </div>
    </div>
    </>

  );
};

AdminOrderCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AdminOrderCard;
