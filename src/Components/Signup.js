import React from "react";
import { Button, Form, FormGroup, Input, Jumbotron, Label } from "reactstrap";
import Loginnav from "./Loginnav.js";

const Signup=()=>{
    return(
        <div style={{height:"100%" ,backgroundColor:"#4682B4"}}>
            <Loginnav/>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center" }}>

            <Jumbotron style={{backgroundColor:"#f2fff4", width:"400px",height:"80vh", marginTop:"30px"}} >
                <Form>
                    <FormGroup >
                        <Label for="firstname">First name</Label>
                            <Input type="text" name="name" id="Firstname" placeholder="" style={{border:"1px solid black"}}></Input>
                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Last name</Label>
                            <Input type="text" name="name" id="Lastname" placeholder="" style={{border:"1px solid black"}}></Input>
                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                            <Input type="email" name="email" id="Email" placeholder="" style={{border:"1px solid black"}}></Input>
                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                            <Input type="password" name="password" id="Password" placeholder="" style={{border:"1px solid black"}}></Input>
                        
                    </FormGroup>
                    <FormGroup> <Button style={{width:"100%",backgroundColor:"#003366" }}>Sign Up</Button></FormGroup>
                    <FormGroup><Button style={{width:"100%",backgroundColor:"#003366" }}>Continue with Google</Button></FormGroup>
                    <FormGroup className="text-center"><Label>Already have an account?
                        <a href="/">Login</a></Label></FormGroup>
                </Form>
            </Jumbotron>
        </div>
        </div>
    )

};

export default Signup;