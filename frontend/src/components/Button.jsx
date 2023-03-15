import PropTypes from 'prop-types'
import '@/styles/components/button.scss'

function Button ({ text, classNames }) {
  return (
        <button className={classNames}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  classNames: PropTypes.string
}
export default Button
