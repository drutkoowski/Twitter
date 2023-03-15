import Button from '../Button.jsx'
import '@/styles/components/ads/join_us.scss'

function JoinUs () {
  return (
        <div className='join-us'>
            <h4>New to Twitter?</h4>
            <small>Sign up now to get your own personalized timeline!</small>
            <Button text='Zarejestruj się przez Google' classNames='white lg'/>
            <Button text='Zarejestruj się przez Apple' classNames='white lg'/>
            <Button text='Utwórz konto' classNames='white lg'/>
            <small>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</small>
        </div>
  )
}

export default JoinUs
