import React from 'react'
import styles from "./postCard.module.css"
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img} />
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