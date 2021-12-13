import React, { createContext, useContext, Context } from 'react'
import useFirebaseAuth from '../utils/firebaseAuth'

const UserAuthContext = createContext({
  authUser: null,
  loading: true
})

export function AuthUserProvider({ children }: any) {
  const auth = useFirebaseAuth()
  return (
    <UserAuthContext.Provider value={auth.authUser}>
      {children}
    </UserAuthContext.Provider>
  )
}

export const useAuth = () => useContext(UserAuthContext)
