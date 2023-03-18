import { useEffect, useState } from 'react'
import Button from '../Button.jsx'

function ProfileNavbar () {
  const [onlyFollowing, setOnlyFollowing] = useState(false)
  const listenToScroll = () => {
    const followBtnPosition = document.querySelector('.content__profile-header__upper__button').getBoundingClientRect().top
    followBtnPosition <= 0 ? document.querySelector('.content__profile-navbar__button').classList.remove('not-visible') : document.querySelector('.content__profile-navbar__button').classList.add('not-visible')
  }
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () =>
      window.removeEventListener('scroll', listenToScroll)
  }, [])
  return (
        <div className='content__profile-navbar'>
            <div className='content__profile-navbar__svg-wrapper'>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m7.414 13 5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"/>
                </svg>
            </div>
            <div className='content__profile-navbar__username'>
                <h4>rutek</h4>
                <p>7 tweets</p>
            </div>
            <Button text='Follow' classNames='white md ml-auto content__profile-navbar__button not-visible'/>
        </div>

  )
}

export default ProfileNavbar
