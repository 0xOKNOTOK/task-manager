import { useState, useEffect } from 'react'
import Firebase from './firebase'

type User = {
  uid: string
  email: string
}

const formatUserAuth = (user: User) => ({
  uid: user.uid,
  email: user.email
})

const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return
    }

    setLoading(true)
    let formatUser = formatUserAuth(authState)
    setAuthUser(formatUser)
    setLoading(false)
  }

  useEffect(() => {
    const removeSub = Firebase.auth().onAuthStateChanged(authStateChanged)
    return () => removeSub()
  }, [])

  return {
    authUser,
    loading
  }
}

export default useFirebaseAuth
