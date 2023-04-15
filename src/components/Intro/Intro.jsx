import React from 'react';
import styles from './intro.module.css';
import introImg from './intro-img.png';

const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <img src={introImg} alt='' />
        <div className={styles.info}>
          <h1 className={styles.title}>My Blog</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
