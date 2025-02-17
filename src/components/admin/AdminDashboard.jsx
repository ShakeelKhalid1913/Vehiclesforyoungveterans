import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  useTheme,
  Button,
  InputBase
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DonationDetailsDialog from './DonationDetailsDialog';

const AdminDashboard = () => {
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const theme = useTheme();

  const handleViewDetails = (donation) => {
    setSelectedDonation(donation);
    setDialogOpen(true);
  };

  const handleEditDetails = (donation) => {
    setSelectedDonation(donation);
    setEditDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditDialogOpen(false);
    setSelectedDonation(null);
  };

  // eslint-disable-next-line no-unused-vars
  const handleSaveAdminDetails = (updatedDonation) => {
    // TODO: Implement save functionality
    handleCloseDialog();
  };

  const stats = [
    {
      icon: <DirectionsCarIcon sx={{ fontSize: 40 }} />,
      title: 'Total Donations',
      value: '156',
      change: '+12%',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: 'Active Donors',
      value: '89',
      change: '+5%',
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 40 }} />,
      title: 'Total Value',
      value: '$342K',
      change: '+8%',
    },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'firstName', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1.5 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'vehicleMake', headerName: 'Vehicle', flex: 1.5 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            backgroundColor:
              params.value === 'Pending'
                ? theme.palette.warning.light
                : params.value === 'Completed'
                ? theme.palette.success.light
                : theme.palette.info.light,
            color:
              params.value === 'Pending'
                ? theme.palette.warning.dark
                : params.value === 'Completed'
                ? theme.palette.success.dark
                : theme.palette.info.dark,
            px: 2,
            py: 0.5,
            borderRadius: 1,
            width: '100%',
            textAlign: 'center',
          }}
        >
          {params.value}
        </Box>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton 
            onClick={() => handleViewDetails(params.row)}
            sx={{ 
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.lighter,
              }
            }}
          >
            <VisibilityIcon />
          </IconButton>
          <IconButton 
            onClick={() => handleEditDetails(params.row)}
            sx={{ 
              color: theme.palette.secondary.main,
              '&:hover': {
                backgroundColor: theme.palette.secondary.lighter,
              }
            }}
          >
            <EditIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      date: '2025-02-17',
      vin: '1HGCM82633A123456',
      vehicleYear: '2020',
      vehicleMake: 'Honda',
      vehicleModel: 'Accord',
      estimatedMileage: '45,000',
      titleOwnerName: 'John Doe',
      hasTitleAndLien: true,
      isRunning: true,
      canBeDriven: true,
      issues: 'Minor scratch on rear bumper',
      firstName: 'John',
      lastName: 'Doe',
      phone: '555-0123',
      email: 'john@example.com',
      address: '123 Main St, City, State 12345',
      pickupAddress: '123 Main St, City, State 12345',
      status: 'Pending',
    },
    {
      id: 2,
      date: '2025-02-16',
      vin: '1NXBU40E79Z123456',
      vehicleYear: '2019',
      vehicleMake: 'Toyota',
      vehicleModel: 'Camry',
      estimatedMileage: '60,000',
      titleOwnerName: 'Jane Smith',
      hasTitleAndLien: true,
      isRunning: true,
      canBeDriven: true,
      issues: 'None',
      firstName: 'Jane',
      lastName: 'Smith',
      phone: '555-0124',
      email: 'jane@example.com',
      address: '456 Oak St, City, State 12345',
      pickupAddress: '456 Oak St, City, State 12345',
      status: 'Completed',
    },
    {
      id: 3,
      date: '2025-02-15',
      vin: '1FMCU0HD3AK123456',
      vehicleYear: '2021',
      vehicleMake: 'Ford',
      vehicleModel: 'F-150',
      estimatedMileage: '20,000',
      titleOwnerName: 'Mike Johnson',
      hasTitleAndLien: true,
      isRunning: true,
      canBeDriven: true,
      issues: 'None',
      firstName: 'Mike',
      lastName: 'Johnson',
      phone: '555-0125',
      email: 'mike@example.com',
      address: '789 Pine St, City, State 12345',
      pickupAddress: '789 Pine St, City, State 12345',
      status: 'In Progress',
    },
  ];

  return (
    <Box sx={{ p: 3, pt: 10 }}>
      {/* Stats Cards */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  bgcolor: theme.palette.primary.main,
                  '& .MuiTypography-root': {
                    color: 'white',
                  },
                  '& .card-icon': {
                    color: 'white',
                  }
                }
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="h4" sx={{ 
                        mb: 1,
                        transition: 'color 0.3s ease-in-out'
                      }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="subtitle2" sx={{
                        color: 'text.secondary',
                        transition: 'color 0.3s ease-in-out'
                      }}>
                        {stat.title}
                      </Typography>
                    </Box>
                    <Box className="card-icon" sx={{ 
                      color: theme.palette.primary.main,
                      transition: 'color 0.3s ease-in-out'
                    }}>
                      {stat.icon}
                    </Box>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mt: 2,
                      color: theme.palette.success.main,
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'color 0.3s ease-in-out'
                    }}
                  >
                    {stat.change}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Donations Table */}
      <Box sx={{ mt: 4 }}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
              Recent Donations
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: 'background.paper',
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                  px: 1,
                }}
              >
                <InputBase
                  placeholder="Search donations..."
                  sx={{ ml: 1 }}
                />
                <IconButton type="button" sx={{ p: 1 }}>
                  <SearchIcon />
                </IconButton>
              </Box>
              <Button
                variant="outlined"
                startIcon={<FilterListIcon />}
                sx={{
                  color: theme.palette.text.primary,
                  borderColor: theme.palette.divider,
                }}
              >
                Filter
              </Button>
            </Box>
          </Box>

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
      </Box>

      {/* View Dialog */}
      <DonationDetailsDialog
        open={dialogOpen}
        donation={selectedDonation}
        onClose={handleCloseDialog}
        isEdit={false}
      />

      {/* Edit Dialog */}
      <DonationDetailsDialog
        open={editDialogOpen}
        donation={selectedDonation}
        onClose={handleCloseDialog}
        onSave={handleSaveAdminDetails}
        isEdit={true}
      />
    </Box>
  );
};

export default AdminDashboard;
