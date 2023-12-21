// import "./Home.css"
// import React ,{useEffect,useState}from 'react';
// import {
//   Box,
//   Button,
//   Chip,
//   Grid,
//   Rating,
//   Stack,
// } from "@mui/material";
// // import { products } from './data.js'
// import Footer from "./Footer";

// const Homeee = () => {
//     const[data,setData]=useState([])
// const getData=()=>{
//     fetch('data.json',{headers:{
//         'conTent-type':'application/json',
//         'Accept':'application/json'
//     }}).then((response)=>{
//         return response.json()
//     }).then((myjson)=>{
//        setData(myjson)
//     })
// }
// useEffect(()=>{
//     getData()
// },[])
//   return (
//     <div>
//       <Box m={1}>

//         <Grid item xs={12} md={10}>
//           <Grid container spacing={1}>
//             {data.map((element) => {
//               return (
//                 <Grid item xs={12} md={3} key={element.id}>
//                   <div className="prod">
//                     <div className="imag">
//                       <img
//                         src={element.image}
//                         alt="img"
//                         className="image"

//                       />
//                     </div>
//                     <Stack className="product-data">
//                       <h3> {element.name}</h3>
//                       <h5>{element.brand}</h5>

//                       <Rating
//                         name="read-only"
//                         value={element.rating}
//                         readOnly
//                         size="small"
//                         className="rating"
//                       />
//                       {/* <p>{element.description}</p> */}
//                       <span>

//                         <Chip label="Deal of the day" color="error" />
//                       </span>
//                       <p>{element.price} Rs</p>
//                       {/* <Button
//                           key={element.id}
//                           size="small"
//                           onClick={() => addToCart(element)}
//                           sx={{
//                             bgcolor: "#ffeb3b",
//                             color: "black",
//                             "&:hover": {
//                               backgroundColor: "#fbc02d",
//                             },
//                           }}
//                           disabled={addProduct[element.id]}
//                         >
//                           Add to cart
//                         </Button> */}
//                     </Stack>
//                   </div>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </Grid>

//       </Box>
//       <Footer/>
//     </div>
//   );
// };

// export default Homeee;


// import "./Home.css"
// import React from 'react';
// import {
//   Box,
//   Button,
//   Chip,
//   Grid,
//   Rating,
//   Stack,
// } from "@mui/material";
// // import { products } from '../../public/data.js'
// import Footer from "../src/components/Footer";

// const ProductGrid = () => {


//   return (
//     <div>
//       <Box m={1}>

//         <Grid item xs={12} md={10}>
//           <Grid container spacing={1}>
//             {products.map((element) => {
//               return (
//                 <Grid item xs={12} md={3} key={element.id}>
//                   <div className="prod">
//                     <div className="imag">
//                       <img
//                         src={element.image}
//                         alt="img"
//                         className="image"

//                       />
//                     </div>
//                     <Stack className="product-data">
//                       <h3> {element.name}</h3>
//                       <h5>{element.brand}</h5>

//                       <Rating
//                         name="read-only"
//                         value={element.rating}
//                         readOnly
//                         size="small"
//                         className="rating"
//                       />
//                       {/* <p>{element.description}</p> */}
//                       <span>

//                         <Chip label="Deal of the day" color="error" />
//                       </span>
//                       <p>{element.price} Rs</p>
//                       {/* <Button
//                           key={element.id}
//                           size="small"
//                           onClick={() => addToCart(element)}
//                           sx={{
//                             bgcolor: "#ffeb3b",
//                             color: "black",
//                             "&:hover": {
//                               backgroundColor: "#fbc02d",
//                             },
//                           }}
//                           disabled={addProduct[element.id]}
//                         >
//                           Add to cart
//                         </Button> */}
//                     </Stack>
//                   </div>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </Grid>

//       </Box>
//       <Footer/>
//     </div>
//   );
// };

// export default ProductGrid;