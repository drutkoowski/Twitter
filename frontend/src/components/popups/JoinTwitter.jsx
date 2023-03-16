import '@/styles/components/popups/join_twitter.scss'
import Button from '../Button.jsx'
import { useContext } from 'react'
import UserContext from '@/context/UserContext.jsx'

function JoinTwitter () {
  const { isAuthenticated } = useContext(UserContext)

  return (
        <>
            {!isAuthenticated && <div className='join-twitter'>
                <div className='join-twitter__info'>
                    <h4>Don’t miss what’s happening</h4>
                    <p>People on Twitter are the first to know.</p>
                </div>
                <div className='join-twitter__actions'>
                    <Button text='Log in' classNames='primary-outlined md'/>
                    <Button text='Sign up' classNames='white md'/>
                </div>
            </div>}
        </>

  )
}

export default JoinTwitter
