import Image from "next/image";
import styles from "./contact.module.css";
import Form from "./form/Form";

// SEO
export const metadata = {
  title: "Contact Page",
  description: "Contact",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {/* left */}
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      {/* right */}
      <div className={styles.formContainer}>
        <Form />
      </div>
    </div>
  )
}

export default ContactPage