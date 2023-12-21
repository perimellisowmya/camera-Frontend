import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const Ordersuccess = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <CheckCircleIcon sx={{ fontSize: '6rem', color: 'green' }} />
        <Typography variant="h4" sx={{ mt: 2 }}>
          Order Placed Successfully!
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Thank you for your purchase.
        </Typography>
        <Typography variant="subtitle1">
          Your order will be processed and delivered soon.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Link to="/">
            <Button variant="contained" color="primary">
              Continue Shopping
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Ordersuccess;
