import {
    Box,
    Container,
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
    Grid,
} from "@mui/material";
import {Link} from 'react-router-dom'
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [expiryMonth, setExpiryMonth] = useState("");
    const [expiryYear, setExpiryYear] = useState("");
  
    const navigate=useNavigate()
   
    const handleFormSubmit = (event) => {
        
        event.preventDefault();

        if (!name || !address || !cardNumber || !cvv || !expiryMonth || !expiryYear) {
            alert("Please fill in all required fields.");
            return;
        }

        // Proceed with the payment logic or form submission
        navigate("/payment")
      
    };
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" align="center">
                    Checkout
                </Typography>
            </Box>

            <Card variant="outlined" sx={{ mt: 2 }}>
                <CardContent>
                    <Box component="form" onSubmit={handleFormSubmit}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={!name}
                            helperText={!name && "This field is required"}
                        />

                        <TextField
                            label="Address"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            error={!address}
                            helperText={!address && "This field is required"}
                        />

                        <TextField
                            label="Credit Card Number"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type="number"
                            inputProps={{ maxLength: 16 }}
                            required
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            error={!cardNumber}
                            helperText={!cardNumber && "This field is required"}
                        />

                        <TextField
                            label="CVV"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type="number"
                            inputProps={{ maxLength: 3 }}
                            required
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            error={!cvv}
                            helperText={!cvv && "This field is required"}
                        />

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Expiry Month"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type="number"
                                    inputProps={{ min: 1, max: 12 }}
                                    required
                                    value={expiryMonth}
                                    onChange={(e) => setExpiryMonth(e.target.value)}
                                    error={!expiryMonth}
                                    helperText={!expiryMonth && "This field is required"}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Expiry Year"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type="number"
                                    inputProps={{ min: 2023 }}
                                    required
                                    value={expiryYear}
                                    onChange={(e) => setExpiryYear(e.target.value)}
                                    error={!expiryYear}
                                    helperText={!expiryYear && "This field is required"}
                                />
                            </Grid>
                        </Grid>
                        
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            sx={{ mt: 2 }}
                           
                        >

                            Pay Now
                        </Button>
                       
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}
