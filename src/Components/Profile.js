import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Homenav from "./Homenav";
import pr from "./Image/pr.jpg";

const Profile=()=>{

    const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }

    return(

        <div style={{ height: "100vh", backgroundColor: "#426b90", border: "5px solid black" }}>
            <Homenav/>
            <div style={{ height: "90vh" ,color:" white" ,marginTop:"10px"}}>
                <h1 className="text-center">My Profile</h1>
                
                <Container style={{marginTop:"40px"}}>
                    <Row>
                        <Col className="text-center" md={6}>
                        <div >
                            <Container  style={{border:"2px solid black",height:"150px", width:"150px",borderRadius:"100%",backgroundImage:`url(${pr})`,backgroundSize:"cover"}}></Container>
                            <a href="/"> Upload an Image</a>
                                
                        </div>
                        <div className="mt-4">
                            <h5>Gender</h5>
                                <ButtonGroup>
                                    <Button  color="primary" onClick={()=>setRSelected(1)} active={rSelected==1}>Male</Button>
                                    <Button color="primary" onClick={()=>setRSelected(2)} active={rSelected==2}>Female</Button>
                                </ButtonGroup>
                        </div>
                        
                        </Col>
                        <Col md={6}>
                        <Form>
                            <FormGroup style={{display:"flex"}} >
                                <FormGroup>
                                <Label for="name">
                                    First Name
                                </Label>
                                <Input type="text" name="name" id="Name" style={{border:"2px solid black"}} ></Input>
                                </FormGroup>
                                <FormGroup>
                                <Label for="name">
                                    Last Name
                                </Label>
                                <Input type="text" name="name" id="Name" style={{border:"2px solid black"}} ></Input>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">
                                   Email Address
                                </Label>
                                <Input type="email" name="email" id="Email" style={{border:"2px solid black"}}  ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="message">
                                    About
                                </Label>
                               
                                <Input type="textarea" name="message" id="Message" style={{height:"100px" , border:"2px solid black"}} ></Input>
                               
                            </FormGroup>
                           
                        </Form>
                        </Col>
                    </Row>
                    <Button style={{ marginLeft:"15%" , border:"2px solid black" ,width:"15vw",height:"50px",backgroundColor: "#0c3b43"}} className="text-center">Save</Button>
                </Container>
            </div>
        </div>
    )
};

export default Profile;