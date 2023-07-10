import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


import { useLocation } from 'react-router-dom';

export default function BasicBreadcrumbs() {
  const location = useLocation();

  const isOnAdmin = location.pathname.includes('admin');

  const pathWithoutSlash = !isOnAdmin ? location.pathname.substring(1) : location.pathname.split('/')[2]

  const locationOnApp = {
    orders: 'Pedidos',
    products: 'Produtos',
    checkout: 'Carrinho',
    profile: 'Perfil',
  }

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" style={{
        fontSize: '24px', fontWeight: 'bold', padding: '1%'
        }}>
        <Link underline="hover" color="inherit">
          Home
        </Link>
        {location.pathname !== '/' && (
          <Link
            underline="hover"
            color="inherit"
          >
            {locationOnApp[pathWithoutSlash]}
          </Link>
        )}
      </Breadcrumbs>
    </div>
  );
}

