import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const MainContext = createContext()

export const MainProvider = ({ children }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false)
  return (
        <MainContext.Provider value={{ cookiesAccepted, setCookiesAccepted }}>
            {children}
        </MainContext.Provider>
  )
}
MainProvider.propTypes = {
  children: PropTypes.any
}
export default MainContext
