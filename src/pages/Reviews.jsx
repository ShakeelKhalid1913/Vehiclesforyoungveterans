import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Rating, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Reviews = () => {
  const theme = useTheme();

  const reviews = [
    {
      name: "John M.",
      role: "Army Veteran",
      rating: 5,
      review: "The vehicle donation process was incredibly smooth. The team was professional and made everything easy from start to finish.",
      image: "/avatars/john.jpg"
    },
    {
      name: "Sarah K.",
      role: "Navy Veteran",
      rating: 5,
      review: "I'm grateful for the support I received through this program. The donation helped me transition to civilian life successfully.",
      image: "/avatars/sarah.jpg"
    },
    {
      name: "Michael R.",
      role: "Vehicle Donor",
      rating: 5,
      review: "Knowing my old car is helping veterans makes me feel great. The pickup was quick and the tax deduction was an added bonus.",
      image: "/avatars/michael.jpg"
    },
    {
      name: "Lisa P.",
      role: "Air Force Veteran",
      rating: 5,
      review: "The resources provided through this program are invaluable. Thank you for supporting our veteran community!",
      image: "/avatars/lisa.jpg"
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
            What People Are Saying
          </Typography>

          <Grid container spacing={4}>
            {reviews.map((review, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      background: theme.palette.grey[50],
                      position: 'relative',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        background: theme.palette.grey[100],
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ position: 'absolute', top: 20, right: 20, color: theme.palette.primary.main, opacity: 0.2 }}>
                        <FormatQuoteIcon sx={{ fontSize: 40 }} />
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          src={review.image}
                          alt={review.name}
                          sx={{ 
                            width: 64, 
                            height: 64,
                            mr: 2,
                            border: `2px solid ${theme.palette.primary.main}`
                          }}
                        />
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {review.name}
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary">
                            {review.role}
                          </Typography>
                          <Rating value={review.rating} readOnly size="small" sx={{ mt: 0.5 }} />
                        </Box>
                      </Box>
                      
                      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                        &quot;{review.review}&quot;
                      </Typography>
                    </CardContent>
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

export default Reviews;
