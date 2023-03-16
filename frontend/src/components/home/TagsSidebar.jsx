import '@/styles/home/tags_sidebar.scss'
import InputSearch from '@/components/InputSearch.jsx'
import TagsList from '../tags/TagsList.jsx'

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
                </div>
            </div>

        </div>
  )
}

export default TagsSidebar
