import { useContext } from 'react'
import UserContext from '@/context/UserContext.jsx'

import '@/styles/sidebar/index.scss'
import SidebarLink from './SidebarLink.jsx'
import SidebarProfileInfo from './SidebarProfileInfo.jsx'
import Button from '../Button.jsx'

function Sidebar () {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(UserContext)
  console.log(isAuthenticated)
  return (

        <div className='sidebar'>
            <div className='sidebar__wrapper'>
                <div className='sidebar__wrapper__fixed'>
                    <div className='sidebar__element pl-2'>
                        <img src="/twitter-gray.svg" alt="Twitter logo"/>
                    </div>
                    {!isAuthenticated &&
                        <>
                            <SidebarLink text='Explore' imgPath='/hash-gray.svg' altText='Explore'/>
                            <SidebarLink text='Settings' imgPath='/cog-gray.svg' altText='Settings'/>
                        </>
                    }
                    {isAuthenticated &&
                        <>
                            <SidebarLink text='Home' imgPath='/home.svg' altText='Home'/>
                            <SidebarLink text='Explore' imgPath='/hash-gray.svg' altText='Explore'/>
                            <SidebarLink text='Notifications' imgPath='/notification-gray.svg' altText='Notifications'/>
                            <SidebarLink text='Messages' imgPath='/message-gray.svg' altText='Messages'/>
                            <SidebarLink text='Bookmarks' imgPath='/bookmarks-gray.svg' altText='Bookmarks'/>
                            <SidebarLink text='Profile' imgPath='/profile-gray.svg' altText='Profile'/>
                            <SidebarLink text='More' imgPath='/options-gray.svg' altText='More'/>
                            <Button text='Tweet' classNames='primary py-3'/>
                            <SidebarProfileInfo/>
                        </>
                    }
                </div>
            </div>
        </div>

  )
}

export default Sidebar
