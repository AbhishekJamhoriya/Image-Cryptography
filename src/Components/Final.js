import React from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import Homenav from "./Homenav";
import {Link} from "react-router-dom"
import pr from "./Image/pr.jpg"
import dec from "./Image/dec.png"


const Final=()=>{

    return(
        <div style={{ height: "100vh", backgroundColor: "#426b90", border: "5px solid black" }}>
            <Homenav/>
            <div className="text-center" style={{color:"white"}}>
                <Container>
                    <Row>
                        <Col >
                        <h1>ENCRYPTION</h1>
                        
                        <div >
                            <Container style={{border:"2px solid black",height:"150px", width:"150px",backgroundImage:`url(${pr})`,backgroundSize:"cover", marginTop:"20px"}}></Container>
                            <a className=" list-group-item list-group-item-action mt-5 " tag="a" to="/" style={{width:"60%",marginLeft:"20%" ,border:"2px solid black"}}> Click to Select an Image</a>
                            <Input className="mt-5" type="password" name="key" id="Key" placeholder="Enter the key (Only Numerical values)" style={{width:"60%",marginLeft:"20%" ,height:"7vh" ,border:"2px solid black"}}></Input>
                            <Button className="mt-5 mb-5" style={{width:"15vw",backgroundColor: "#32CD32" ,height:"7vh",border:"2px solid black"}}>ENCRYPT</Button>
                                
                        </div>
                        </Col>
                        <Col>
                        <h1>DECRYPTION</h1>
                        <div >
                            <Container  style={{border:"2px solid black",height:"150px", width:"150px",backgroundImage:`url(${dec})`,backgroundSize:"cover",marginTop:"20px"}}></Container>
                            <a className="list-group-item list-group-item-action mt-5" tag="a" to="/" style={{width:"60%",marginLeft:"20%",border:"2px solid black" }}>Click to Upload an Image</a>
                            <Input className="mt-5" type="password" name="key" id="Key" placeholder="Enter the key (Only Numerical values)" style={{width:"60%",marginLeft:"20%",height:"7vh",border:"2px solid black" }}></Input>
                            <Button className="mt-5" style={{width:"15vw",backgroundColor: "#32CD32" ,height:"7vh",border:"2px solid black"}}>DECRYPT</Button>
                                
                        </div></Col>
                       
                    </Row>
                </Container>
                <Button className="mt-2" style={{width:"10vw",backgroundColor: "#0c3b43",height:"7vh",border:"2px solid black"}}>Back</Button>
            </div>
        </div>
    )
};

export default Final