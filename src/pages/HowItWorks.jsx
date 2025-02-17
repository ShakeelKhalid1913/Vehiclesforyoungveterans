import { Box, Container, Typography, Grid, Card, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PaidIcon from '@mui/icons-material/Paid';

const HowItWorks = () => {
  const theme = useTheme();

  const steps = [
    {
      icon: <AssignmentIcon sx={{ fontSize: 48 }} />,
      title: '1. Fill Out the Form',
      description: 'Complete our simple online donation form with your vehicle and contact information.',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 48 }} />,
      title: '2. Schedule Pickup',
      description: 'We\'ll contact you to arrange a convenient pickup time at your location.',
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 48 }} />,
      title: '3. Free Towing',
      description: 'Our professional team will pick up your vehicle at no cost to you.',
    },
    {
      icon: <PaidIcon sx={{ fontSize: 48 }} />,
      title: '4. Receive Tax Deduction',
      description: 'Get your tax deduction receipt and feel good about supporting veterans.',
    },
  ];

  return (
    <Box sx={{ width: '100%', pt: 12, pb: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              mb: 6,
              fontWeight: 'bold',
              color: theme.palette.primary.main
            }}
          >
            How It Works
          </Typography>

          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      background: theme.palette.grey[50],
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        background: theme.palette.grey[100],
                      },
                    }}
                  >
                    <Box 
                      sx={{ 
                        mb: 2,
                        color: theme.palette.primary.main,
                        transform: 'scale(1.2)',
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        mb: 2,
                        fontWeight: 'bold',
                        color: theme.palette.primary.main
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HowItWorks;
