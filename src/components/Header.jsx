import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function Header() {
  return (
    <>
     <Navbar expand="lg" className=" border-0">
      <Container fluid>
      <div className='d-flex '>
            <FontAwesomeIcon icon={faBars}  className='me-4 ms-3 fa-xl m-2'/>
            <img src="./src/Media/youtube.png" alt="Youtube icon" className='brandIcon me-1 m-1' />
            <Navbar.Brand href="#" className='brandName fs-4 '>YouTube<sup className='superText'>IN</sup></Navbar.Brand>
      </div>
      
        
      </Container>
    </Navbar>
        
    </>
  )
}

export default Header