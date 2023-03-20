import '@/styles/views/home/tweet.scss'
import Avatar from '@/components/Avatar.jsx'
import { useRef, useState } from 'react'
import Popup from '../../popups/Popup.jsx'

function Tweet () {
  const [moreActionPopup, setMoreActionPopup] = useState(false)
  const [retweetPopup, setRetweetPopup] = useState(false)
  const moreOptionsRef = useRef(null)
  const retweetRef = useRef(null)
  console.log(moreOptionsRef)
  return (
        <div className='tweet'>
            <div className='tweet__avatar'>
                <Avatar/>
            </div>
            <div className='tweet__container'>
                <div className='tweet__container__profile-info'>
                    <h4>Username</h4>
                    <p>@Username</p>
                    <p>8h</p>
                    <div className='tweet__container__profile-info__svg-wrapper relative'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill='#71767BFF' ref={moreOptionsRef}
                             onClick={() => setMoreActionPopup(!moreActionPopup)}>
                            <path
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                        </svg>
                    </div>
                </div>
                <div className='tweet__container__content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium cursus velit quis
                    lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Vestibulum fringilla accumsan pellentesque. Aliquam erat volutpat. Phasellus vitae augue fringilla
                    nisl posuere laoreet. Maecenas vitae malesuada eros. Nam a augue vitae mi blandit tempor vitae id
                    dui. Etiam eu laoreet quam. In quam libero, sollicitudin et efficitur eget, pretium a ex.
                </div>
                <div className='tweet__container__media'>
                    <img
                        src="https://images.unsplash.com/photo-1678737171211-bf2c3def509f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""/>
                </div>
                <div className='tweet__container__actions'>
                    <div className='tweet__container__actions__counter tweet__container__actions__counter--primary'>
                        <div className='tweet__container__actions__counter__svg-container'>
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill='#71767BFF'>
                                <path
                                    d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366a8.13 8.13 0 0 1 8.129 8.13c0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067A8.005 8.005 0 0 1 1.751 10zm8.005-6a6.005 6.005 0 1 0 .133 12.01l.351-.01h1.761v2.3l5.087-2.81A6.127 6.127 0 0 0 14.122 4H9.756z"/>
                            </svg>
                        </div>
                        <p>23</p>
                    </div>
                    <div className='tweet__container__actions__counter tweet__container__actions__counter--green'>
                        <div
                            className='tweet__container__actions__counter__svg-container'>
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill='#71767BFF' ref={retweetRef}
                                 onClick={() => setRetweetPopup(!retweetPopup)}>
                                <path
                                    d="m4.5 3.88 4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5a4 4 0 0 1-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5a4 4 0 0 1 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
                            </svg>
                        </div>
                        <p>231</p>
                    </div>
                    <div className='tweet__container__actions__counter tweet__container__actions__counter--red'>
                        <div className='tweet__container__actions__counter__svg-container'>
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill='#71767BFF'>
                                <path
                                    d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5a3.44 3.44 0 0 0-2.91 1.91c-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82a3.439 3.439 0 0 0-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67a5.417 5.417 0 0 1 4.601-3.01c1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01a5.417 5.417 0 0 1 4.601 3.01c.896 1.81.846 4.17-.514 6.67z"/>
                            </svg>
                        </div>
                        <p>23</p>
                    </div>
                    <div className='tweet__container__actions__counter tweet__container__actions__counter--primary'>
                        <div className='tweet__container__actions__counter__svg-container'>
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill='#71767BFF'>
                                <path
                                    d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"/>
                            </svg>
                        </div>
                        <p>231</p>
                    </div>
                    <div className='tweet__container__actions__counter tweet__container__actions__counter--primary'>
                        <div className='tweet__container__actions__counter__svg-container'>
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill='#71767BFF'>
                                <path
                                    d="m12 2.59 5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>
                            </svg>
                        </div>
                    </div>
                    {retweetPopup &&
                        <Popup relativeElement={retweetRef} directionX='right' directionY='top' position='absolute'
                               onClose={() => setRetweetPopup(!retweetPopup)}>
                            <div className='popup__content__element'>
                                <h4>Add existing account</h4>
                            </div>
                            <div className='popup__content__element'>
                                <h4>Log out from @okuratny rutek</h4>
                            </div>
                        </Popup>
                    }
                </div>
            </div>
            {moreActionPopup &&
                <Popup relativeElement={moreOptionsRef} directionX='right' directionY='top' position='absolute'
                       onClose={() => setMoreActionPopup(!moreActionPopup)}>
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

export default Tweet
