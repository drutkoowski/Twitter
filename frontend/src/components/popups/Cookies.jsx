import '@/styles/components/popups/cookies.scss'
import Button from '@/components/Button.jsx'

function Cookies () {
  return (
        <div className='cookies'>
            <div className='cookies__policy'>
                <h3>Did someone say … cookies?</h3>
                <p>Twitter and its partners use cookies to provide you with a better, safer and faster service and to
                    support our business. Some cookies are necessary to use our services, improve our services, and make
                    sure they work properly. Show more about your choices.
                </p>
            </div>
            <div className='cookies__actions'>
                <Button text='Accept all cookies' classNames='dark lg'/>
                <Button text='Refuse non-essential cookies' classNames='dark lg'/>
            </div>
        </div>
  )
}

export default Cookies
