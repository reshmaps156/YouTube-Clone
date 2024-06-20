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
function Widgetarea() {
    return (
        <>
            <Sidebar>
                <Menu>

                    <MenuItem className=''><HomeSharpIcon className='me-2' /> Home </MenuItem>
                    <MenuItem> <img src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png" className='me-2' alt="" width={'30px'} />Shorts </MenuItem>
                    <MenuItem><SubscriptionsOutlinedIcon className='me-2' /> Subscriptions </MenuItem>
                    <SubMenu label="You" className='fw-bolder'>
                        {/* <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem> */}
                    </SubMenu>
                    <MenuItem ><SwitchAccountOutlinedIcon className='me-3'/> Your channel</MenuItem>
                    <MenuItem><RestoreOutlinedIcon className='me-3'/> History </MenuItem>
                    <MenuItem><PlaylistPlayOutlinedIcon className='me-3'/> Playlists</MenuItem>
                    <MenuItem > <SlideshowOutlinedIcon className='me-3'/>Your videos</MenuItem>
                    <MenuItem> <ScheduleOutlinedIcon className='me-3'/>Watch later </MenuItem>
                    <MenuItem><ThumbUpOffAltOutlinedIcon className='me-3'/> Liked videos </MenuItem>
                    <p className='ms-3 mt-3 fw-bold '>Subscriptions</p>
                    <p className='ms-3 fw-bold '>Explore</p>
                    <MenuItem ><WhatshotOutlinedIcon  className='me-3'/>Trending</MenuItem>
                    <MenuItem><ShoppingBagOutlinedIcon  className='me-3'/> Shopping </MenuItem>
                    <MenuItem><MusicNoteOutlinedIcon  className='me-3'/>Music</MenuItem>
                    <MenuItem ><MovieCreationOutlinedIcon  className='me-3'/> Films</MenuItem>
                    <MenuItem><SensorsOutlinedIcon  className='me-3'/> Live</MenuItem>
                    <MenuItem><SportsEsportsOutlinedIcon  className='me-3'/> Gaming</MenuItem>
                    <MenuItem><StickyNote2OutlinedIcon  className='me-3'/> News </MenuItem>
                    <MenuItem><EmojiEventsOutlinedIcon  className='me-3'/> Sport</MenuItem>
                    <MenuItem > <LightbulbOutlinedIcon  className='me-3'/>Courses</MenuItem>
                    <MenuItem> <DryCleaningOutlinedIcon  className='me-3'/>Fashion & beauty </MenuItem>
                    <MenuItem> <PodcastsOutlinedIcon  className='me-3'/>Podcasts </MenuItem>
                </Menu>
            </Sidebar>
        </>

    )
}

export default Widgetarea