import React from 'react';
import RoadmapCarousel from './RoadmapCarousel';
import styles from './LandingSection3.module.css';

const LandingSection3 = () => {
  return (
    <section className={`${styles.container} landingSection`}>
      <RoadmapCarousel />
    </section>
  );
};

export default LandingSection3;
