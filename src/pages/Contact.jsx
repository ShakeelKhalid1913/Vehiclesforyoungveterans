import { Box, Container, Typography, Grid, TextField, Button, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      content: 'support@vyveterans.org',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Phone',
      content: '(555) 123-4567',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Address',
      content: '123 Veterans Way, Suite 100, Washington, DC 20001',
    },
  ];

  return (
    <Box sx={{ pt: 10 }}>
      {/* Contact Header */}
      <Box
        sx={{
          background: theme.palette.primary.main,
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9 }}>
              We&apos;re here to answer any questions about vehicle donation and our veterans&apos; programs
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Information */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {contactInfo.map((info, index) => (
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
                    textAlign: 'center',
                    p: 3,
                    '&:hover': {
                      backgroundColor: theme.palette.grey[50],
                    },
                  }}
                >
                  <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                    {info.icon}
                  </Box>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {info.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {info.content}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Form */}
      <Box sx={{ backgroundColor: theme.palette.grey[50], py: 8 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card elevation={0} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom align="center">
                Send us a Message
              </Typography>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      required
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      required
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{
                        mt: 2,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
