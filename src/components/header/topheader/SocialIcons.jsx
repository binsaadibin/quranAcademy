import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './socialIcon.module.css';

function SocialIcons() {
  return (
    <div className={styles.container}>
      <a href="https://facebook.com/fidamsd" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className={styles.socialIcons}/>
      </a>
      <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className={styles.socialIcons}/>
      </a>
      <a href="https://youtube.com/example" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className={styles.socialIcons}/>
      </a>
      <a href="https://wa.me/+923229604360" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className={styles.socialIcons}/>
      </a>
      <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className={styles.socialIcons}/>
      </a>
    </div>
  );
}

export default SocialIcons;
