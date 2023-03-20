import '@/styles/components/popups/popup.scss'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function Popup ({ children, relativeElementClass }) {
  const popup = useRef(null)
  const popupPosition = () => {
    const relativeElement = document.querySelector(`.${relativeElementClass}`)
    const positionLeft = relativeElement.getBoundingClientRect().left
    const positionTop = relativeElement.getBoundingClientRect().top - 100
    popup.current.style.top = `${positionTop}px`
    popup.current.style.left = `${positionLeft}px`
  }
  useEffect(() => {
    popupPosition()
    window.addEventListener('resize', popupPosition)
    return () => window.removeEventListener('resize', popupPosition)
  }, [popupPosition])
  return (
        <div className='relative'>
            <div className='popup' ref={popup}>
                <div className='popup__content'>
                    {children}
                </div>
            </div>
        </div>

  )
}

Popup.propTypes = {
  children: PropTypes.any,
  relativeElementClass: PropTypes.string
}

export default Popup
