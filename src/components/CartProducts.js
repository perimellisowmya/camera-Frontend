import React from 'react'
import { useCart } from 'react-use-cart'
import Header from './Header';
import {
  Box,
  Grid,
  Rating,
  Stack,
  Button,

} from "@mui/material";
import {Link} from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import './CartProduct.css'


function CartProducts() {
  const { items, isEmpty, cartTotal, removeItem } = useCart();

 

  return (
    <div>
      <Header />
      <Box  >
        <Grid item xs={12} >
          <Grid container spacing={1}>
            {isEmpty ? 'Your Cart is Empty' : 'The Cart'}
            {items.map((value) => {
              return (
                <Grid item xs={12} md={3} sx={{mt:"80px"}} key={value.id}>
                  <div className="prod">
                    <div className="imag">
                      <img
                        src={value.images[0]}
                        alt="imag"
                        className="image"
                      />
                    </div>
                    <Stack className="product-data">
                      <h3>{value.brand}</h3>
                      <h5>{value.model}</h5>
                      <Rating
                        name="read-only"
                        value={value.rating}
                        readOnly
                        size="small"
                        className="rating"
                      />
                      <p>{value.price} Rs  ({value.quantity}items)</p>
                      
                        {/* <p style={{marginTop:"5px"}}>Quantity: {value.quantity}</p> */}
                        
                    </Stack>
                    <CloseIcon
                      sx={{ marginTop: "-430px",marginLeft:"20px" }}
                      onClick={() => removeItem(value.id)}
                    />
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{
        height: "100px",
        width: "100%",
        backgroundColor: "whitesmoke",
        mt: "230px"
      }}>
        <h2>Total Rupees: {cartTotal}</h2>
        <Link to="/checkout">
        <Button variant="contained">
         
          Checkout
        
          </Button>
          </Link>
      </Box>
    </div>
  )
}

export default CartProducts;
