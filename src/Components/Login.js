import React, { useState } from 'react';
import Loginnav from "./Loginnav.js";
import Home from "./Home"
import bgi from "./Image/bg.png";
import {Link } from "react-router-dom"
import {Jumbotron,Button,Form,FormGroup,Label,Input, Container} from "reactstrap";

const Login= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{backgroundImage:`url(${bgi})`,backgroundSize:"cover"}}>
      <Loginnav/>
      <div className="text-center" style={{ height:"90vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Jumbotron  style={{backgroundColor:"#4682B4",border:"2px solid black", height:"400px",width:"300px",mar:"ginTop0%"}}>
       

     
        <Form style={{color:"white"}}>
          <FormGroup style={{textAlign:"left"}}>
            <Label for="Email">Email</Label>
            <Input type="email" name="email" id="Email" placeholder="Enter Your Email"></Input> 
          </FormGroup>
          <FormGroup style={{textAlign:"left"}} >
            <Label  for="Password">Password</Label>
            <Input type="password" name="password" id="Password" placeholder="Enter Your Password"></Input> 
          </FormGroup>
          
          <Link className="list-group-item list-group-item-action" tag="a" to="/Home" style={{backgroundColor:"#003366" , width:"100%", marginTop:"30px",color:"white"}}>
                   Login
                </Link>
          <FormGroup className="m-4"> <a style={{color:"white"}} href="./Forgotpassword">forgot password</a></FormGroup>
         
          
        </Form>

      </Jumbotron>
      </div>
      </div>
  
  );
}

export default Login;