// import React, { useState } from "react";
// import {
//   AppBar,
//   Button,
//   Tab,
//   Tabs,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";

// import { useCart } from "react-use-cart";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const Header = () => {
//   const {
//     isEmpty,
//     totalItems,
//   } = useCart();

//   const [value, setValue] = useState(0);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <React.Fragment>
//       <AppBar sx={{ background: "#063970" }}>
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleDrawerToggle}
//           >
//             <MenuIcon />
//           </IconButton>



//           <Typography sx={{ fontSize: "2rem", paddingLeft: "3%" }}>
//             One Click
//             <CameraAltIcon sx={{ fontSize: "2rem" }} />
//           </Typography>

//           <Tabs
//             sx={{ marginLeft: "300px" }}
//             indicatorColor="secondary"
//             textColor="inherit"
//             value={value}
//             onChange={(e, value) => setValue(value)}
//           >
//             <Tab label="Products" />
//             {/* <Tab label="Services" /> */}
//             <Tab label="About Us" />
//             <Tab label="Contact" />
//           </Tabs>
//           <Link to="/login">
//             <Button sx={{ marginLeft: "auto", color: "white" }}>
//               Login
//             </Button>
//           </Link>
//           <Link to="/">
//             <Button sx={{ marginLeft: "10px", color: "whitesmoke" }}>
//               Homepage
//             </Button>
//           </Link>
//           <Link to="/Cartproducts">
//             {!isEmpty && (
//               <span
//                 style={{
//                   position: "relative",
//                   left: "160px",
//                   top: "15px",
//                   borderRadius: "5px",
//                   color: "red",
//                 }}
//               >
//                 {totalItems}
//               </span>
//             )}
//             <Button style={{ marginLeft: !isEmpty ? "300px" : 0 }}>
//               Cart
//             </Button>
//           </Link>
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
//         <List>
//           <ListItem button component={Link} to="/login">
//             <ListItemText primary="Login" />
//           </ListItem>
//           <ListItem button component={Link} to="/">
//             <ListItemText primary="Homepage" />
//           </ListItem>
//         </List>
//         {!isEmpty && <p style={{ position: 'relative', top: '15px', borderRadius: "5px", color: "red" }}>{totalItems}

//         </p>}
//         <Link to='/Cartproducts'>
//         < ShoppingCartIcon style={{ marginLeft: !isEmpty ? '300px' : 0 }}/>
          
//         </Link>
        
//       </Drawer>
//     </React.Fragment>
//   );
// };

// export default Header;



import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  Button,

  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Header.css";
import { useCart } from "react-use-cart";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

// import DrawerComp from "./Drawer";

const Header = () => {
  const { isEmpty, totalItems } = useCart();

  const [value, setValue] = useState(0);
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <Link to="/" className="link">
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              
              <Typography sx={{ fontSize: "2rem" }} mx={2} >
                One Click
              </Typography>
              <CameraAltIcon
                sx={{ fontSize:"1rem" ,transform: "scale(2)", marginTop: "12px"  }}
              />
            </Box>
          </Link>

          <Tabs
            sx={{ marginLeft: "auto" }}
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
          >
            <Tab label="Products" />
            <Tab label="Services" />
            <Tab label="About Us" />
            <Tab label="Contact" />
          </Tabs>

          <Button sx={{ marginLeft: "auto" }} variant="contained">
            <Link to="/login" className="link">
              Login
            </Link>
          </Button>

          <Button sx={{ margin: "0px 10px" }} variant="contained">
            <Link to="/" className="link">
              Homepage
            </Link>
          </Button>
          <Badge badgeContent={totalItems}>
            <Link to="/Cartproducts">
              <ShoppingCartIcon
                fontSize="large"
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#2d68a8",
                  },
                }}
              />
            </Link>
          </Badge>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;


