import '@/styles/sidebar/index.scss'
import SidebarLink from './SidebarLink.jsx'

function Sidebar () {
  return (
        <div className='sidebar'>
            <div className='sidebar__element'>
                <img src="/twitter-gray.svg" alt="Twitter logo"/>
            </div>
            <SidebarLink text='Explore' imgPath='/hash-gray.svg' altText='Explore'/>
            <SidebarLink text='Settings' imgPath='/cog-gray.svg' altText='Settings'/>
        </div>
  )
}

export default Sidebar
