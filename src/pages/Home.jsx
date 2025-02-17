import { Box, Container, Typography, Button, Grid, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const Home = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <DirectionsCarIcon sx={{ fontSize: 40 }} />,
      title: 'Easy Vehicle Donation',
      description: 'Simple and hassle-free process to donate your vehicle. We handle all the paperwork and pickup.',
    },
    {
      icon: <MilitaryTechIcon sx={{ fontSize: 40 }} />,
      title: 'Supporting Veterans',
      description: 'Your donation directly helps veterans transition to civilian life and build successful careers.',
    },
    {
      icon: <VolunteerActivismIcon sx={{ fontSize: 40 }} />,
      title: 'Tax Deductible',
      description: 'All donations are tax-deductible to the full extent allowed by law.',
    },
  ];

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(rgba(11, 36, 71, 0.9), rgba(11, 36, 71, 0.8))`,
          color: 'white',
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
          position: 'relative',
          width: '100%',
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                  Support Veterans Through Vehicle Donation
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  Transform your unused vehicle into hope and opportunity for our veterans
                </Typography>
                <Button
                  component={Link}
                  to="/donate"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.grey[100],
                    },
                  }}
                >
                  Donate Your Vehicle
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth={false} sx={{ py: 8, px: { xs: 2, sm: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card 
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    '&:hover': {
                      backgroundColor: theme.palette.grey[50],
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Impact Section */}
      <Box
        sx={{
          py: 10,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ 
                mb: 4,
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Our Impact
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 6, 
                maxWidth: '800px', 
                mx: 'auto',
                opacity: 0.9 
              }}
            >
              Since our founding, VYVeterans has helped thousands of veterans transition successfully to civilian life. Your vehicle donations have made a significant impact:
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {[
                { number: '1000+', label: 'Vehicles donated', icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
                { number: '$2M+', label: 'Raised for veteran programs', icon: <VolunteerActivismIcon sx={{ fontSize: 40 }} /> },
                { number: '500+', label: 'Veterans supported', icon: <MilitaryTechIcon sx={{ fontSize: 40 }} /> },
              ].map((stat, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 2,
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          background: 'rgba(255, 255, 255, 0.15)',
                        },
                      }}
                    >
                      <Box sx={{ mb: 2, color: 'white' }}>
                        {stat.icon}
                      </Box>
                      <Typography 
                        variant="h3" 
                        component="div" 
                        sx={{ 
                          mb: 1,
                          fontWeight: 'bold',
                          background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography variant="h6" sx={{ opacity: 0.9 }} color='white'>
                        {stat.label}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
