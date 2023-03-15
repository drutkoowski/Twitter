import './styles/index.scss'
import './styles/typography.css'
import Sidebar from '@/components/sidebar/Sidebar.jsx'
import TweetWrapper from '@/components/home/TweetWrapper.jsx'
import JoinUs from '@/components/ads/JoinUs.jsx'

function App () {
  return (
        <div className={'flex-container'}>
            <div className={'wrapper'}>
                <Sidebar/>
                <TweetWrapper/>
                <JoinUs/>
            </div>
        </div>

  )
}

export default App
