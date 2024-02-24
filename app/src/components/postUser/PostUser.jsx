import React from 'react'
import styles from "./postUser.module.css"

const getData = async (userId) => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });
  // fetch by default will cache the data

  if (!res.ok) {
    throw new Error("Failed to fetch user!");
  }

  return res.json();
}

const postUser = async ({ userId }) => {

  const user = await getData(userId);

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