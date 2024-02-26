import PostCard from "@/components/postCard/PostCard"
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data"

// Fetch data with an API
// const getData = async () => {

//   // const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 3600 } });
//   // const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });
//   const res = await fetch("http://localhost:3000/api/blog", { cache: "no-store" });

//   if (!res.ok) {
//     throw new Error("Failed to fetch posts!");
//   }

//   return res.json();
// }

// SEO
export const metadata = {
  title: "Blog Page",
  description: "Blog",
};

const BlogPage = async () => {

  // Fetch data with an API
  // const posts = await getData();

  // Fetch data from temporary data or directly from MongoDB
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage