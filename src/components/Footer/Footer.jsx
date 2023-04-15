import React from 'react';
import styles from './footer.module.css';
import LinkedIn from './LinkedIn.svg';
import Github from './Github.svg';
import Leetcode from './Leetcode.svg';
import Medium from './Medium.svg';
import Youtube from './Youtube.svg';
import Twitter from './Twitter.svg';


const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <h3 className={styles.title}>Get in touch with me on other platforms</h3>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/"><img src={LinkedIn} alt="LinkedIn" /></a> 
          <a href=""><img src={Github} alt="Github" /></a>
          <a href=""><img src={Leetcode} alt="Leetcode" /></a>
          <a href=""><img src={Medium} alt="" /></a>
          <a href=""><img src={Youtube} alt="" /></a>
          <a href=""><img src={Twitter} alt="" /></a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;