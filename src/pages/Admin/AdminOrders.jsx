
import HeaderAdmin from '../../components/Header/HeaderAdmin';
import OrdersList from '../../components/Order_List/OrdersList';

const AdminOrders = () => (
  <div>
    <HeaderAdmin />
    <div className="pedidos">
      <OrdersList />
    </div>
  </div>);

export default AdminOrders;
