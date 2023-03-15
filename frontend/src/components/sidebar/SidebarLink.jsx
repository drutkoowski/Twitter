import PropTypes from 'prop-types'
import '@/styles/sidebar/sidebar_link.scss'

function SidebarLink ({ text, imgPath, altText }) {
  return (
        <div className='sidebar__element'>
            <img src={imgPath} alt={altText}/>
            <p>{text}</p>
        </div>
  )
}

SidebarLink.propTypes = {
  text: PropTypes.string,
  imgPath: PropTypes.string,
  altText: PropTypes.string
}
export default SidebarLink
