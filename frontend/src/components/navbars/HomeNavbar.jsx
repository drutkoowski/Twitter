import { useState } from 'react'

function HomeNavbar () {
  const [onlyFollowing, setOnlyFollowing] = useState(false)
  return (
        <div className='content__navbar'>
            <h4>Home</h4>
            <div className='content__navbar__divider'>
                <div className='content__navbar__divider__item' onClick={() => setOnlyFollowing(false)}>
                    <div
                        className={`${!onlyFollowing ? 'content__navbar__divider__item__wrapper content__navbar__divider__item__wrapper--active' : 'content__navbar__divider__item__wrapper '}`}>
                        <p>For you</p>
                    </div>
                </div>
                <div className='content__navbar__divider__item' onClick={() => setOnlyFollowing(true)}>
                    <div
                        className={`${onlyFollowing ? 'content__navbar__divider__item__wrapper content__navbar__divider__item__wrapper--active' : 'content__navbar__divider__item__wrapper '}`}>
                        <p>Following</p>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default HomeNavbar
