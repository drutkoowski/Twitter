import { useContext, useRef, useState } from 'react'
import UserContext from '@/context/UserContext.jsx'

import '@/styles/sidebar/index.scss'
import SidebarLink from './SidebarLink.jsx'
import SidebarProfileInfo from './SidebarProfileInfo.jsx'
import Button from '../Button.jsx'
import Popup from '../popups/Popup.jsx'

function Sidebar () {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(UserContext)
  const [showProfilePopup, setShowProfilePopup] = useState(false)
  const profileInfoRef = useRef(null)
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
                            <SidebarLink text='Explore' imgPath='/hash-gray.svg' altText='Explore'
                                         redirectPath='/explore'/>
                            <SidebarLink text='Settings' imgPath='/cog-gray.svg' altText='Settings'/>
                        </>
                    }
                    {isAuthenticated &&
                        <>
                            <SidebarLink text='Home' imgPath='/home.svg' altText='Home' redirectPath='/home'/>
                            <SidebarLink text='Explore' imgPath='/hash-gray.svg' altText='Explore'
                                         redirectPath='/explore'/>
                            <SidebarLink text='Notifications' imgPath='/notification-gray.svg' altText='Notifications'
                                         redirectPath='/notifications'/>
                            <SidebarLink text='Messages' imgPath='/message-gray.svg' altText='Messages'
                                         redirectPath='/messages'/>
                            <SidebarLink text='Bookmarks' imgPath='/bookmarks-gray.svg' altText='Bookmarks'
                                         redirectPath='/bookmarks'/>
                            <SidebarLink text='Profile' imgPath='/profile-gray.svg' altText='Profile'
                                         redirectPath='/okuratny_rutek'/>
                            <SidebarLink text='More' imgPath='/options-gray.svg' altText='More'/>
                            <Button text='Tweet' classNames='primary py-3'/>
                            <div ref={profileInfoRef} className='sidebar__container__element--profile relative'>
                                <SidebarProfileInfo showProfilePopup={() => setShowProfilePopup(!showProfilePopup)}
                                />
                            </div>
                        </>
                    }
                </div>
            </div>
            {showProfilePopup &&
                <Popup relativeElement={profileInfoRef} directionY='top' directionX='left' position='fixed'
                       onClose={() => setShowProfilePopup(!showProfilePopup)}>
                    <div className='popup__content__element'>
                        <h4>Add existing account</h4>
                    </div>
                    <div className='popup__content__element'>
                        <h4>Log out from @okuratny rutek</h4>
                    </div>
                </Popup>
            }
        </div>

  )
}

export default Sidebar
