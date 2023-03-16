import PropTypes from 'prop-types'
import '@/styles/sidebar/sidebar_link.scss'
import { useNavigate } from 'react-router-dom'

function SidebarLink ({ text, imgPath, altText, redirectPath }) {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate(redirectPath)
  }
  return (

        <div className='sidebar__element' onClick={handleRedirect}>
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
  altText: PropTypes.string,
  redirectPath: PropTypes.string
}
export default SidebarLink
