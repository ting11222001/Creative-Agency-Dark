import React from 'react'
import styles from "./postCard.module.css"
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.unsplash.com/photo-1618677366787-9727aacca7ea?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01, 2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>123</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem ut nam molestias enim reiciendis ea delectus itaque amet omnis totam quasi commodi aut quod incidunt repellat, necessitatibus suscipit ratione.</p>
        <Link className={styles.link} href="/">READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard