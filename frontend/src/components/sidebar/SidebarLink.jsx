import PropTypes from 'prop-types'
import '@/styles/sidebar/sidebar_link.scss'

function SidebarLink ({ text, imgPath, altText }) {
  return (

        <div className='sidebar__element'>
            <div className='sidebar__element__wrapper'>
                <img src={imgPath} alt={altText}/>
                <p>{text}</p>
            </div>
        </div>

  )
}

SidebarLink.propTypes = {
  text: PropTypes.string,
  imgPath: PropTypes.string,
  altText: PropTypes.string
}
export default SidebarLink
