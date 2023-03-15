import React, { useState } from 'react'
import PropTypes from 'prop-types'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
        <UserContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.any
}
export default UserContext
