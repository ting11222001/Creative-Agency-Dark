import { sayHello } from '@/lib/action'
import React from 'react'

const ServerActionTestPage = () => {

  const actionInComponent = async () => {
    "use server"
    console.log("it works!")
  }
  return (
    <div>
      <form action={actionInComponent}>
        <button>Test me</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage