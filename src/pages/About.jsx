import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        As salam wa laikum, I am Muhammad Ashfaque Siddique
      </p>
    </div>
  );
};

export default About;
