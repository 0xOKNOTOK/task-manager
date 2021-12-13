import Firebase from 'firebase/app'
import { firebaseConfig } from './firebase-cfg/firebase.config'

Firebase.initializeApp(firebaseConfig)

export default Firebase
