import ProfileNavbar from '@/components/navbars/ProfileNavbar.jsx'
import ProfileHeader from './ProfileHeader.jsx'
import '@/styles/views/profile/index.scss'
import ProfileContent from './ProfileContent.jsx'

function ProfileWrapper () {
  return (
        <div className='content'>
            <ProfileNavbar/>
            <ProfileHeader/>
            <ProfileContent/>
        </div>
  )
}

export default ProfileWrapper
