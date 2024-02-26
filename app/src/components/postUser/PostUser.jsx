import React from 'react'
import styles from "./postUser.module.css"
import { getUser } from '@/lib/data'
import Image from 'next/image';

// Fetch data with an API
// const getData = async (userId) => {

//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });
//   // fetch by default will cache the data

//   if (!res.ok) {
//     throw new Error("Failed to fetch user!");
//   }

//   return res.json();
// }

const postUser = async ({ userId }) => {

  // Fetch data with an API
  // const user = await getData(userId);

  // Fetch data from temporary data or directly from MongoDB
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img && user.img != "" ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>
          {user.username}
        </span>
      </div>

    </div>
  )
}

export default postUser