import PropTypes from 'prop-types'
import '@/styles/components/button.scss'

function Button ({ text, size }) {
  return (
        <button>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string
}
export default Button
