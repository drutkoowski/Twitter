import PropTypes from 'prop-types'
import '@/styles/components/button.scss'

function Button ({ text, classNames, onClick }) {
  return (
        <button className={classNames} onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  classNames: PropTypes.string,
  onClick: PropTypes.func
}
export default Button
