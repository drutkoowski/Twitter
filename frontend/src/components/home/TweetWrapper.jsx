import '@/styles/home/tweet_wrapper.scss'
import InputSearch from '@/components/InputSearch.jsx'
import TagsList from '@/components/tags/TagsList.jsx'

function TweetWrapper () {
  return (
        <div className='content'>
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
  )
}

export default TweetWrapper
