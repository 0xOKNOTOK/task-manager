import Firebase from 'firebase/app'
import { firebaseConfig } from './firebase-cfg/firebase.config'

if (typeof window !== 'undefined' && !Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig)
}

Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.SESSION)

export default Firebase
