import '@/styles/views/home/tags_sidebar.scss'
import InputSearch from '@/components/InputSearch.jsx'
import TagsList from '@/components/tags/TagsList.jsx'
import FollowSuggestion from '@/components/FollowSuggestion.jsx'
import TosFooter from '../../TosFooter.jsx'

function TagsSidebar () {
  return (
        <div className='tags-sidebar'>
            <div className='tags-sidebar__wrapper'>
                <div className='tags-sidebar__wrapper__fixed'>
                    <InputSearch placeholder='Search'/>
                    <div className='tags-sidebar__wrapper__fixed__trends'>
                        <h5>Trends for you</h5>
                        <TagsList/>
                    </div>
                    <div className='tags-sidebar__wrapper__fixed__follow-suggestions'>
                        <h5>Who to follow</h5>
                        <FollowSuggestion/>
                    </div>
                    <TosFooter/>
                </div>
            </div>
        </div>
  )
}

export default TagsSidebar
