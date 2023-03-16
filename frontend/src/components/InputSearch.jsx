import PropTypes from 'prop-types'
import '@/styles/components/input_search.scss'

function InputSearch ({ placeholder, type, classNames }) {
  return (
        <div className='input-container'>
            <svg viewBox="0 0 24 24" aria-hidden="true" height='18.75' width='18.75'>
                <path
                    d="M10.25 3.75a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm-8.5 6.5a8.5 8.5 0 1 1 15.176 5.262l4.781 4.781-1.414 1.414-4.781-4.781A8.5 8.5 0 0 1 1.75 10.25z"/>
            </svg>
            <input className={classNames} placeholder={placeholder} type={type}/>
        </div>
  )
}

InputSearch.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  classNames: PropTypes.string
}
export default InputSearch
