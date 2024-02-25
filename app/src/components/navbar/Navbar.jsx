import React from 'react'
import Links from '@/components/navbar/links/Links'
import styles from "../navbar/navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Codify.</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar