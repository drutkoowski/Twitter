import { useContext } from 'react'
import UserContext from '@/context/UserContext.jsx'

import '@/styles/home/tweet_wrapper.scss'
import InputSearch from '@/components/InputSearch.jsx'
import TagsList from '@/components/tags/TagsList.jsx'
import HomeNavbar from '@/components/navbars/HomeNavbar.jsx'
import TweetForm from './TweetForm.jsx'
import TweetList from './TweetList.jsx'

function TweetWrapper () {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(UserContext)
  console.log(isAuthenticated)
  return (
        <>
            {!isAuthenticated && <div className='content'>
                <div className='content__search'>
                    <InputSearch placeholder='Search Twitter' type='text' classNames='content__search__input lg'/>
                    <img src="/cog-gray.svg" alt="Settings"/>
                </div>
                <h3 className='content__title'>Trends for you</h3>
                <TagsList/>
                <div className='content__more'>
                    <p>Show more</p>
                </div>

            </div>
            }
            {isAuthenticated &&
                <div className='content'>
                    <HomeNavbar/>
                    <TweetForm/>
                    <TweetList/>
                </div>
            }
        </>
  )
}

export default TweetWrapper
