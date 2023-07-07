import React from 'react';
import HeaderAdmin from '../../components/Header/HeaderAdmin';
import AdminOrdersList from '../../components/Admin/AdminOrdersList';

const AdminOrders = () => (
  <div>
    <HeaderAdmin />
    <h1>Admin - Pedidos</h1>
    <AdminOrdersList />
  </div>);

export default AdminOrders;
