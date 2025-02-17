import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, ListItem, ListItemText, Box, Container, useTheme, useMediaQuery, Stack } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'How It Works', path: '/how-it-works' },
    { text: 'About', path: '/about' },
    { text: 'Reviews', path: '/reviews' },
    { text: 'FAQ', path: '/faq' },
    { text: 'Contact', path: '/contact' },
    { text: 'Donate Now', path: '/donate', highlight: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)' ,
          boxShadow:  '0 4px 20px rgba(0,0,0,0.05)',
          backdropFilter:'blur(10px)' ,
          transition: 'all 0.3s ease-in-out',
          width: '100%',
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h6" component="div" sx={{ color: theme.palette.primary.main }}>
                    VYVETERANS
                  </Typography>
                  <Box
                    component="img"
                    src="/logo.png"
                    alt="Veterans Logo"
                    sx={{
                      height: { xs: 45, sm: 55 },
                      transition: 'all 0.3s ease',
                      ml: 2,
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  />
                </Stack>
              </Link>
            </motion.div>
            
            {isMobile ? (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  color: theme.palette.primary.main,
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,1)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Stack direction="row" spacing={1}>
                {menuItems.map((item) => (
                  <motion.div
                    key={item.text}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      variant={item.highlight ? "contained" : "text"}
                      color={item.highlight ? "primary" : "secondary"}
                      sx={{
                        position: 'relative',
                        fontWeight: 600,
                        color: item.highlight ? 'white' : (scrolled ? theme.palette.grey[900] : theme.palette.grey[800]),
                        backgroundColor: item.highlight ? theme.palette.primary.main : 'transparent',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: location.pathname === item.path ? '100%' : '0%',
                          height: '2px',
                          bottom: '0',
                          left: '0',
                          backgroundColor: theme.palette.primary.main,
                          transition: 'width 0.3s ease',
                          display: item.highlight ? 'none' : 'block',
                        },
                        '&:hover': {
                          color: item.highlight ? 'white' : theme.palette.primary.main,
                          backgroundColor: item.highlight ? theme.palette.primary.dark : 'transparent',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  </motion.div>
                ))}
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: theme.palette.background.paper,
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            backdropFilter: 'blur(10px)',
          }
        }}
      >
        <Box sx={{ pt: 6, pb: 2 }}>
          <AnimatePresence>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <ListItem 
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    mb: 1,
                    borderRadius: 2,
                    mx: 2,
                    backgroundColor: item.highlight ? theme.palette.primary.main : 'transparent',
                    color: item.highlight ? 'white' : 'inherit',
                    '&:hover': {
                      backgroundColor: item.highlight 
                        ? theme.palette.primary.dark 
                        : theme.palette.action.hover,
                    },
                  }}
                >
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: 600,
                    }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
