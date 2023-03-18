import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '@/context/UserContext.jsx'

import JoinUs from '@/components/ads/JoinUs.jsx'
import TagsSidebar from '@/components/views/home/TagsSidebar.jsx'
import ProfileWrapper from '@/components/views/profile/ProfileWrapper.jsx'

function Profile () {
  const { username } = useParams()
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(UserContext)
  console.log(isAuthenticated)
  console.log(username)
  return (
        <div className='wrapper'>
            {!isAuthenticated &&
                <>
                    <ProfileWrapper/>
                    <JoinUs/>
                </>
            }
            {isAuthenticated &&
                <>
                    <ProfileWrapper/>
                    <TagsSidebar/>
                </>
            }
        </div>
  )
}

export default Profile
