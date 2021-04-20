import React from "react";
import { Button, Form, FormGroup, Input, Jumbotron, Label} from "reactstrap";
import Loginnav from "./Loginnav";


const Forgotpassword=()=>{
    return(
        <div style={{height:"100vh" ,backgroundColor:"#4682B4"}}>
            <Loginnav/>
        <div style={{display:"flex" , justifyContent:"center" ,alignItems:"center" ,height:"85vh" }}>
            <Jumbotron className="text-center"  style={{width:"400px"}}>
                <h1>Forgot Password</h1>
                <p>No Problem! Enter your email and username below and we will send you an email with instruction to reseet your password</p>
                <Form>
                    <FormGroup>
                    <Input type="text" name="name" id="username" placeholder="Enter your Username" style={{border:"1px solid black"}}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" id="Email" placeholder="Enter your Email" style={{border:"1px solid black"}}/>
                    </FormGroup>
                    <div style={{border:"2px solid black" ,height:"50px ",marginBottom:"15px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <p>For ReCAPTCHA</p>
                    </div>
                    <Button color="success" style={{width:"100%",border:"1px solid black"}}>Send Reset Link</Button>
                    <FormGroup>
                        <Label className="mr-2">Back to</Label>
                        <a href="/">Login</a>
                    </FormGroup>
                </Form>
            </Jumbotron>
        </div>
        </div>
    )
};

export default Forgotpassword;