import React, { useState } from 'react'
import Link from 'next/link'
import { firebaseClient } from '../utils/firebaseClient'
import styles from '../styles/Login.module.css'

const Login = (_props: any) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  return (
    <div className={styles.wrapper}>
      <h1>
        <span>{`> `}</span>task
      </h1>
      <div className={styles.login}>
        <h3>Account Login</h3>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={'Email'}
        />
        <input
          type={'password'}
          value={pass}
          onChange={e => setPass(e.target.value)}
          placeholder={'Password'}
        />
        <button
          onClick={async () => {
            await firebaseClient
              .auth()
              .createUserWithEmailAndPassword(email, pass)
            window.location.href = '/'
          }}
        >
          Create account
        </button>
        <button
          onClick={async () => {
            await firebaseClient.auth().signInWithEmailAndPassword(email, pass)
            window.location.href = '/'
          }}
        >
          Log in
        </button>
      </div>
    </div>
  )
}

export default Login
