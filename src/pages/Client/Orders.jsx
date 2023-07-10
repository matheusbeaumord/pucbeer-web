import Header from '../../components/Header/Header';
import OrdersList from '../../components/Order_List/OrdersList';
import './Checkout.css'
import '../Pages.css'


const Orders = () => (
  <div>
    <Header />

    <div className="pedidos">
      <OrdersList />
    </div>
  </div>
);

export default Orders;
