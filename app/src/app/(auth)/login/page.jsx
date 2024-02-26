import LoginForm from '@/components/loginForm/LoginForm'
import React from 'react'
import styles from './login.module.css'

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage