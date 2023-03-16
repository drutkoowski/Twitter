import '@/styles/views/home/tweet_form.scss'
import Button from '@/components/Button.jsx'
import Avatar from '@/components//Avatar.jsx'

function TweetForm () {
  return (
        <div className='tweet-form'>
            <div className='tweet-form__avatar'>
                <Avatar/>
            </div>
            <div className='tweet-form__container'>
                <input type="text" placeholder="What's happening?"/>
                <div className='tweet-form__container__actions'>
                    <div className='tweet-form__container__actions__icons'>
                        <img src="/image.svg" alt="Image"/>
                        <img src="/gif.svg" alt="Gif"/>
                    </div>
                    <Button text='Tweet' classNames='primary md'/>
                </div>
            </div>
        </div>
  )
}

export default TweetForm
