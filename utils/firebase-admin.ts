import FirebaseAdmin from 'firebase-admin'

import { serviceAccount } from './sec'

if (!FirebaseAdmin.apps.length) {
  FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert({
      privateKey: serviceAccount.private_key,
      clientEmail: serviceAccount.client_email,
      projectId: serviceAccount.project_id
    })
  })
}
