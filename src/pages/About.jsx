import { Box, Container, Typography, Grid, Avatar, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const About = () => {
  const theme = useTheme();

  const values = [
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Community',
      description: 'Building strong connections between veterans and supporters.',
    },
    {
      icon: <HistoryEduIcon sx={{ fontSize: 40 }} />,
      title: 'Education',
      description: 'Providing resources for career development and personal growth.',
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
      title: 'Innovation',
      description: 'Finding creative solutions to support our veterans effectively.',
    },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Executive Director',
      description: 'Navy Veteran with 20 years of nonprofit leadership experience.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      description: 'Air Force Veteran dedicated to streamlining donation processes.',
    },
    {
      name: 'Michael Brown',
      role: 'Veteran Services Coordinator',
      description: 'Marine Corps Veteran focused on veteran support programs.',
    },
  ];

  return (
    <Box sx={{ pt: 10 }}>
      {/* Mission Section */}
      <Box
        sx={{
          background: theme.palette.primary.main,
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  VYVeterans is dedicated to supporting young veterans in their transition to civilian life through innovative vehicle donation programs.
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  Founded in 2020, we&apos;ve been committed to creating opportunities for veterans while providing a meaningful way for supporters to contribute to their success.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
          Our Values
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
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
                    {value.icon}
                  </Box>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ backgroundColor: theme.palette.grey[50], py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
            Our Team
          </Typography>
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card elevation={0} sx={{ height: '100%' }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Avatar
                        sx={{
                          width: 120,
                          height: 120,
                          margin: '0 auto',
                          mb: 2,
                          backgroundColor: theme.palette.primary.main,
                        }}
                      >
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <Typography variant="h5" gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
