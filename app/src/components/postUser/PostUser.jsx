import React from 'react'
import styles from "./postUser.module.css"
import { getUser } from '@/lib/data'

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

  // Fetch data from temporary data
  const user = await getUser(userId);
  // console.log(user);

  return (
    <>
    <div className={styles.detailText}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>
        {user.name}
      </span>
    </div>
    <div className={styles.detailText}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>
        {user.name}
      </span>
    </div>
    </>
  )
}

export default postUser