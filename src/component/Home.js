import React from 'react'
// import Navbar from './Navbar'
// import Effect from './Effect';
import { NavLink } from 'react-router-dom'
// import Infostudent from './Infostudent'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
// import Button  from 'react-bootstrap/Button'; 
import "../css/Home.css";
import Footer from './Footer';
import image4 from '../img/logo.png';
import image1 from '../img/back3.png';
import image2 from '../img/certi.png';
function Home() {

{/* <Effect/> */}
  return (
  
    <div>
     <div className='H-main'>
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/#" className='img4'>
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
            <NavLink to="/" className='font'>Home</NavLink>
            <NavLink to="./Contact" className='font'>Learn</NavLink>
            <NavLink to="./Service" className='font'>Service</NavLink>
            <NavLink to="./About" className='font'>About</NavLink>
            
          
          
          </Nav>
             {/* <Nav.Link href="./About" className='login'>Admin login</Nav.Link> */}
            <NavLink to='/sighup' className='login'>Admin Login</NavLink>
         
        </Navbar.Collapse>
      </Container> 
    </Navbar>
  
    <br/> <h1 className='heading1'><center>Certificate Of Appretiation</center></h1>
    <h2 className='heading2'><center>Make Your Certificate in a Blink..</center></h2>
    <center><img src={image1} className="b-img" alt="..."/></center>
    
 
    <NavLink to='/certificate' className='create'>Download Certificate</NavLink>

  
    <img src={image2} className="left" alt="..."/>
  



   

</div>
<Footer></Footer>
      {/* <Navbar/>
      <Infostudent/> */}
    </div>
  )
}

export default Home
