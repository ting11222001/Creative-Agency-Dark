import { sayHello } from '@/lib/action'
import React from 'react'

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={sayHello}>
        <button>Test me</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage