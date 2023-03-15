import '@/styles/home/tweet_form.scss'
import Button from '@/components/Button.jsx'

function TweetForm () {
  return (
        <div className='tweet-form'>
            <div className='tweet-form__avatar'>
                <img src="/default_image.png" alt="Your Avatar"/>
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
