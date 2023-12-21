import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { Button} from '@mui/material';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function PaymentForm() {
  const navigate=useNavigate();
  const [cardName, setCardName] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [expDate, setExpDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');


  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!cardName || !cardNumber || !expDate || !cvv) {
      alert('Please fill in all required fields.');
      return;
    }


    navigate("/ordersuccess")
    // Process form submission
    alert('Order placed successfully');
   
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box sx={{ maxWidth: 400, padding: '2rem', backgroundColor: 'whitesmoke' }}>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={cardName}
            onChange={(event) => setCardName(event.target.value)}
            error={!cardName}
            helperText={!cardName && 'This field is required'}
            sx={{ mb: 2 }}
          />
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
            error={!cardNumber}
            helperText={!cardNumber && 'This field is required'}
            sx={{ mb: 2 }}
          />
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={expDate}
            onChange={(event) => setExpDate(event.target.value)}
            error={!expDate}
            helperText={!expDate && 'This field is required'}
            sx={{ mb: 2 }}
          />
          <TextField
            required
            
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            error={!cvv}
            // helperText={!cvv && 'This field is required'}
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
            sx={{ mb: 2 }}
          />
          
          <Button type="submit" variant="contained">
            Confirm order
          </Button>
          
        </form>
      </Box>
    </Box>
  );
}
