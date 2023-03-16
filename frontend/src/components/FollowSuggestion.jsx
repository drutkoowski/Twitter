import Avatar from '@/components/Avatar.jsx'
import Button from '@/components/Button.jsx'
import '@/styles/components/follow_suggestion.scss'

function FollowSuggestion () {
  return (

        <div className='follow-suggestion'>
            <Avatar/>
            <div className='follow-suggestion__username'>
                <h4>rutek</h4>
                <small>@okuratny_rutek</small>
            </div>
            <Button text='Follow' classNames='white sm'/>
        </div>

  )
}

export default FollowSuggestion
