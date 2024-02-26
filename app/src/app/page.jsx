import styles from "./home.module.css"
import Image from "next/image"

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* left */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative<br></br>
          Thoughts<br></br> Agency.</h1>
        <p className={styles.desc}>
          We believe in the power of creativity to transform businesses and elevate brands.
<br></br>
<br></br>
          Our team of passionate and talented creatives is dedicated to bringing your vision to life, crafting compelling stories, and designing experiences that resonate with your audience.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          {/* "fill" according to the div */}
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      {/* right */}
      <div className={styles.imgContainer}>
        <div className={styles.heroImgContainer}>
          <Image
            src="/hero3.gif"
            alt=""
            fill
            className={styles.heroImg}
          />

        </div>
      </div>
    </div>

  );
};

export default HomePage;