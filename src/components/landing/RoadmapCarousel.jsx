// This file is moved to src/components/landing/RoadmapCarousel.jsx
import React, { useState } from 'react';
import roadmaps from '../../data/roadmaps.json';
import styles from './RoadmapCarousel.module.css';

const RoadmapCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % roadmaps.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + roadmaps.length) % roadmaps.length);
  };

  const activeRoadmap = roadmaps[activeIndex];

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.mainTitle}>Recommended Roadmaps</h2>
      <div className={styles.carousel}>
        <button onClick={handlePrev} className={styles.navButton}>‹</button>
        <div className={styles.roadmapCard}>
          <img src={activeRoadmap.image} alt={`${activeRoadmap.program} Roadmap`} className={styles.roadmapImage} />
          <h3>{activeRoadmap.program}</h3>
          <p className={styles.description}>{activeRoadmap.description}</p>
          <ul className={styles.courseList}>
            {activeRoadmap.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        <button onClick={handleNext} className={styles.navButton}>›</button>
      </div>
    </div>
  );
};

export default RoadmapCarousel;