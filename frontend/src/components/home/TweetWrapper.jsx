import { useContext } from 'react'
import UserContext from '@/context/UserContext.jsx'

import '@/styles/home/tweet_wrapper.scss'
import InputSearch from '@/components/InputSearch.jsx'
import TagsList from '@/components/tags/TagsList.jsx'

function TweetWrapper () {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(UserContext)
  console.log(isAuthenticated)
  return (
        <>
            {isAuthenticated && <div className='content'>
                <div className='content__search'>
                    <InputSearch placeholder='Search Twitter' type='text' classNames='content__search__input lg'/>
                    <img src="/cog-gray.svg" alt="Settings"/>
                </div>
                <h3 className='content__title'>Trends for you</h3>
                <TagsList/>
                <div className='content__more'>
                    <p>Show more</p>
                </div>

            </div>}
            {!isAuthenticated && <div className='content'>
                <div className='content__navbar'>
                    <h4>Home</h4>
                    <div className='content__navbar__divider'>
                        <div className='content__navbar__divider__item'>1</div>
                        <div className='content__navbar__divider__item'>2</div>
                    </div>
                </div>
            </div>}
        </>
  )
}

export default TweetWrapper
