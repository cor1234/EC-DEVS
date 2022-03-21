 import React from 'react';
 import Button from 'react-bootstrap/Button';
 import {NavDropdown,Nav,Form,FormControl,Navbar,Container} from "react-bootstrap"

 // or less ideally
// import { Button } from 'react-bootstrap';
function Header() {
  return (
	<Navbar bg="light" expand="lg">
	<Container fluid>
	  <Navbar.Brand href="#">NavBar scroll</Navbar.Brand>
	  <Navbar.Toggle aria-controls="NavBarScroll" />
	  <Navbar.Collapse id="navbarScroll">
		<Nav
		  className="me-auto my-2 my-lg-0"
		  style={{ maxHeight: '100px' }}
		  navbarScroll
		>
		  <Nav.Link href="#action1">Home</Nav.Link>
		  <Nav.Link href="#action2">Link</Nav.Link>
		  <NavDropdown title="Link" id="navbarScrollingDropdown">
			<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
			<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
			<NavDropdown.Divider />
			<NavDropdown.Item href="#action5">
			  Something else here
			</NavDropdown.Item>
		  </NavDropdown>
		  <Nav.Link href="#" disabled>
			Link
		  </Nav.Link>
		</Nav>
		<Form className="d-flex">
		  <FormControl
			type="search"
			placeholder="Search"
			className="me-2"
			aria-label="Search"
		  />
		  <Button variant="outline-success">Search</Button>
		</Form>
	  </Navbar.Collapse>
	</Container>
  </Navbar>
 )
 }

 export default Header

//  import * as React from "react";
//   //npm importing material UI components
//  import AppBar from "@mui/material/AppBar";
//  import Box from "@mui/material/Box";
//  import Toolbar from "@mui/material/Toolbar";
//  import Typography from "@mui/material/Typography";
//  import Button from "@mui/material/Button";
//  import IconButton from "@mui/material/IconButton";
//  import MenuIcon from "@mui/icons-material/Menu";

//  export default function Header() {
//  return (
//  	<AppBar position="static">
//  		<Toolbar>
//  		{/*Inside the IconButton, we
//  		can render various icons*/}
//  		<IconButton
//  			size="large"
//  			edge="start"
//  			color="inherit"
//  			aria-label="menu"
//  			sx={{ mr: 2 }}
// 		>
//  			{/*This is a simple Menu
// 			Icon wrapped in Icon */}
//  			<MenuIcon />
//  		</IconButton>
//  		{/* The Typography component applies
//  		default font weights and sizes */}

//  		<Typography variant="h6"
//  			component="div" sx={{ flexGrow: 1 }}>
// 			College Parvesh
// 		</Typography>
//  		<Button color="inherit">Login</Button>
//  		</Toolbar>
//  	</AppBar>
//  );
//  }


// // import {
// //     AppBar,
// //     Toolbar,
// //     Typography,
// //     makeStyles,
// //     Button,
// //     IconButton,
// //     Drawer,
// //     Link,
// //     MenuItem,
// //   } from "@material-ui/core";
// //   import MenuIcon from "@material-ui/icons/Menu";
// //   import React, { useState, useEffect } from "react";
// //   import { Link as RouterLink } from "react-router-dom";
  
// //   const headersData = [
// //     {
// //       label: "Listings",
// //       href: "/listings",
// //     },
// //     {
// //       label: "Mentors",
// //       href: "/mentors",
// //     },
// //     {
// //       label: "My Account",
// //       href: "/account",
// //     },
// //     {
// //       label: "Log Out",
// //       href: "/logout",
// //     },
// //   ];
  
// //   const useStyles = makeStyles(() => ({
// //     header: {
// //       backgroundColor: "#400CCC",
// //       paddingRight: "79px",
// //       paddingLeft: "118px",
// //       "@media (max-width: 900px)": {
// //         paddingLeft: 0,
// //       },
// //     },
// //     logo: {
// //       fontFamily: "Work Sans, sans-serif",
// //       fontWeight: 600,
// //       color: "#FFFEFE",
// //       textAlign: "left",
// //     },
// //     menuButton: {
// //       fontFamily: "Open Sans, sans-serif",
// //       fontWeight: 700,
// //       size: "18px",
// //       marginLeft: "38px",
// //     },
// //     toolbar: {
// //       display: "flex",
// //       justifyContent: "space-between",
// //     },
// //     drawerContainer: {
// //       padding: "20px 30px",
// //     },
// //   }));
  
// //   export default function Header() {
// //     const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  
// //     const [state, setState] = useState({
// //       mobileView: false,
// //       drawerOpen: false,
// //     });
  
// //     const { mobileView, drawerOpen } = state;
  
// //     useEffect(() => {
// //       const setResponsiveness = () => {
// //         return window.innerWidth < 900
// //           ? setState((prevState) => ({ ...prevState, mobileView: true }))
// //           : setState((prevState) => ({ ...prevState, mobileView: false }));
// //       };
  
// //       setResponsiveness();
  
// //       window.addEventListener("resize", () => setResponsiveness());
  
// //       return () => {
// //         window.removeEventListener("resize", () => setResponsiveness());
// //       };
// //     }, []);
  
// //     const displayDesktop = () => {
// //       return (
// //         <Toolbar className={toolbar}>
// //           {femmecubatorLogo}
// //           <div>{getMenuButtons()}</div>
// //         </Toolbar>
// //       );
// //     };
  
// //     const displayMobile = () => {
// //       const handleDrawerOpen = () =>
// //         setState((prevState) => ({ ...prevState, drawerOpen: true }));
// //       const handleDrawerClose = () =>
// //         setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
// //       return (
// //         <Toolbar>
// //           <IconButton
// //             {...{
// //               edge: "start",
// //               color: "inherit",
// //               "aria-label": "menu",
// //               "aria-haspopup": "true",
// //               onClick: handleDrawerOpen,
// //             }}
// //           >
// //             <MenuIcon />
// //           </IconButton>
  
// //           <Drawer
// //             {...{
// //               anchor: "left",
// //               open: drawerOpen,
// //               onClose: handleDrawerClose,
// //             }}
// //           >
// //             <div className={drawerContainer}>{getDrawerChoices()}</div>
// //           </Drawer>
  
// //           <div>{femmecubatorLogo}</div>
// //         </Toolbar>
// //       );
// //     };
  
// //     const getDrawerChoices = () => {
// //       return headersData.map(({ label, href }) => {
// //         return (
// //           <Link
// //             {...{
// //               component: RouterLink,
// //               to: href,
// //               color: "inherit",
// //               style: { textDecoration: "none" },
// //               key: label,
// //             }}
// //           >
// //             <MenuItem>{label}</MenuItem>
// //           </Link>
// //         );
// //       });
// //     };
  
// //     const femmecubatorLogo = (
// //       <Typography variant="h6" component="h1" className={logo}>
// //         Femmecubator
// //       </Typography>
// //     );
  
// //     const getMenuButtons = () => {
// //       return headersData.map(({ label, href }) => {
// //         return (
// //           <Button
// //             {...{
// //               key: label,
// //               color: "inherit",
// //               to: href,
// //               component: RouterLink,
// //               className: menuButton,
// //             }}
// //           >
// //             {label}
// //           </Button>
// //         );
// //       });
// //     };
  
// //     return (
// //       <header>
// //         <AppBar className={header}>
// //           {mobileView ? displayMobile() : displayDesktop()}
// //         </AppBar>
// //       </header>
// //     );
// //   }