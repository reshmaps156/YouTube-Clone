import { faBars, faMagnifyingGlass, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import './header.css'







function Header() {
  return (
    <>
     <Navbar expand="lg" className=" border-0 ">
      <Container fluid>
     
         
            <div className='d-flex '>
                  <FontAwesomeIcon icon={faBars}  className='me-4 ms-3 fa-xl m-2 barIcon'/>
                  <img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="Youtube icon" className='brandIcon me-1 m-1' />
                  <Navbar.Brand href="#" className='brandName fs-4 '>YouTube<sup className='superText'>IN</sup></Navbar.Brand>
            </div>
            <div className=' d-flex searchBar'>
                  <form action="">
                      <input type="text" className='py-2 px-4 inputBox' placeholder='Search'/>
                      <button className='px-4 py-2 inputBtn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                  </form>
                  <button className=' microPhone'><KeyboardVoiceIcon/></button>
            </div>
            <div className='d-flex headerRightIcons'>
             <VideoCallOutlinedIcon className='me-3 vidIcon' fontSize='large'/>
             <NotificationsNoneOutlinedIcon className='me-3 notifigBell' fontSize='large'/>
             <AccountCircleIcon className='me-3 profileIcon' fontSize='large'/>
            </div>
            
         
          
      
        
      </Container>
    </Navbar>
        
    </>
  )
}

export default Header