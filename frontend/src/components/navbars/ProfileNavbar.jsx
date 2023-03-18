import { useState } from 'react'

function ProfileNavbar () {
  const [onlyFollowing, setOnlyFollowing] = useState(false)
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
        </div>

  )
}

export default ProfileNavbar
