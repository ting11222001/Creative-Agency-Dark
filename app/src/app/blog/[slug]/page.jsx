import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      {/* left */}
      <div className={styles.imgContainer}>
        <Image src="https://images.unsplash.com/photo-1618677366787-9727aacca7ea?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill className={styles.img} />
      </div>
      {/* right */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="https://images.unsplash.com/photo-1618677366787-9727aacca7ea?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className={styles.avatar} width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>
              Published
            </span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Terry Je</span>
            <span className={styles.detailValue}>
              2024.01.01
            </span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ut placeat illo doloremque magnam ipsum laboriosam necessitatibus distinctio culpa aliquid tenetur id a? Ratione eveniet incidunt adipisci fugit architecto commodi.</div>
      </div>
    </div>
  )
}

export default SinglePostPage