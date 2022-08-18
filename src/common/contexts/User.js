import { createContext, useState } from 'react'

export const UserContext = createContext()
UserContext.displayName = 'User'

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [values, setValues] = useState(0)
  return (
    <UserContext.Provider value={{ name, setName, values, setValues }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider