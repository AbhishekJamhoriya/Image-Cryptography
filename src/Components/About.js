import React from "react";
import Homenav from "./Homenav";


const About = () => {
    
    return (
        <div style={{ height: "100%", backgroundColor: "#426b90", border: "5px solid black" }}>
            <Homenav />
            <div style={{display: "flex", justifyContent: "center", height: "90vh" }}>
                <div className="text-center" style={{color:"white", width:"70%"}}>
                <h1>ABOUT</h1>
                <p>
                    As a part of the curriculum and in order to gain practical knowledge in the field of
                    software and system engineering methods and techniques, we are required to
                    make an overview document of our course project “IMAGE CRYPTOGRAPHY”.
                    </p>

                <p>
                    In this project we will be including various concepts of software engineering and
                    checking out on the effects and implications regarding this.
                    </p>

                <p>
                    Doing this Project will help us in enhancing our knowledge regarding the work in
                    the quality attributes in software engineering.
                    </p>
                
                <h1>CONTEXT</h1>
                <p>
                    Nowadays the use of devices such as computer, mobile and many more other
                    devices for communication as well as for data storage and transmission has
                    increased. As a result there is an increase in no of user’s also there is an increase in
                    no of unauthorized users which are trying to access data by unfair means. This
                    arises the problem of data security.
                    </p>

                <h1>PROBLEM SPECIFICATION</h1>
                <p>
                    To solve the problem of data security the data is stored or transmitted in the
                    encrypted format. This encrypted data is unreadable to the unauthorized user.
                    Cryptography is a science of information security which secures the data while the
                    data is being transmitted and stored. Every encryption and decryption process has
                    two aspects: the algorithm and the key use for the encryption and decryption.
                    However, it is the key used for encryption and decryption that makes the process of
                    cryptography secure. There are two types of cryptographic mechanisms: symmetric
                    key cryptography in which the same key is used for encryption and decryption. In
                    case of asymmetric key cryptography two different keys are used for encryption
                    and decryption. Symmetric key algorithm is much faster and easier to implement
                    and requires less processing power as compared to an asymmetric key algorithm.
                </p>
            </div>
            </div>
        </div>
    )
};

export default About;