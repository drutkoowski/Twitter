import PropTypes from 'prop-types'
import '@/styles/components/input.scss'
import { useState } from 'react'

function Input ({ placeholder, type, children, counter }) {
  const [inputLength, setInputLength] = useState(0)
  return (

        <div className='input__container'>
            {type === 'select' &&
                <select>
                    {children}
                </select>
            }
            {type !== 'select' &&
                <div className="input__container__wrapper">
                    <input type={type} className='input' required
                           onChange={(e) => setInputLength(e.target.value.length)}/>
                    <span className="input__container__wrapper__floating-label">{placeholder}</span>
                    {counter && <span className='input__container__wrapper__counter'>
                {inputLength} / 50</span>}
                </div>
            }
        </div>

  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  counter: PropTypes.bool
}

export default Input
