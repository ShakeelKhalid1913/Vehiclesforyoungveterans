import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
  Divider,
  useTheme,
  Avatar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  Dashboard as DashboardIcon,
  DirectionsCar as CarsIcon,
  Assessment as ReportsIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const AdminHeader = () => {
  const theme = useTheme();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchorEl(null);
  };

  const menuItems = [
    { label: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
    { label: 'Inventory', icon: <CarsIcon />, path: '/admin/inventory' },
    { label: 'Reports', icon: <ReportsIcon />, path: '/admin/reports' },
    { label: 'Settings', icon: <SettingsIcon />, path: '/admin/settings' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        color: theme.palette.text.primary
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: 'none' } }}
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component={Link} to="/admin" sx={{ 
          color: theme.palette.primary.main,
          textDecoration: 'none',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center'
        }}>
          VY Admin
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, ml: 4 }}>
          {menuItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              startIcon={item.icon}
              sx={{
                mx: 1,
                color: location.pathname === item.path ? theme.palette.primary.main : theme.palette.text.secondary,
                '&:hover': {
                  backgroundColor: theme.palette.grey[100],
                }
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Notifications */}
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        {/* Profile */}
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>A</Avatar>
        </IconButton>

        {/* Profile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: { width: 200 }
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <AccountCircle sx={{ mr: 2 }} /> Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleMenuClose}>
            <LogoutIcon sx={{ mr: 2 }} /> Logout
          </MenuItem>
        </Menu>

        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileMenuAnchorEl}
          open={Boolean(mobileMenuAnchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: { width: 200 }
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              component={Link}
              to={item.path}
              onClick={handleMenuClose}
              sx={{
                color: location.pathname === item.path ? theme.palette.primary.main : 'inherit',
              }}
            >
              {item.icon}
              <Typography sx={{ ml: 2 }}>{item.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
