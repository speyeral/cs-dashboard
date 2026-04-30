import React from 'react';
import styles from './BrandingBackground.module.css';

const BrandingBackground = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bgOrb1}></div>
      <div className={styles.bgOrb2}></div>
      <div className={styles.gridBg}></div>
    </div>
  );
};

export default BrandingBackground;