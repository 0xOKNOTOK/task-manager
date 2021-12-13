import { createContext, useEffect, useState, useContext } from 'react'
import Firebase from '../utils/firebase'
import nookies from 'nookies'

const AuthContext = createContext<{ user: Firebase.User | null }>({
  user: null
})

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<Firebase.User | null>(null)

  useEffect(() => {
    return Firebase.auth().onIdTokenChanged(async user => {
      if (!user) {
        setUser(null)
        nookies.set(undefined, 'token', '', { path: '/' })
      } else {
        const token = await user.getIdToken()
        setUser(user)
        nookies.set(undefined, 'token', token, { path: '/' })
      }
    })
  }, [])

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = Firebase.auth().currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)

    return () => clearInterval(handle)
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
