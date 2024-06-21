import React from 'react'
import Widgetarea from '../components/Widgetarea'
import './history.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Input from '@mui/material/Input';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


function History() {
  const ariaLabel = { 'aria-label': 'description' };
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <Widgetarea />
        </div>
        <div className="col-md-10">

          <div className='row mt-5'>
            <div className="col-md-1"></div>
            <div className="col-md-7 ">
              <h2 className='fw-bold '>Watch history</h2>
              <p className=' fw-bold fs-5 mt-3'>Today</p>
              <div className=' d-flex  justify-content-between align-items-center'>
                <div className='d-flex   align-items-center'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/1649px-Youtube_shorts_icon.svg.png" alt="" className='shortsIcon' />
                  <p className='fw-bold m-1'>Shorts</p>
                </div>

                <div>
                  <MoreVertIcon />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="https://i.pinimg.com/236x/43/f6/b2/43f6b246b2b832de3ea6e8a4a9a1a7f6.jpg" alt="" className='w-100 h-75 rounded' />
                 <div className='d-flex mt-1 fw-bold'> <p>Lorem ipsum | dolor sit|  amet consectetur .....</p>
                 <MoreVertIcon/>
                 </div>
                </div>
                <div className="col-md-4">
                  <img src="https://i.pinimg.com/originals/17/a7/40/17a74008413e523213faeac55e46fd2f.jpg" alt="" className='w-100 h-75 rounded' />
                  <div className='d-flex mt-1 fw-bold'> <p>Lorem ipsum | dolor sit|  amet consectetur .....</p>
                 <MoreVertIcon/>
                 </div>
                </div>
                <div className="col-md-4">
                  <img src="https://miro.medium.com/v2/resize:fit:1080/1*rhKX-gQxcEOxovAt-djzuQ.jpeg" alt="" className='w-100 h-75 rounded' />
                  <div className='d-flex mt-1 fw-bold'> <p>Lorem ipsum | dolor sit|  amet consectetur .....</p>
                 <MoreVertIcon/>
                 </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 borderDiv shadow">

                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <iframe width="100%" height="" src="https://www.youtube.com/embed/__6sIqZk-DA?si=48FT2y774n3zwDey" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-md-7">
                  <p>Baby Calm Down (FULL VIDEO SONG) | Selena Gomez & Rema...</p>
                  <p className='text-secondary smallText'>Album Compilation . 14M views</p>
                  <p className='text-secondary smallText'>Baby Calm Down (FULL VIDEO SONG) | Selena Gomez & Rema Official Music Video 2023 | HD 4K</p>
                </div>
                <div className="col-md-1">
                  <div className='d-flex'>
                    <CloseOutlinedIcon />
                    <MoreVertIcon />
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                <iframe width="100%" height="" src="https://www.youtube.com/embed/HCjNJDNzw8Y?si=gwXaBpPSB0uenqBH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-md-7">
                  <p>Camila Cabello - Havana (Audio) ft. Young Thug</p>
                  <p className='text-secondary smallText'>Camila Cabello 1.9B views</p>
                  <p className='text-secondary smallText'>Havana" feat. Young Thug  available at iTunes </p>
                </div>
                <div className="col-md-1">
                  <div className='d-flex'>
                    <CloseOutlinedIcon />
                    <MoreVertIcon />
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                <iframe width="100%" height="" src="https://www.youtube.com/embed/Pkh8UtuejGw?si=YejV3ZSG_64yXxh_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-md-7">
                  <p>Shawn Mendes, Camila Cabello - Señorita</p>
                  <p className='text-secondary smallText'>Shawn Mendes  1.7B views</p>
                  <p className='text-secondary smallText'>Señorita: https://Senorita.lnk.to/OutNow Catch Shawn on tour this year: https://www.shawnmendesthetour.com/ Stream/buy Shawn </p>
                </div>
                <div className="col-md-1">
                  <div className='d-flex'>
                    <CloseOutlinedIcon />
                    <MoreVertIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3 p-5 ">
              <Input placeholder="Search watch history" inputProps={ariaLabel} className=' ' />
              <p className='border-0 mt-3 bg-transparent '><FontAwesomeIcon icon={faTrashCan} className='ms-1 me-3' />Clear all watch history</p>
              <p className='border-0 mt-3 bg-transparent '><PauseOutlinedIcon className='ms-1 me-3' />Pause watch history</p>
              <p className='border-0 mt-3 bg-transparent '><SettingsOutlinedIcon className='ms-1 me-3' />Manage all history</p>
              <p className='text-secondary mt-3 ms-5'>Comments</p>
              <p className='text-secondary ms-5'>Posts</p>
              <p className='text-secondary ms-5'>Live Chats</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default History