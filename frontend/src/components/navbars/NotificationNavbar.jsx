import { useState } from 'react'

function NotificationNavbar () {
  const [onlyFollowing, setOnlyFollowing] = useState(false)
  return (
        <div className='content__navbar'>
            <h4>Notifications</h4>
            <div className='content__navbar__divider'>
                <div className='content__navbar__divider__item' onClick={() => setOnlyFollowing(false)}>
                    <div
                        className={`${!onlyFollowing ? 'content__navbar__divider__item__wrapper content__navbar__divider__item__wrapper--active' : 'content__navbar__divider__item__wrapper '}`}>
                        <p>All</p>
                    </div>
                </div>
                <div className='content__navbar__divider__item' onClick={() => setOnlyFollowing(true)}>
                    <div
                        className={`${onlyFollowing ? 'content__navbar__divider__item__wrapper content__navbar__divider__item__wrapper--active' : 'content__navbar__divider__item__wrapper '}`}>
                        <p>Verified</p>
                    </div>
                </div>
                <div className='content__navbar__divider__item' onClick={() => setOnlyFollowing(true)}>
                    <div
                        className={`${onlyFollowing ? 'content__navbar__divider__item__wrapper content__navbar__divider__item__wrapper--active' : 'content__navbar__divider__item__wrapper '}`}>
                        <p>Mentions</p>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default NotificationNavbar
