import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  useTheme,
  Chip,
  Tabs,
  Tab,
  Menu,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import TimelineIcon from '@mui/icons-material/Timeline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DataGrid } from '@mui/x-data-grid';

const Inventory = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleMenuClick = (event, vehicle) => {
    setAnchorEl(event.currentTarget);
    setSelectedVehicle(vehicle);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedVehicle(null);
  };

  const stats = [
    {
      title: 'Total Vehicles',
      value: '126',
      icon: <InventoryIcon sx={{ fontSize: 40 }} />,
      change: '+8% from last month',
    },
    {
      title: 'In Transit',
      value: '23',
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      change: '+12% from last month',
    },
    {
      title: 'Average Days in Stock',
      value: '15',
      icon: <TimelineIcon sx={{ fontSize: 40 }} />,
      change: '-2 days from last month',
    },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'vin', headerName: 'VIN', width: 150 },
    { field: 'vehicle', headerName: 'Vehicle', width: 200 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'status', headerName: 'Status', width: 130,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === 'In Stock' ? 'success' :
            params.value === 'In Transit' ? 'warning' :
            params.value === 'Sold' ? 'info' : 'default'
          }
          size="small"
        />
      ),
    },
    { field: 'daysInStock', headerName: 'Days in Stock', width: 130 },
    { field: 'estimatedValue', headerName: 'Est. Value', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={(e) => handleMenuClick(e, params.row)}>
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      vin: '1HGCM82633A123456',
      vehicle: '2020 Honda Accord',
      location: 'Main Warehouse',
      status: 'In Stock',
      daysInStock: 12,
      estimatedValue: '$18,500',
    },
    {
      id: 2,
      vin: '2T2BK1BA7FC123456',
      vehicle: '2019 Toyota Camry',
      location: 'North Facility',
      status: 'In Transit',
      daysInStock: 5,
      estimatedValue: '$16,800',
    },
    {
      id: 3,
      vin: '1FMCU0HD3AK123456',
      vehicle: '2021 Ford F-150',
      location: 'South Facility',
      status: 'Sold',
      daysInStock: 20,
      estimatedValue: '$32,000',
    },
  ];

  return (
    <Box sx={{ p: 3, pt: 10 }}>
      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ 
              height: '100%',
              transition: 'all 0.3s ease-in-out',
              boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2), 0 10px 30px rgba(0,0,0,0.12)',
              }
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {stat.title}
                    </Typography>
                  </Box>
                  <Box sx={{ color: theme.palette.primary.main }}>
                    {stat.icon}
                  </Box>
                </Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: 2,
                    color: theme.palette.success.main,
                  }}
                >
                  {stat.change}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Content */}
      <Paper elevation={0} sx={{ 
        p: 3,
        boxShadow: '0 4px 15px rgba(0,0,0,0.15), 0 6px 20px rgba(0,0,0,0.1)',
        borderRadius: 2,
      }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">Vehicle Inventory</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              size="small"
              placeholder="Search inventory..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="outlined"
              startIcon={<FilterListIcon />}
            >
              Filter
            </Button>
          </Box>
        </Box>

        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}
        >
          <Tab label="All Vehicles" />
          <Tab label="In Stock" />
          <Tab label="In Transit" />
          <Tab label="Sold" />
        </Tabs>

        {/* Data Grid */}
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          autoHeight
          disableSelectionOnClick
          sx={{
            '& .MuiDataGrid-cell': {
              borderColor: theme.palette.divider,
            },
          }}
        />
      </Paper>

      {/* Actions Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
        <MenuItem onClick={handleMenuClose}>Update Location</MenuItem>
        <MenuItem onClick={handleMenuClose}>Mark as Sold</MenuItem>
        <MenuItem onClick={handleMenuClose}>Print Report</MenuItem>
      </Menu>
    </Box>
  );
};

export default Inventory;
