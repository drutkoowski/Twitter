import PropTypes from 'prop-types'
import '@/styles/components/input.scss'

function Input ({ placeholder, type, children }) {
  return (

        <div className='input__container'>
            {type === 'select' &&
                <select>
                    {children}
                </select>
            }
            {type !== 'select' &&
                <input type={type} placeholder={placeholder} className='input'/>
            }
        </div>

  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any
}

export default Input
