import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// Fetch data with an API
const getData = async (slug) => {

  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { cache: "no-store" });
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { cache: "no-store" });


  if (!res.ok) {
    throw new Error("Failed to fetch post!");
  }

  return res.json();
}

// const deleteData = async (slug) => {

//   const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { method: "DELETE" });


//   if (!res.ok) {
//     throw new Error("Failed to delete post!");
//   }

//   return res.json();
// }

// SEO
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  // In Next.js, it will only fetch once in the same component.
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc
  }
};

const SinglePostPage = async ({ params }) => {

  // Fetch data with an API
  // console.log(params);
  const post = await getData(params.slug);

  // Fetch data from temporary data or directly from MongoDB
  // const post = await getPost(params.slug);

  return (
    <div className={styles.container}>
      {/* left */}
      <div className={styles.imgContainer}>
        <Image
          src={post?.img}
          alt=""
          fill
          className={styles.img} />
      </div>
      {/* right */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          {post?.desc}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage