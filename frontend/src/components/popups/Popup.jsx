import '@/styles/components/popups/popup.scss'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function Popup ({ children }) {
  const popup = useRef(null)
  useEffect(() => {
    const parent = popup.current.parentElement
    const positionLeft = parent.getBoundingClientRect().left + 50
    const positionTop = parent.getBoundingClientRect().top + 50
    popup.current.style.top = `${positionTop}px`
    popup.current.style.left = `${positionLeft}px`
  }, [])
  return (
        <div className='popup' ref={popup}>
            <div className='popup__content'>
                {children}
            </div>
        </div>
  )
}

Popup.propTypes = {
  children: PropTypes.any
}

export default Popup
