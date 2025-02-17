import { Box, Container, Grid, Typography, Link, IconButton, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  const footerLinks = {
    'About Us': [
      { name: 'Our Mission', path: '/about' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Impact', path: '/about#impact' },
    ],
    'Services': [
      { name: 'Vehicle Donation', path: '/donate' },
      { name: 'Veteran Programs', path: '/programs' },
      { name: 'Success Stories', path: '/stories' },
    ],
    'Support': [
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="/logo.png"
              alt="VYVeterans Logo"
              sx={{
                height: 60,
                mb: 2,
                filter: 'brightness(0) invert(1)',
              }}
            />
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              VYVeterans is dedicated to supporting young veterans through vehicle donations,
              making a difference in their lives and our community.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: 'white',
                    mr: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={12} sm={6} md={2} key={category}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {category}
              </Typography>
              {links.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    display: 'block',
                    color: 'white',
                    opacity: 0.8,
                    textDecoration: 'none',
                    mb: 1,
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 4,
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} VYVeterans. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
