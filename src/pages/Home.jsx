import React from 'react'
import Widgetarea from '../components/Widgetarea'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';



function Home() {
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <Widgetarea />
        </div>
        <div className="col-md-10">
          <div className="row mt-5 mx-auto d-flex align-items-center justify-content-center ">
          <div className="col-md-4 ">
            <img src="https://i.ytimg.com/vi/u4HQevc9JE0/maxresdefault.jpg" alt="Cannons video cover pic" className='rounded-2 w-100'/>
            <div className='d-flex mt-2'>
                <div>
                  <AccountCircleIcon className='m-2' fontSize='large'/>
                </div>
                <div className='m-2'>
                  <p className='fw-bold'>Cannons Fire for you (Official video)</p>
                 
                </div>
                <div className='m-2'>
                  <MoreVertIcon/>
                </div>

            </div>
          </div>
          <div className="col-md-4">
          <img src="https://i.ytimg.com/vi/7xQCCw5sbdY/maxresdefault.jpg" alt="Jupitar mazha video cover pic" className='rounded-2 w-100'/>
            <div className='d-flex mt-2 justify-content-between'>
                <div>
                  <AccountCircleIcon className='m-2' fontSize='large'/>
                </div>
                <div className='m-2'>
                  <p className='fw-bold'>Jupitar Mazha | Karikku Tuned </p>
                 
                </div>
                <div className='m-2'>
                  <MoreVertIcon/>
                </div>

            </div>
          </div>
          <div className="col-md-4">
          <img src="https://i.ytimg.com/vi/__6sIqZk-DA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDhVjD0X19UCD4GqtuaFT145tGe2w" alt=" video cover pic" className='rounded-2 w-100'/>
            <div className='d-flex mt-2 justify-content-between'>
                <div>
                  <AccountCircleIcon className='m-2' fontSize='large'/>
                </div>
                <div className='m-2'>
                  <p className='fw-bold'>Baby Calm Down (Full video)</p>
                 
                </div>
                <div className='m-2'>
                  <MoreVertIcon/>
                </div>

            </div>
          </div>
          </div>
          <div className="row mt-5 mx-auto d-flex align-items-center justify-content-center ">
          <div className="col-md-4 ">
          <img src="https://i.ytimg.com/vi/kcW4ABcY3zI/maxresdefault.jpg" alt=" video cover pic" className='rounded-2 w-100'/>
            <div className='d-flex mt-2 justify-content-between'>
                <div>
                  <AccountCircleIcon className='m-2' fontSize='large'/>
                </div>
                <div className='m-2'>
                  <p className='fw-bold'> Dr. Shashi Tharoor at TEDxGateway 2013</p>
                 
                </div>
                <div className='m-2'>
                  <MoreVertIcon/>
                </div>

            </div>
          </div>
          <div className="col-md-4">
          <img src="https://i.ytimg.com/vi/t2CEgPsws3U/maxresdefault.jpg" alt=" video cover pic" className='rounded-2 w-100'/>
            <div className='d-flex mt-2 justify-content-between'>
                <div>
                  <AccountCircleIcon className='m-2' fontSize='large'/>
                </div>
                <div className='m-2'>
                  <p className='fw-bold'> Data Structures and Algorithms in JavaScript </p>
                 
                </div>
                <div className='m-2'>
                  <MoreVertIcon/>
                </div>

            </div>
          </div>
          <div className="col-md-4">
          <img src="https://i.ytimg.com/vi/N9jqvjBolBA/maxresdefault.jpg" alt=" video cover pic" className='rounded-2 w-100'/>
            <div className='d-flex mt-2 justify-content-between'>
                <div>
                  <AccountCircleIcon className='m-2' fontSize='large'/>
                </div>
                <div className='m-2'>
                  <p className='fw-bold'> Which is the best AI? ChatGPT vs CoPilot vs Gemini </p>
                 
                </div>
                <div className='m-2'>
                  <MoreVertIcon/>
                </div>

            </div>
          </div>
          </div>
          <div className="row mt-5 mx-auto d-flex align-items-center justify-content-center ">
          <div className="col-md-4 ">
          <img src="https://i.ytimg.com/vi/yEHCfRWz-EI/maxresdefault.jpg" alt=" video cover pic" className='rounded-2 w-100'/>
            <div className='d-flex mt-2 justify-content-between'>
                <div>
                  <AccountCircleIcon className='m-2' fontSize='large'/>
                </div>
                <div className='m-2'>
                  <p className='fw-bold'>What is Node js? | Simplified Explanation</p>
                 
                </div>
                <div className='m-2'>
                  <MoreVertIcon/>
                </div>

            </div>
          </div>
          <div className="col-md-4">
          <img src="https://i.ytimg.com/vi/2yJqjTiwpxM/maxresdefault.jpg" alt=" video cover pic" className='rounded-2 w-100'/>
            <div className='d-flex mt-2 justify-content-between'>
                <div>
                  <AccountCircleIcon className='m-2' fontSize='large'/>
                </div>
                <div className='m-2'>
                  <p className='fw-bold'>What is Blockchain? Blockchain Technology Explained Simply </p>
                 
                </div>
                <div className='m-2'>
                  <MoreVertIcon/>
                </div>

            </div>
          </div>
          <div className="col-md-4">
          <img src="https://i.ytimg.com/vi/osD6O4LAcpo/maxresdefault.jpg" alt=" video cover pic" className='rounded-2 w-100'/>
            <div className='d-flex mt-2 justify-content-between'>
                <div>
                  <AccountCircleIcon className='m-2' fontSize='large'/>
                </div>
                <div className='m-2'>
                  <p className='fw-bold'> Pepper, the new robot by Aldebaran #PepperRobot </p>
                 
                </div>
                <div className='m-2'>
                  <MoreVertIcon/>
                </div>

            </div>
          </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Home