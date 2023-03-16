import NotificationNavbar from '@/components/navbars/NotificationNavbar.jsx'
import NotificationsList from './NotificationsList.jsx'

function NotificationWrapper () {
  return (
        <div className='content'>
            <NotificationNavbar/>
            <NotificationsList/>
        </div>
  )
}

export default NotificationWrapper
