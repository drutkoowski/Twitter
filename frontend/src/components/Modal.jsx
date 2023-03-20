import '@/styles/components/modal.scss'
import PropTypes from 'prop-types'

function Modal ({ children }) {
  return (
        <div className='modal'>
            <div className='modal__content'>{children}</div>
        </div>
  )
}

Modal.propTypes = {
  children: PropTypes.any
}

export default Modal
