"use client"

import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink'

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

const Links = () => {
  const [open, setOpen] = useState(false);


  // TEMPORARY
  const session = true;
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
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
            </>
          )
        }
      </div>
      <button onClick={() => setOpen((prev) => !prev)} className={styles.menuButton}>Menu</button>
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