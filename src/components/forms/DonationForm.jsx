import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Grid,
  useTheme,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const DonationForm = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    vehicle: {},
    personal: {},
    pickup: {}
  });

  const steps = ['Vehicle Information', 'Personal Details', 'Pickup Details'];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Here we would typically send the formData to an API
    console.log('Form submitted:', formData);
    // For now, just show a success message
    alert('Thank you for your donation! We will contact you shortly to arrange the pickup.');
  };

  const handleInputChange = (step, field, value) => {
    setFormData(prev => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value
      }
    }));
  };

  // Background animation elements
  const circles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 12,
        pb: 6,
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
      }}
    >
      {/* Animated background circles */}
      {circles.map((circle) => (
        <Box
          key={circle.id}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: circle.size,
            height: circle.size,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            zIndex: 0,
          }}
          animate={{
            y: ['0vh', '100vh'],
            x: ['0vw', '100vw'],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            delay: circle.delay,
            ease: 'linear',
          }}
        />
      ))}

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Impact Stats */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[
            { icon: <DirectionsCarIcon />, title: 'Vehicles Donated', value: '1,234+' },
            { icon: <VolunteerActivismIcon />, title: 'Veterans Helped', value: '5,678+' },
            { icon: <LocalShippingIcon />, title: 'Free Pickups', value: '24/7' },
          ].map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: theme.palette.primary.main, mb: 1 }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {stat.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Donate Your Vehicle
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Your vehicle donation can make a real difference in a veteran&apos;s life
            </Typography>

            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Box sx={{ mt: 4 }}>
              {activeStep === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Vehicle Make"
                        variant="outlined"
                        value={formData.vehicle.make || ''}
                        onChange={(e) => handleInputChange('vehicle', 'make', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Vehicle Model"
                        variant="outlined"
                        value={formData.vehicle.model || ''}
                        onChange={(e) => handleInputChange('vehicle', 'model', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Year"
                        variant="outlined"
                        type="number"
                        value={formData.vehicle.year || ''}
                        onChange={(e) => handleInputChange('vehicle', 'year', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="VIN (Optional)"
                        variant="outlined"
                        value={formData.vehicle.vin || ''}
                        onChange={(e) => handleInputChange('vehicle', 'vin', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Additional Details"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={formData.vehicle.additionalDetails || ''}
                        onChange={(e) => handleInputChange('vehicle', 'additionalDetails', e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </motion.div>
              )}

              {activeStep === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        value={formData.personal.firstName || ''}
                        onChange={(e) => handleInputChange('personal', 'firstName', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        value={formData.personal.lastName || ''}
                        onChange={(e) => handleInputChange('personal', 'lastName', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={formData.personal.email || ''}
                        onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone"
                        variant="outlined"
                        value={formData.personal.phone || ''}
                        onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </motion.div>
              )}

              {activeStep === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Pickup Address"
                        variant="outlined"
                        value={formData.pickup.address || ''}
                        onChange={(e) => handleInputChange('pickup', 'address', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="City"
                        variant="outlined"
                        value={formData.pickup.city || ''}
                        onChange={(e) => handleInputChange('pickup', 'city', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="State"
                        variant="outlined"
                        value={formData.pickup.state || ''}
                        onChange={(e) => handleInputChange('pickup', 'state', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="ZIP Code"
                        variant="outlined"
                        value={formData.pickup.zip || ''}
                        onChange={(e) => handleInputChange('pickup', 'zip', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Preferred Pickup Date"
                        variant="outlined"
                        type="date"
                        value={formData.pickup.preferredPickupDate || ''}
                        onChange={(e) => handleInputChange('pickup', 'preferredPickupDate', e.target.value)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                  </Grid>
                </motion.div>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="outlined"
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default DonationForm;
