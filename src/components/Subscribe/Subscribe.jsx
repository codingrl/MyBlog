import React from 'react';
import styles from './subscribe.module.css';

const Subscribe = () => {
  return (
    <section>
      <div className={styles.container}>
        <p className={styles.text}>
          Would you like to recieve emails of my posts every friday, if yes then
          consider subscribing
        </p>
        <form className={styles.form}>
          <input className={styles.input} type='email' placeholder='name@domain.com' />
          <button className={styles.subscribe}>Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
