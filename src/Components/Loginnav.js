// import React from "react";
import React, { useState } from 'react';
import {Navbar,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';


const Loginnav=()=>{
  
    return(
        <div>
          <Navbar style={{backgroundColor:"MidnightBlue" }} light expand="md">
            <NavbarBrand style={{color:"white"}}>VISUAL CRYPTOGRAPHY</NavbarBrand>
            <Nav  navbar>
            <NavItem style={{position:"fixed", top:"0px",right:"120px"}}> <NavLink style={{color:"white"}} href="/" >Login</NavLink> </NavItem>
            <NavItem style={{position:"fixed", top:"0px",right:"50px"}}> <NavLink style={{color:"white"}} href="./Signup">SignUp</NavLink> </NavItem>
            </Nav>
          </Navbar>
    </div>
    );
};

export default Loginnav;