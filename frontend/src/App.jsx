import './styles/index.scss'
import './styles/typography.css'

import { Navigate, Route, Routes } from 'react-router-dom'

import Home from './views/Home.jsx'

function App () {
  return (
        <Routes>
            <Route element={<Home/>} index path={'/home'}/>
            <Route element={<Navigate to='/home'/>} path='*'/>
        </Routes>
  )
}

export default App
