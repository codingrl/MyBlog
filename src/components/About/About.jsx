import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <section>
      <div className={styles.container}>
        <p className={styles.aboutText}>
          Here I write stuff related to computer, anime, movies and what’s
          happening in my life?
        </p>
        <a className={styles.aboutLink} href="#">More about me</a>
      </div>
    </section>
  );
};

export default About;
