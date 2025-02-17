import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What types of vehicles do you accept?',
    answer: 'We accept most vehicles including cars, trucks, motorcycles, RVs, boats, and even non-running vehicles. The vehicle must have a clear title and be free of major damage.',
  },
  {
    question: 'Is my donation tax-deductible?',
    answer: 'Yes! Your vehicle donation is tax-deductible. We are a registered 501(c)(3) nonprofit organization, and you will receive a tax receipt for your donation.',
  },
  {
    question: 'How does the pickup process work?',
    answer: 'Once you submit your donation form, we will contact you within 24-48 hours to schedule a convenient pickup time. Our professional towing service will pick up your vehicle at no cost to you.',
  },
  {
    question: 'What documents do I need?',
    answer: 'You will need the vehicle title and registration. If you have misplaced your title, we can help guide you through the process of obtaining a replacement.',
  },
  {
    question: 'How is my donation used?',
    answer: 'Your donation directly supports our veterans through various programs including housing assistance, education, healthcare, and employment services.',
  },
  {
    question: 'Can I donate a vehicle that doesn\'t run?',
    answer: 'Yes, we accept non-running vehicles as long as they have all major components intact. Our towing service can accommodate non-running vehicles.',
  },
  {
    question: 'How long does the entire process take?',
    answer: 'The entire process typically takes 3-5 business days from initial contact to vehicle pickup. Processing of tax documentation may take an additional 2-4 weeks.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We currently operate nationwide in all 50 states. Our pickup service is available throughout the continental United States.',
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ pt: 12, pb: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Find answers to common questions about vehicle donation
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Accordion
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    sx={{
                      '&:before': { display: 'none' },
                      borderRadius: 2,
                      mb: 1,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        '& .MuiAccordionSummary-content': {
                          my: 2,
                        },
                      }}
                    >
                      <Typography variant="h6">{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography color="text.secondary">{faq.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: 'primary.main',
                  color: 'white',
                  position: 'sticky',
                  top: 100,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Still Have Questions?
                </Typography>
                <Typography paragraph>
                  Our team is here to help! Contact us for any additional questions about vehicle donation or our veterans&apos; support programs.
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Email: support@vyveterans.org
                  <br />
                  Phone: (800) 123-4567
                  <br />
                  Hours: Mon-Fri 9AM-5PM EST
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQ;
