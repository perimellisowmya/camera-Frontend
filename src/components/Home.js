import "./Home.css"
import React, { useEffect, useState } from 'react';
import Header from "./Header";

import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Rating,
  Stack,
} from "@mui/material";
// import { products } from './data.js'
import Footer from "./Footer";


const Homeee = () => {

  const navigate = useNavigate()
  const routeChange = (currentId) => {

    navigate('/productdesc', { state: { currentData: currentId, } });


  }
  const [dataa, setData] = useState([])
  const getData = () => {

    fetch('data.json', {
      headers: {
        'conTent-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {

      return response.json()

    }).then((myjson) => {

      setData(myjson)
      //  console.log(myjson)
    })
  }
  useEffect(() => {
    getData()
    console.log(dataa)

  }, [])
  return (
    <>
      <Header />
      <Box m={2}>
        <Grid mt={13} container spacing={1} justifyContent={{ sm: "start", xs: "center" }}>
          {dataa.cameras && dataa.cameras.length > 0 && dataa.cameras.map((value) => {
            return (
              <Grid item xs={12} sm={3} key={value.id}>
                <Box className="prod">
                  <div className="imag">

                    <img
                      src={value.images[0]}
                      alt="imag"
                      className="image"
                      onClick={() => routeChange(value)}
                    />

                  </div>
                  <Stack className="product-data">
                    <h3>

                      {value.brand}</h3>
                    <h5>{value.model}</h5>


                    <Rating
                      name="read-only"
                      value={value.rating}
                      readOnly
                      size="small"
                      className="rating"
                    />
                    <p>{value.price} Rs</p>


                  </Stack>
                </Box>
              </Grid>
            );
          })}
        </Grid>


      </Box>
      <Footer />
    </>

  );
};

export default Homeee;
