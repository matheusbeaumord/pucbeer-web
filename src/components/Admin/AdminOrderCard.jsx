import { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


const AdminOrderCard = (props) => {
  const { data } = props;
  const { key, order } = data;
  const [redirect, setRedirect] = useState(false);
  const { total_price: price, id,
    delivery_address: address, status, delivery_number: number } = order;
  const accPrice = parseFloat(price).toFixed(2).toString().replace('.', ',');

  if (redirect) return <Link to={ `/admin/orders/${id}` } />;

  return (
    <div
      data-testid={
        `${key}-order-card-container`
      }
      onClick={ () => setRedirect(true) }
      role="button"
      onKeyDown={ () => setRedirect(true) }
      tabIndex={ 0 }
    >
      <p data-testid={ `${key}-order-number` }>{`Pedido ${id}`}</p>
      <p data-testid={ `${key}-order-address` }>{`${address}, ${number}`}</p>
      <p data-testid={ `${key}-order-total-value` }>{`R$ ${accPrice}`}</p>
      <p data-testid={ `${key}-order-status` }>{`${status}`}</p>
    </div>);
};

AdminOrderCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AdminOrderCard;
