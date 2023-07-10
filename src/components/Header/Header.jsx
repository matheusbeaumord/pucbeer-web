import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from "@mui/icons-material/AccountCircle";
import SportsBarIcon from '@mui/icons-material/SportsBar';
import Breadcrumbs from '../../utils/BreadcrumpUtil';

const Header = () => {
  let navigate = useNavigate();
  
  const logout = () => {
    navigate("/login");
    localStorage.clear();
  };

  
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static" style={{backgroundColor: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsBarIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TeleGoró
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key={'produtos'} onClick={() => {
                  handleCloseNavMenu();
                  navigate("/products");
                }}>
                <Typography textAlign="center">{'Produtos'}</Typography>
              </MenuItem>
              <MenuItem key={'pedidos'} onClick={() => {
                  handleCloseNavMenu;
                  navigate("/orders");
                }}>
                <Typography textAlign="center">{'Pedidos'}</Typography>
              </MenuItem>
              <MenuItem key={'carrinho'} onClick={() => {
                  handleCloseNavMenu;
                  navigate("/checkout");
                }}>
                <Typography textAlign="center">{'Carrinho'}</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <SportsBarIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TeleGoró
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key={'produtos'}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/products");
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {'Produtos'}
              </Button>
              <Button
                key={'pedidos'}
                onClick={() => {
                  handleCloseNavMenu;
                  navigate("/orders");
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {'Pedidos'}
              </Button>
              <Button
                key={'carrinho'}
                onClick={() => {
                  handleCloseNavMenu;
                  navigate("/checkout");
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {'Carrinho'}
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={1} onClick={() => {
                handleCloseUserMenu;
                navigate("/profile");
              }}>
                <Typography textAlign="center">{'Profile'}</Typography>
              </MenuItem>
              <MenuItem key={1} onClick={() => logout()}>
                <Typography textAlign="center">{'Logout'}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Breadcrumbs />
    </>
  );
};

export default Header;
