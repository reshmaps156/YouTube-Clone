import React from 'react'
import Widgetarea from '../components/Widgetarea'
import './wl.css'
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import SortIcon from '@mui/icons-material/Sort';
import DragHandleIcon from '@mui/icons-material/DragHandle';


function Watchlater() {
  return (
    <>
      <div className="row w-100">
        <div className="col-md-2">
          <Widgetarea />
        </div>
        <div className="col-md-10 mt-3">
          <div className="row w-100 p-3">
            <div className="col-md-3 p-4 rounded ms-2  me-2 purplebg ">

              <iframe width="100%" height="" src="https://www.youtube.com/embed/AlDletS4k8Y?si=HZObDdP_ds7yR4Jw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <h4 className="mt-2 fw-bold text-white">Watch later</h4>
              <p className='text-white'>John Doe</p>
              <p className='smallTxt text-light'>80 videos No views Last updated on 22 June 2024</p>
              <button className='btnIcon p-2 me-2'><VerticalAlignBottomIcon /></button>
              <button className='btnIcon p-2'><MoreVertIcon /></button>
              <div className='d-flex mt-3 justify-content-around'>
                <button className='px-xl-4 py-1 rounded-5 play w-50'><PlayArrowIcon /> Play all</button>
                <button className='px-xl-4 py-1 rounded-5 shuffle w-50'><ShuffleIcon />Shuffle</button>
              </div>

            </div>
            <div className="col-md-8  ms-2">
              <div className='msgAtTop p-3 d-flex align-items-center justify-content-between ms-2'>
                <p>2 unavailable videos are hidden</p>
                <CloseSharpIcon />
              </div>
              <p className='ms-2'><SortIcon /> Sort</p>
              <div className="row">
                <div className="col-md-4">
                  <div className='d-flex align-items-center justify-content-center'>
                    <DragHandleIcon />
                    <iframe className='rounded-2' width="90%" height="" src="https://www.youtube.com/embed/8hly31xKli0?si=2ZuYxlsHA16152XV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-md-8">
                  <p className='centerText'>Algorithms and Data Structures Tutorial - Full Course for Beginners</p>
                  <div className='d-flex justify-content-between hidden'> <p className='text-secondary '>freeCodeCamp.org • 4.4M views • 3 years ago</p>
                    <MoreVertIcon /></div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <div className='d-flex align-items-center justify-content-center'>
                    <DragHandleIcon />
                    <iframe className='rounded-2' width="90%" height="" src="https://www.youtube.com/embed/BSVKUk58K6U?si=7gdJSDenFkU-QWt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-md-8">
                  <p className='centerText'>OOP 1 | Introduction & Concepts - Classes, Objects, Constructors, Keywords</p>
                  <div className='d-flex justify-content-between hidden'> <p className='text-secondary'>Kunal Kushwaha • 1.1M views • 2 years ago</p>
                    <MoreVertIcon /></div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <div className='d-flex align-items-center justify-content-center'>
                    <DragHandleIcon />
                    <iframe className='rounded-2' width="90%" height="" src="https://www.youtube.com/embed/8Y417UNLomM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-md-8">
                  <p className='centerText'>DIY Macramé Coaster</p>
                  <div className='d-flex justify-content-between hidden'> <p className='text-secondary'>createwithjenn • 89K views • 3 years ago</p>
                    <MoreVertIcon /></div>
                </div>
              </div>
              
            </div>
            <div className="col-md-1"></div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Watchlater