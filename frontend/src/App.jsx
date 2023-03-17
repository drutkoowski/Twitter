import './styles/index.scss'
import './styles/typography.css'

import { Navigate, Route, Routes } from 'react-router-dom'

import Home from './views/Home.jsx'
import Explore from './views/Explore.jsx'
import Notifications from './views/Notifications.jsx'
import Messages from './views/Messages.jsx'
import Bookmarks from './views/Bookmarks.jsx'

function App () {
  return (
        <Routes>
            <Route element={<Home/>} index path={'/home'}/>
            <Route element={<Explore/>} path={'/explore'}/>
            <Route element={<Notifications/>} path={'/notifications'}/>
            <Route element={<Messages/>} path={'/messages'}/>
            <Route element={<Bookmarks/>} path={'/bookmarks'}/>
            <Route element={<Navigate to='/home'/>} path='*'/>
        </Routes>
  )
}

export default App
