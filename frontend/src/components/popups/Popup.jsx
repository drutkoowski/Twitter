import '@/styles/components/popups/popup.scss'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function Popup ({ children, relativeElement, directionX, directionY, position, onClose }) {
  const popup = useRef(null)

  function handleClickOutside (event) {
    if (relativeElement.current && !relativeElement.current.contains(event.target)) {
      onClose()
    }
  }

  const popupPosition = () => {
    let positionY, positionX
    popup.current.style.position = position === 'fixed' ? 'fixed' : 'absolute'
    if (directionX === 'right') {
      positionX = position === 'fixed' ? relativeElement.current.getBoundingClientRect().right : 0
      popup.current.style.right = `${positionX}px`
    } else {
      positionX = position === 'fixed' ? relativeElement.current.getBoundingClientRect().left : 0
      popup.current.style.left = `${positionX}px`
    }
    if (directionY === 'bottom') {
      positionY = relativeElement.current.getBoundingClientRect().top + 2 * relativeElement.current.offsetHeight + 10
      popup.current.style.bottom = `${positionY}px`
    } else {
      positionY = relativeElement.current.getBoundingClientRect().top - 2 * relativeElement.current.offsetHeight - 10
      popup.current.style.top = `${positionY}px`
    }
  }
  useEffect(() => {
    popupPosition()
    window.addEventListener('resize', popupPosition)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('resize', popupPosition)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [popupPosition, relativeElement])
  return (

        <div className='popup' ref={popup}>
            <div className='popup__content'>
                {children}
            </div>
        </div>
  )
}

Popup.propTypes = {
  children: PropTypes.any,
  relativeElement: PropTypes.object,
  directionX: PropTypes.string,
  directionY: PropTypes.string,
  position: PropTypes.string,
  onClose: PropTypes.func
}

export default Popup
