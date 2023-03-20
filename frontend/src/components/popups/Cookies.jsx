import '@/styles/components/popups/cookies.scss'
import Button from '@/components/Button.jsx'
import MainContext from '@/context/MainContext.jsx'
import UserContext from '@/context/UserContext.jsx'
import { useContext } from 'react'

function Cookies () {
  const { cookiesAccepted, setCookiesAccepted } = useContext(MainContext)
  const { isAuthenticated } = useContext(UserContext)
  return (
        <>
            {!cookiesAccepted && !isAuthenticated && <>
                <div className='cookies relative'>
                    <div className='cookies__policy'>
                        <h3>Did someone say … cookies?</h3>
                        <p>Twitter and its partners use cookies to provide you with a better, safer and faster service
                            and to
                            support our business. Some cookies are necessary to use our services, improve our services,
                            and make
                            sure they work properly. Show more about your choices.
                        </p>
                    </div>
                    <div className='cookies__actions'>
                        <Button text='Accept all cookies' classNames='dark lg'
                                onClick={() => setCookiesAccepted(true)}/>
                        <Button text='Refuse non-essential cookies' classNames='dark lg'
                                onClick={() => setCookiesAccepted(true)}/>
                    </div>
                </div>
            </>
            }
        </>

  )
}

export default Cookies
