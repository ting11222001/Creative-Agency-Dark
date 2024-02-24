import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/PostUser";

const getData = async (slug) => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { cache: "no-store" });
  // fetch by default will cache the data

  if (!res.ok) {
    throw new Error("Failed to fetch post!");
  }

  return res.json();
}

const SinglePostPage = async ({ params }) => {

  // console.log(params);

  const post = await getData(params.slug);

  return (
    <div className={styles.container}>
      {/* left */}
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1618677366787-9727aacca7ea?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className={styles.img} />
      </div>
      {/* right */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.unsplash.com/photo-1618677366787-9727aacca7ea?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className={styles.avatar}
            width={50}
            height={50} />
          <PostUser userId={post.userId} />
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage