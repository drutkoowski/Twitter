import InputSearch from '@/components/InputSearch.jsx'
import TagsList from '@/components/tags/TagsList.jsx'
import FollowSuggestion from '@/components/FollowSuggestion.jsx'

import '@/styles/views/explore/follow_suggestions.scss'
import '@/styles/views/explore/index.scss'
import TosFooter from '../components/TosFooter.jsx'

function Explore () {
  return (
        <div className='wrapper'>
            <div className='content'>
                <div className='content__search'>
                    <InputSearch placeholder='Search Twitter' type='text' classNames='content__search__input py-1'/>
                    <img src="/cog-gray.svg" alt="Settings"/>
                </div>
                <h3 className='content__title'>Trends for you</h3>
                <TagsList/>
                <div className='content__more'>
                    <p>Show more</p>
                </div>
            </div>
            <div className='wrapper__sidebar'>
                <div className='follow-suggestions'>
                    <h5>Who to follow</h5>
                    <FollowSuggestion/>
                    <p>Show more</p>
                </div>
                <TosFooter/>
            </div>
        </div>
  )
}

export default Explore
