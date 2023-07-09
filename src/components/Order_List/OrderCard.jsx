import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import './OrderCard.css'


const OrderCard = (props) => {
  const { data } = props;
  const { key, order } = data;
  console.log("🚀 ~ file: OrderCard.jsx:9 ~ OrderCard ~ order:", order)
  const { sale_date: date, total_price: price, products } = order;
  const accPrice = parseFloat(price).toFixed(2).toString().replace('.', ',');

  return (
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
          <li key={index}>{`${product.quantity} - ${product.name}`}</li>
          ))}
      </ul>
      <h3 style={{ alignSelf: 'flex-end'}}>{`R$ ${accPrice}`}</h3>
    </div>
  );
};

OrderCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default OrderCard;
