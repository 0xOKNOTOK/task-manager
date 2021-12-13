import firebaseAdmin from 'firebase-admin'

var serviceAccount = require('./sec.json')

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
  })
}

export { firebaseAdmin }
