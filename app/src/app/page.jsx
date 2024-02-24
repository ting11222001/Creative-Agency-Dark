import styles from "./home.module.css"
import Image from "next/image"

const HomePage = () => {
  return (
  <div className={styles.container}>
      {/* left */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          {/* "fill" according to the div */}
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>      
      {/* right */}
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>

  );
};

export default HomePage;