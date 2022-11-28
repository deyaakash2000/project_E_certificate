import React from "react";
import './../css/About.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image1 from './../img/logo.png';
import image6 from './../img/abou.png';
import Footer from './Footer'
const About=()=>{ 
return(
    <>
    <div className="about-us"  id="Abt">
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='img4'>
        <img
          className="d-block w-100"
          src={image1}
          alt=" "/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          
          <Nav.Link href="./#" className='font'>Home</Nav.Link>
            <Nav.Link href="./contact" className='font'>Learn</Nav.Link>
            <Nav.Link href="./Service" className='font'>Service</Nav.Link>
            <Nav.Link href="./About" className='font'>About</Nav.Link>
          </Nav>
     
           
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <h1 className='mb-4'><u>About</u> <u>Us</u></h1>
   
     <img src={image6} className="abo" alt="..."/>

        </div>
    <Footer></Footer>

          </>
);
}




export default About;