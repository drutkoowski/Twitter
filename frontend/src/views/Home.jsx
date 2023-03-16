import { useContext } from 'react'
import UserContext from '@/context/UserContext.jsx'

import TweetWrapper from '@/components/views/home/TweetWrapper.jsx'
import JoinUs from '@/components/ads/JoinUs.jsx'
import TagsSidebar from '@/components/views/home/TagsSidebar.jsx'

function Home () {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(UserContext)
  console.log(isAuthenticated)
  return (
        <div className='wrapper'>
            {!isAuthenticated &&
                <>
                    <TweetWrapper/>
                    <JoinUs/>
                </>
            }
            {isAuthenticated &&
                <>
                    <TweetWrapper/>
                    <TagsSidebar/>
                </>
            }
        </div>
  )
}

export default Home
