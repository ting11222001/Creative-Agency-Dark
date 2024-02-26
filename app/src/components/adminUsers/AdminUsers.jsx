import React, { Suspense } from 'react'
import styles from './adminUsers.module.css'
import { getUsers } from '@/lib/data'
import { deleteUser } from '@/lib/action';
import Image from 'next/image';
import Spinner from '../loadingSpinner/Spinner';

const AdminUsers = async () => {

  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Suspense fallback={<Spinner />}>
              <Image
                src={user.img || "/noAvatar.png"}
                alt=""
                width={50}
                height={50}
              />
            </Suspense>
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  )
}

export default AdminUsers