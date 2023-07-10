import AdminDetailOrder from '../../components/Admin/AdminDetailOrder';
import HeaderAdmin from '../../components/Header/HeaderAdmin';

const OrdersDetail = () => (
  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

    <HeaderAdmin />
    <AdminDetailOrder />
  </div>
);

export default OrdersDetail;
