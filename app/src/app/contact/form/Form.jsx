"use client";
import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import styles from "../contact.module.css";

const Form = () => {
  // use emailjs to send form message to my gmail
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dp9cteq', 'template_jhfeaub', formRef.current, {
        publicKey: 'TdXLKd_GIn0xVBS5e',
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log(error);
        },
      );
  };
  return (
    <>
      <form
        className={styles.form}
        ref={formRef}
        onSubmit={sendEmail}
      >
        <h2 className={styles.subtitle}>Contact us</h2>
        <input
          type="text"
          placeholder="Name"
          required
          name="name"
        />
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
        />
        <textarea
          placeholder="Message"
          rows={8}
          name="message"
        />
        <button>Submit</button>
        {error && "Error"}
        {success && "Success"}
      </form>
    </>
  )
}

export default Form