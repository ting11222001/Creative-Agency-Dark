"use client"

import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink'
import Image from 'next/image';
import { handleLogout } from '@/lib/action';

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  }
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  // const session = true;
  // session is passed as a prop from Navbar because Links is a client component.
  // currently only server component allows async/await.
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link => (
          <NavLink item={link} key={link.title}></NavLink>
        )))}
        {
          session ? (
            <>
              {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>

              </form>
            </>
          ) : (
            <>
              <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
            </>
          )
        }
      </div>
      <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)} />
      {
        open && <div className={styles.mobileLinks}>
          {
            links.map(
              (link) => (
                <NavLink item={link} key={link.title}></NavLink>
              )
            )
          }
        </div>
      }
    </div>
  )
}

export default Links