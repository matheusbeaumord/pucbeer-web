
import HeaderAdmin from '../../components/Header/HeaderAdmin';
import AdminOrdersList from '../../components/Admin/AdminOrdersList';

const AdminOrders = () => (
  <div>
    <HeaderAdmin />
    <div className="pedidos">
      <AdminOrdersList />
    </div>
  </div>);

export default AdminOrders;
