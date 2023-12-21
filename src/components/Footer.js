// import React from "react";
// import {  Box, Button,TextField,IconButton,Link } from "@mui/material";
// // import logo from "../images/logo.png"; 
// import { Facebook, Twitter, Instagram } from '@mui/icons-material';
// import "./Footer.css"
// const Footer = () => {
//   return (
//     <Box className="footer" sx={{mt:"200px"}}>
//       <Box className="footer-main-part">
//         <ul className="list1">
//           <h2>Resources</h2>
//           <li className="list">Geting started</li>

//           <li className="list">Help center</li>

//           <li className="list">Contact us</li>

//           <li className="list">Tutorials</li>

//           <li className="list">community</li>
//         </ul>

//         <ul className="list2">
//           <h3>Shop</h3>
//           <li className="list">All cameras</li>

//           <li className="list">Lenses</li>

//           <li className="list">cameras</li>

//           <li className="list">What's new</li>
//         </ul>
      
        

        
//       </Box>
      
//       <div className="newsletter">
//       <p>Stay up to date on the latest and greatest,get latest newsletter</p>
//       <p> member discounts and lots of inspiration</p>
//       <TextField  className="input" id="standard-basic" label="Email" variant="standard" /><br/>
//       <Button sx={{mt:"20px"}} variant="contained">Subscribe</Button>
//       </div>
      
//           <Box sx={{ color:"white", display: 'flex', justifyContent:"right",marginTop:"-160px" }}>
//             <h3>Follow us</h3>
//          <IconButton  component={Link} href="https://www.facebook.com">
//            <Facebook />
//         </IconButton>          
//         <IconButton component={Link} href="https://www.twitter.com">           
//          <Twitter />
//          </IconButton>
//          <IconButton component={Link} href="https://www.instagram.com">            
//          <Instagram />
//          </IconButton>
//      </Box>
//     </Box>
//   );
// };

// export default Footer;




import React from "react";
import {
  Box,
  Button,
  TextField,
  IconButton,
  Link,
  Typography,
  Divider,
} from "@mui/material";
// import logo from "../images/logo.png";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import "./Footer.css";
const Footer = () => {
  return (
    <Box className="footer" sx={{mt:"200px"}}  p={3}>
      <Box className="footer-main-part">
        <ul className="list1">
          <Typography variant="h6" fontWeight="bold">
            Resources
          </Typography>
          <Divider sx={{ bgcolor: "whitesmoke" }} />
          <li className="list">Geting started</li>

          <li className="list">Help center</li>

          <li className="list">Contact us</li>

          <li className="list">Tutorials</li>

          <li className="list">community</li>
        </ul>

        <ul className="list2">
          <Typography variant="h6" fontWeight="bold">
            Shop
          </Typography>
          <Divider sx={{ bgcolor: "whitesmoke" }} />
          <li className="list">All cameras</li>

          <li className="list">Lenses</li>

          <li className="list">cameras</li>

          <li className="list">What's new</li>
        </ul>
      </Box>
      <Box>
        <Box sx={{ color: "white" }} m={2}>
          <Typography variant="h6">Follow us</Typography>
          <Divider sx={{ bgcolor: "whitesmoke" }} />

          <IconButton
            component={Link}
            href="https://www.facebook.com"
           className="social-icons"
          >
            <Facebook />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.twitter.com"
            className="social-icons"
          >
            <Twitter />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.instagram.com"
            className="social-icons"
          >
            <Instagram />
          </IconButton>
        </Box>
        <div className="newsletter">
          <p>
            Stay up to date on the latest and greatest,get latest newsletter
          </p>
          <p> member discounts and lots of inspiration</p>
          <TextField
            id="filled-email"
            label="Email"
            type="email"
            size="small"
            variant="filled"
          />
          <Button size="large" variant="contained" sx={{borderRadius:'0px'}}>
            Subscribe
          </Button>
        </div>
      </Box>
    </Box>
  );
};
export default Footer;


















