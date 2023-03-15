import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AxiosInterceptor } from '@/interceptors/axios'
import App from './App.jsx'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AxiosInterceptor>
            <App/>
        </AxiosInterceptor>
    </BrowserRouter>
)
