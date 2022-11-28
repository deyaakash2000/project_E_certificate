import React from "react";
import "./../css/Contact.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import image4 from './../img/logo.png';
import image3 from './../img/cont.png';
import Footer from './Footer'
function Contact(){
    return(
        <div className="c-main">
       
            
         <Navbar expand="lg">
        <Container fluid>
        <Navbar.Brand href="#" className='img4'>
        <img
          className="d-block w-100"
          src={image4}
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

    <h1 className='mb-3'><u>Learn</u></h1>

    <img src={image3} className="con" alt="..."/>

     <Footer></Footer>
   </div>
 
    )
}


export default Contact;