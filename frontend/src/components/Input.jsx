import PropTypes from 'prop-types'
import '@/styles/components/input.scss'

function Input ({ placeholder, type, size, classNames }) {
  return (
        <input className={classNames} placeholder={placeholder} type={type}/>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  classNames: PropTypes.string
}
export default Input
