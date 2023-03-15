import PropTypes from 'prop-types'
import '@/styles/components/input_search.scss'

function InputSearch ({ placeholder, type, classNames }) {
  return (
        <div className='input-container'>
            <img src="/search.svg" alt="Search Icon"/>
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
