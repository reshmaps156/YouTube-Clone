import React from 'react'
import './sidebar.css'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import { Link } from 'react-router-dom';
function Widgetarea() {
       
    return (
        <>
            <Sidebar className='sideBar'>
                <Menu>

                    <MenuItem className=''><Link to={'/'} className='unStyle'><HomeSharpIcon className='me-2' /><span className='sideBarDetail'> Home</span> </Link></MenuItem>
                    <MenuItem> <img src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png" className='me-2' alt="" width={'30px'} /><span className='sideBarDetail'>Shorts</span> </MenuItem>
                    <MenuItem><SubscriptionsOutlinedIcon className='me-2' /> <span className='sideBarDetail'>Subscriptions</span> </MenuItem>
                    <div className='seperation ms-3 m-2'></div>
                    <SubMenu label="You" className='fw-bolder sideBarDetail'>
                        {/* <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem> */}
                    </SubMenu>
                    <MenuItem ><SwitchAccountOutlinedIcon className='me-3'/> <span className='sideBarDetail'>Your channel</span></MenuItem>
                    <MenuItem><Link to={'/history'} className='unStyle'><RestoreOutlinedIcon className='me-3'/><span className='sideBarDetail'> History </span></Link></MenuItem>
                    <MenuItem><PlaylistPlayOutlinedIcon className='me-3'/><span className='sideBarDetail'> Playlists</span></MenuItem>
                    <MenuItem > <SlideshowOutlinedIcon className='me-3'/><span className='sideBarDetail'>Your videos</span></MenuItem>
                    <MenuItem> <ScheduleOutlinedIcon className='me-3'/><span className='sideBarDetail'>Watch later</span> </MenuItem>
                    <MenuItem><ThumbUpOffAltOutlinedIcon className='me-3'/> <span className='sideBarDetail'>Liked videos</span> </MenuItem>
                    <p className='ms-3 mt-3 fw-bold '><span className='sideBarDetail'>Subscriptions</span></p>
                    <div className='seperation ms-3 m-2'></div>
                    <p className='ms-3 fw-bold '><span className='sideBarDetail'><span className='sideBarDetail'>Explore</span></span></p>
                    <MenuItem ><WhatshotOutlinedIcon  className='me-3'/><span className='sideBarDetail'>Trending</span></MenuItem>
                    <MenuItem><ShoppingBagOutlinedIcon  className='me-3'/><span className='sideBarDetail'> Shopping </span></MenuItem>
                    <MenuItem><MusicNoteOutlinedIcon  className='me-3'/><span className='sideBarDetail'>Music</span></MenuItem>
                    <MenuItem ><MovieCreationOutlinedIcon  className='me-3'/> <span className='sideBarDetail'>Films</span></MenuItem>
                    <MenuItem><SensorsOutlinedIcon  className='me-3'/> <span className='sideBarDetail'>Live</span></MenuItem>
                    <MenuItem><SportsEsportsOutlinedIcon  className='me-3'/><span className='sideBarDetail'> Gaming</span></MenuItem>
                    <MenuItem><StickyNote2OutlinedIcon  className='me-3'/><span className='sideBarDetail'> News </span></MenuItem>
                    <MenuItem><EmojiEventsOutlinedIcon  className='me-3'/><span className='sideBarDetail'> Sport</span></MenuItem>
                    <MenuItem > <LightbulbOutlinedIcon  className='me-3'/><span className='sideBarDetail'>Courses</span></MenuItem>
                    <MenuItem> <DryCleaningOutlinedIcon  className='me-3'/><span className='sideBarDetail'>Fashion & beauty</span> </MenuItem>
                    <MenuItem> <PodcastsOutlinedIcon  className='me-3'/><span className='sideBarDetail'>Podcasts</span> </MenuItem>
                </Menu>
            </Sidebar>
        </>

    )
}

export default Widgetarea