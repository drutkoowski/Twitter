import '@/styles/home/tweet_wrapper.scss'
import Input from '@/components/Input.jsx'

function TweetWrapper () {
  return (
        <div className='content'>
            <div className='content__search'>
                <Input placeholder='Search Twitter' type='text' classNames='content__search__input'/>
                <img src="/cog-gray.svg" alt="Settings"/>
            </div>
        </div>
  )
}

export default TweetWrapper
