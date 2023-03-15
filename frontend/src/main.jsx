import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AxiosInterceptor } from '@/interceptors/axios'

import App from './App.jsx'
import Sidebar from '@/components/sidebar/Sidebar.jsx'
import Cookies from '@/components/popups/Cookies.jsx'
import JoinTwitter from '@/components/popups/JoinTwitter.jsx'
import { UserProvider } from '@/context/UserContext.jsx'

import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AxiosInterceptor>
            <UserProvider>
                <div className='flex-container'>
                    <Sidebar/>
                    <App/>
                    <div className='policy'>
                        <JoinTwitter/>
                        <Cookies/>
                    </div>
                </div>
            </UserProvider>
        </AxiosInterceptor>
    </BrowserRouter>
)
