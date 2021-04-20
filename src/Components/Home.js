import React from "react";
import { Button, Container } from "reactstrap";
import {Link} from "react-router-dom"
import Homenav from "./Homenav";


const Home = () => {
    return (
        <div style={{height:"100%", backgroundColor:"#426b90" , border:"5px solid black"}}>
            <Homenav />
            <div  style={{display:"flex" , justifyContent:"center", alignItems:"center" , height:"90vh" }}>
                <div >
                    <Container className="m-3">
                    <Link className="text-center list-group-item list-group-item-action" tag="a" to="./Final" style={{width:"400px",height:"60px" ,fontSize:"25px",borderRadius:"40px" ,border:"2px solid black",backgroundColor:"#0c3b43",color:"white"}}>
                  Click to Encrypt an Image
                </Link>
                </Container>
                <Container className="m-3">
                <Link className="text-center list-group-item list-group-item-action" tag="a" to="./Final" style={{width:"400px",height:"60px" ,fontSize:"25px",borderRadius:"40px" ,border:"2px solid black",backgroundColor:"#0c3b43",color:"white"}}>
                  Click to Decrypt an Image
                </Link>
                </Container>
                 </div>
            </div>
        </div>
    )
};

export default Home;