import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';
import Products from './pages/Products';

import ClientProfile from './pages/Client/Profile';
import Orders from './pages/Client/Orders';
import OrdersDetail from './pages/Client/OrdersDetail';
import Checkout from './pages/Client/Checkout';
import AdminProfile from './pages/Admin/Profile';
import AdminOrders from './pages/Admin/AdminOrders';
import AdminProducts from './pages/Admin/AdminProducts';
import {Provider} from './context/BeerContext';

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/admin/orders' element={<AdminOrders/>} />
          <Route exact path='/admin/products' element={<AdminProducts/>} />
          <Route exact path='/admin/profile' element={<AdminProfile/>} />
          <Route exact path='/products' element={<Products/>} />
          <Route exact path='/orders' element={<Orders/>} />
          <Route exact path='/orders/:numeroDoPedido' element={<OrdersDetail/>} />
          <Route exact path='/profile' element={<ClientProfile/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
        </Routes>
    </Router>
  </Provider>
  )
}

export default App
