import { login } from '@/lib/action'
import { auth } from '@/lib/auth';
import React from 'react'

const LoginPage = async () => {

  const session = await auth();
  // console.log(session);

  return (
    <div>
      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login with Credentials</button>
      </form>
    </div>
  )
}

export default LoginPage