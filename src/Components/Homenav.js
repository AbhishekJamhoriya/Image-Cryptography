import React ,{useState} from "react";
import {Navbar,NavbarBrand,Nav,NavItem,NavLink, NavbarToggler, Collapse} from 'reactstrap';
import About from "./About"


const Homenav = () => {

    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{ backgroundColor: "#0c3b43", border:"4px solid black" }} light expand="md">
                <NavbarBrand style={{ color: "white"}}>VISUAL CRYPTOGRAPHY</NavbarBrand>
                <NavbarToggler onClick={toggle} style={{backgroundColor:"white"}} />
                <Collapse  isOpen={isOpen} navbar>
                <Nav navbar style={{paddingLeft:"36%"}}>
                    <NavItem > <NavLink style={{ color: "white" }} href="./Home" >Home</NavLink> </NavItem>
                    <NavItem > <NavLink style={{ color: "white" }} href="./About">About</NavLink> </NavItem>
                    <NavItem > <NavLink style={{ color: "white" }} href="./Contact" >Contact us</NavLink> </NavItem>
                    </Nav>
                    <Nav navbar style={{paddingLeft:"36%"}}>
                    <NavItem > <NavLink style={{ color: "white" }} href="./Login" >LogOut</NavLink> </NavItem>
                    <NavItem > <NavLink style={{ color: "white" }} href="./Profile">Profile</NavLink> </NavItem>
                
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )

};

export default Homenav;
