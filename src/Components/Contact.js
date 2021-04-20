import React from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Homenav from "./Homenav";

const Contact=()=>{

    return(
        <div style={{ height: "100%", backgroundColor: "#426b90", border: "5px solid black" }}>
            <Homenav/>
            <div style={{ height: "90vh" ,color:" white"}}>
                <h1 className="text-center">Contact Us</h1>
                <p className="text-center">
                    Got a problem? we'd love to hear from you 
                    Send us a message and we'll respond as soon as possible.
                </p>
                <Container style={{marginTop:"40px"}}>
                    <Row>
                        <Col md={6}>
                       
                        <Form>
                            <FormGroup  >
                                <Label for="name">
                                    Name
                                </Label>
                                <Input type="text" name="name" id="Name" style={{border:"2px solid black"}} ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">
                                   Email Address
                                </Label>
                                <Input type="email" name="email" id="Email" style={{border:"2px solid black"}}  ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="message">
                                    Message
                                </Label>
                               
                                <Input type="textarea" name="message" id="Message" style={{height:"100px" , border:"2px solid black"}} ></Input>
                               
                            </FormGroup>
                            <Button style={{ marginLeft:"15%" , border:"2px solid black" ,width:"25vw",height:"50px",backgroundColor: "#0c3b43"}} className="text-center">Send Message</Button>
                        </Form>
                        </Col>
                        <Col md={6}>
                            <h1>
                               For social handels
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};

export default Contact;
