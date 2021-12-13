import firebaseClient from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from './firebase-cfg/firebase.config'

if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(firebaseConfig)
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION)
  ;(window as any).firebase = firebaseClient
}

export { firebaseClient }
