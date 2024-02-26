import React, { Suspense } from 'react'
import styles from './adminPosts.module.css'
import { getPosts } from '@/lib/data'
import Image from 'next/image';
import { deletePost } from '@/lib/action';
import Spinner from '../loadingSpinner/Spinner';

const AdminPosts = async () => {

  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Suspense fallback={<Spinner />}>
              <Image
                src={post.img && post.img != "" ? post.img : "https://images.unsplash.com/photo-1519984930929-ebf9b55a5986?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt=""
                width={50}
                height={50}
              />
            </Suspense>
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            {/* pass id of the post to deletePost() */}
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  )
}

export default AdminPosts