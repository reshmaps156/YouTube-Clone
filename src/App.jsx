
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import History from './pages/History'
import Watchlater from './pages/Watchlater'





function App() {
  

  return (
    <>
      <Header/>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/watchlater' element={<Watchlater/>}/>
      
      </Routes>
      
    </>
  )
}

export default App
