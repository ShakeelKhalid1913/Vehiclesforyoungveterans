import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const DonationDetailsDialog = ({ open, donation, onClose, isEdit = false, onSave }) => {
  const theme = useTheme();
  
  if (!donation) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [adminDetails, setAdminDetails] = useState({
    vehicleDestination: donation.vehicleDestination || '',
    arrivalDate: donation.arrivalDate || '',
    pickedUpBy: donation.pickedUpBy || '',
    pickupDate: donation.pickupDate || '',
    estimatedValue: donation.estimatedValue || '',
    remarkValue: donation.remarkValue || '',
    additionalNotes: donation.additionalNotes || '',
    status: donation.status || 'Pending',
  });

  const handleChange = (field) => (event) => {
    setAdminDetails({
      ...adminDetails,
      [field]: event.target.value,
    });
  };

  const vehicleDetails = [
    { label: 'VIN', value: donation.vin },
    { label: 'Year', value: donation.vehicleYear },
    { label: 'Make', value: donation.vehicleMake },
    { label: 'Model', value: donation.vehicleModel },
    { label: 'Estimated Mileage', value: donation.estimatedMileage },
    { label: 'Title Owner Name', value: donation.titleOwnerName },
    { label: 'Has Title and Lien Release', value: donation.hasTitleAndLien ? 'Yes' : 'No' },
    { label: 'Running Status', value: donation.isRunning ? 'Running' : 'Not Running' },
    { label: 'Can be Driven', value: donation.canBeDriven ? 'Yes' : 'No' },
    { label: 'Issues/Damage Notes', value: donation.issues || 'None' },
  ];

  const donorDetails = [
    { label: 'Name', value: `${donation.firstName} ${donation.lastName}` },
    { label: 'Phone', value: donation.phone },
    { label: 'Email', value: donation.email },
    { label: 'Address', value: donation.address },
    { label: 'Vehicle Pickup Address', value: donation.pickupAddress },
  ];

  const adminFields = [
    { label: 'Vehicle Destination', field: 'vehicleDestination', type: 'text' },
    { label: 'Arrival Date', field: 'arrivalDate', type: 'date' },
    { label: 'Picked Up By', field: 'pickedUpBy', type: 'text' },
    { label: 'Pickup Date', field: 'pickupDate', type: 'date' },
    { label: 'EST. Value', field: 'estimatedValue', type: 'text' },
    { label: 'Remark Value', field: 'remarkValue', type: 'text' },
    { label: 'Additional Running Notes', field: 'additionalNotes', type: 'textarea' },
  ];

  const statusOptions = [
    'Complete',
    'Sold',
    'Paid',
    'Requested',
    'Picked Up',
    'Delivered',
    'Aging',
    'Pending'
  ];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle sx={{ 
        bgcolor: theme.palette.primary.main, 
        color: 'white',
        display: 'flex',
        alignItems: 'center'
      }}>
        <DirectionsCarIcon sx={{ mr: 1 }} />
        {isEdit ? 'Edit Donation Details' : 'View Donation Details'}
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          {/* Left side - Vehicle and Donor Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
              Vehicle Details
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  {vehicleDetails.map((detail) => (
                    <TableRow key={detail.label}>
                      <TableCell sx={{ fontWeight: 'bold', width: '40%' }}>
                        {detail.label}
                      </TableCell>
                      <TableCell>{detail.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main, mt: 4 }}>
              Donor Details
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  {donorDetails.map((detail) => (
                    <TableRow key={detail.label}>
                      <TableCell sx={{ fontWeight: 'bold', width: '40%' }}>
                        {detail.label}
                      </TableCell>
                      <TableCell>{detail.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Right side - Admin Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.secondary.main }}>
              Additional Details (Admin)
            </Typography>
            <Box sx={{ mt: 2 }}>
              {isEdit ? (
                <Grid container spacing={2}>
                  {adminFields.map((field) => (
                    <Grid item xs={12} key={field.field}>
                      {field.type === 'textarea' ? (
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label={field.label}
                          value={adminDetails[field.field]}
                          onChange={handleChange(field.field)}
                        />
                      ) : field.type === 'date' ? (
                        <TextField
                          fullWidth
                          type="date"
                          label={field.label}
                          value={adminDetails[field.field]}
                          onChange={handleChange(field.field)}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          sx={{ mt: 1 }}
                        />
                      ) : (
                        <TextField
                          fullWidth
                          type={field.type}
                          label={field.label}
                          value={adminDetails[field.field]}
                          onChange={handleChange(field.field)}
                        />
                      )}
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select
                        value={adminDetails.status}
                        onChange={handleChange('status')}
                        label="Status"
                      >
                        {statusOptions.map((status) => (
                          <MenuItem key={status} value={status}>
                            {status}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              ) : (
                <TableContainer>
                  <Table size="small">
                    <TableBody>
                      {adminFields.map((field) => (
                        <TableRow key={field.field}>
                          <TableCell sx={{ fontWeight: 'bold', width: '40%' }}>
                            {field.label}
                          </TableCell>
                          <TableCell>
                            {donation[field.field] || 'Not set'}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', width: '40%' }}>
                          Status
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: 'inline-block',
                              px: 2,
                              py: 0.5,
                              borderRadius: 1,
                              bgcolor: theme.palette.info.light,
                              color: theme.palette.info.dark,
                            }}
                          >
                            {donation.status}
                          </Box>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        {isEdit && (
          <Button 
            onClick={() => onSave({ ...donation, ...adminDetails })}
            variant="contained" 
            color="primary"
          >
            Save Changes
          </Button>
        )}
        <Button onClick={onClose} variant="outlined">
          {isEdit ? 'Cancel' : 'Close'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DonationDetailsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func,
  isEdit: PropTypes.bool,
  donation: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    date: PropTypes.string.isRequired,
    // Vehicle Details
    vin: PropTypes.string.isRequired,
    vehicleYear: PropTypes.string.isRequired,
    vehicleMake: PropTypes.string.isRequired,
    vehicleModel: PropTypes.string.isRequired,
    estimatedMileage: PropTypes.string.isRequired,
    titleOwnerName: PropTypes.string.isRequired,
    hasTitleAndLien: PropTypes.bool.isRequired,
    isRunning: PropTypes.bool.isRequired,
    canBeDriven: PropTypes.bool.isRequired,
    issues: PropTypes.string,
    // Donor Details
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    pickupAddress: PropTypes.string.isRequired,
    // Admin Details
    vehicleDestination: PropTypes.string,
    arrivalDate: PropTypes.string,
    pickedUpBy: PropTypes.string,
    pickupDate: PropTypes.string,
    estimatedValue: PropTypes.string,
    remarkValue: PropTypes.string,
    additionalNotes: PropTypes.string,
    status: PropTypes.string.isRequired,
  }),
};

DonationDetailsDialog.defaultProps = {
  isEdit: false,
  onSave: () => {},
};

export default DonationDetailsDialog;
