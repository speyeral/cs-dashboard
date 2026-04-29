import React from 'react';
import styles from './LandingHero.module.css';

const LandingHero = () => {
  return (
    <section className={`${styles.hero} landingSection`}>
      {/* Decorative background elements */}
      <div className={styles.bgOrb1}></div>
      <div className={styles.bgOrb2}></div>
      <div className={styles.gridBg}></div>

      <div className={styles.heroInner}>
        <div className={styles.heroPreTitle}>Your Learning Journey Starts Here</div>
        
        <h2 className={styles.heroTitle}>Welcome to the Supplemental CS Dashboard</h2>
        
        <p className={styles.heroSubtitle}>your guide as you go through your journey through the world of computer science</p>

        <div className={styles.heroStats}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>7+</div>
            <div className={styles.statLabel}>Learning Paths</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>∞</div>
            <div className={styles.statLabel}>Growth Potential</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Community Driven</div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollHint}>
        <span>↓</span> Scroll to explore
      </div>

      {/* Floating decoration elements */}
      <div className={styles.floatingCard1}>
        <div className={styles.badge}>📚 Learn</div>
      </div>
      <div className={styles.floatingCard2}>
        <div className={styles.badge}>🎯 Grow</div>
      </div>
    </section>
  );
};

export default LandingHero;
