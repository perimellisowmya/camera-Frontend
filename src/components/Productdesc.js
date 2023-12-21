import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Button, Box, Typography, Avatar, Stack, Divider, Rating } from "@mui/material";
import { deepOrange } from "@material-ui/core/colors";
import { useCart } from "react-use-cart";
import Header from "./Header";
import "./Productdescstyles.css";

function Productdesc() {
  const { addItem } = useCart();
  const { state } = useLocation();
  const { currentData } = state;

  console.log("st", state, currentData);
  const addToCart = () => {
    addItem(currentData);
  };
  return (
    <div>
      <Header />
      <Box className="carousel-container" mt={6}>
        <Carousel
          autoPlay={false}
          navButtonsAlwaysVisible
          NextIcon={<Button sx={{ position: 'absolute', right: 400, top: '50%'}}>Next</Button>}
          PrevIcon={<Button sx={{ position: 'absolute', left: 400, top: '50%' }}>Prev</Button>}
          //   height={300}
        >
          {currentData.images.map((image, index) => (
            <Box
              className="carousel"
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                position: "relative",
              }}
            >
              <img
                key={index}
                src={image}
                alt="imag"
                width={300}
                height={300}
                style={{ backgroundColor: "white", padding: "50px" }}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box
        className="product-con"
      >
        <Typography
          variant="h8"
          align="left"
          style={{ wordWrap: "break-word" }}
          my={2}
        >
          {currentData.description}
        </Typography>

        <Typography variant="h6" fontWeight="bold">
          Reviews
        </Typography>
        <Divider sx={{ bgcolor: "black", width: "100%" }} />
        <div className="review">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>J</Avatar>
          <h3> {currentData.user}</h3>
        </div>
        <Rating name="read-only" value={currentData.rating} precision={0.5} readOnly />
        <Typography variant="subtitle2" my={1}>
          {currentData.comment}
        </Typography>
        <Button onClick={() => addToCart()} variant="contained">
          Add to cart
        </Button>
      </Box>
    </div>
  );
}

export default Productdesc;
