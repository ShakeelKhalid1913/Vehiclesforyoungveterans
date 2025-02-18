import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Alert,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  useTheme,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Settings = () => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState('password');
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [alert, setAlert] = useState(null);

  const handlePasswordChange = (field) => (event) => {
    setPasswordForm({
      ...passwordForm,
      [field]: event.target.value,
    });
  };

  const handleTogglePasswordVisibility = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate passwords
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setAlert({
        type: 'error',
        message: 'New passwords do not match',
      });
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      setAlert({
        type: 'error',
        message: 'Password must be at least 8 characters long',
      });
      return;
    }

    // TODO: Implement actual password change
    setAlert({
      type: 'success',
      message: 'Password changed successfully',
    });

    // Reset form
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const menuItems = [
    {
      id: 'password',
      icon: <LockIcon />,
      text: 'Change Password',
    },
    {
      id: 'profile',
      icon: <PersonIcon />,
      text: 'Profile Settings',
    },
    {
      id: 'notifications',
      icon: <NotificationsIcon />,
      text: 'Notification Settings',
    },
  ];

  return (
    <Box sx={{ p: 3, pt: 10 }}>
      <Grid container spacing={3}>
        {/* Settings Menu */}
        <Grid item xs={12} md={3}>
          <Paper elevation={0} sx={{ 
            p: 2,
            boxShadow: '0 4px 15px rgba(0,0,0,0.15), 0 6px 20px rgba(0,0,0,0.1)',
            borderRadius: 2,
          }}>
            <List>
              {menuItems.map((item, index) => (
                <Box key={item.id}>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={activeSection === item.id}
                      onClick={() => setActiveSection(item.id)}
                      sx={{
                        borderRadius: 1,
                        mb: 1,
                        '&.Mui-selected': {
                          backgroundColor: theme.palette.primary.main,
                          '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: activeSection === item.id ? 'white' : 'inherit' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText 
                        primary={item.text}
                        sx={{ 
                          '& .MuiListItemText-primary': {
                            color: activeSection === item.id ? 'white' : 'inherit',
                            fontWeight: activeSection === item.id ? 600 : 400,
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  {index < menuItems.length - 1 && <Divider sx={{ my: 1 }} />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Settings Content */}
        <Grid item xs={12} md={9}>
          <Paper elevation={0} sx={{ 
            p: 3,
            boxShadow: '0 4px 15px rgba(0,0,0,0.15), 0 6px 20px rgba(0,0,0,0.1)',
            borderRadius: 2,
          }}>
            {activeSection === 'password' && (
              <>
                <Typography variant="h6" gutterBottom>
                  Change Password
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                  Ensure your account is using a strong password to stay secure
                </Typography>

                {alert && (
                  <Alert 
                    severity={alert.type} 
                    sx={{ mb: 3 }}
                    onClose={() => setAlert(null)}
                  >
                    {alert.message}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Current Password"
                        type={showPassword.current ? 'text' : 'password'}
                        value={passwordForm.currentPassword}
                        onChange={handlePasswordChange('currentPassword')}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => handleTogglePasswordVisibility('current')}
                                edge="end"
                              >
                                {showPassword.current ? <VisibilityOffIcon /> : <VisibilityIcon />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="New Password"
                        type={showPassword.new ? 'text' : 'password'}
                        value={passwordForm.newPassword}
                        onChange={handlePasswordChange('newPassword')}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => handleTogglePasswordVisibility('new')}
                                edge="end"
                              >
                                {showPassword.new ? <VisibilityOffIcon /> : <VisibilityIcon />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Confirm New Password"
                        type={showPassword.confirm ? 'text' : 'password'}
                        value={passwordForm.confirmPassword}
                        onChange={handlePasswordChange('confirmPassword')}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => handleTogglePasswordVisibility('confirm')}
                                edge="end"
                              >
                                {showPassword.confirm ? <VisibilityOffIcon /> : <VisibilityIcon />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        Update Password
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </>
            )}

            {activeSection === 'profile' && (
              <Typography variant="h6">Profile Settings (Coming Soon)</Typography>
            )}

            {activeSection === 'notifications' && (
              <Typography variant="h6">Notification Settings (Coming Soon)</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
