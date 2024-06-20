
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import History from './pages/History'
import Watchlater from './pages/Watchlater'
import Playlists from './pages/Playlists'




function App() {
  

  return (
    <>
      <Header/>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/WL' element={<Watchlater/>}/>
      <Route path='playlists' element={<Playlists/>}/>
      </Routes>
      
    </>
  )
}

export default App
