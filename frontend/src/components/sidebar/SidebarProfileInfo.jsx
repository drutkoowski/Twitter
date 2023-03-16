import Avatar from '../Avatar.jsx'
import '@/styles/sidebar/sidebar_profile_info.scss'

function SidebarProfileInfo () {
  return (
        <div className='sidebar__element--profile'>
            <Avatar/>
            <div className='sidebar__element--profile__username'>
                <h4>rutek</h4>
                <small>@okuratny_rutek</small>
            </div>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill='#71767BFF'>
                <path
                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
            </svg>
        </div>
  )
}

export default SidebarProfileInfo
