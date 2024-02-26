import LoginForm from '@/components/loginForm/loginForm'
import { login } from '@/lib/action'
import { auth } from '@/lib/auth'
import React from 'react'
import styles from './login.module.css'

const LoginPage = async () => {

  const session = await auth();
  // console.log(session);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage