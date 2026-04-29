import React, { useState } from 'react';
import styles from './RoadmapCarousel.module.css';

const roadmaps = [
  {
    program: 'Computer Science',
    image: '/images/cs-roadmap.JPG',
    description: 'A foundational path focusing on algorithms, data structures, and systems.',
    courses: ['TCS-101: Algorithms & Data Structures', 'SYS-101: Operating Systems', 'SWE-101: Agile & Scrum Basics', 'WEB-102: JavaScript for Beginners'],
  },
  {
    program: 'Data Science',
    image: '/images/ds-roadmap.webp',
    description: 'This path emphasizes machine learning, data analysis, and visualization.',
    courses: ['AI-101: Intro to Machine Learning', 'TCS-101: Algorithms & Data Structures', 'WEB-102: JavaScript for Beginners (for visualization)', 'More Data Courses...'],
  },
  {
    program: 'Information Technology',
    image: '/images/it-roadmap.png',
    description: 'A practical path focused on infrastructure, security, and network management.',
    courses: ['SYS-101: Operating Systems', 'SEC-101: Cybersecurity Fundamentals', 'WEB-101: HTML & CSS', 'More IT Courses...'],
  },
  {
    program: 'Information Systems',
    image: '/images/is-roadmap.png',
    description: 'A blend of technology and business, focusing on software engineering and systems analysis.',
    courses: ['SWE-101: Agile & Scrum Basics', 'WEB-101: HTML & CSS', 'WEB-102: JavaScript for Beginners', 'AI-101: Intro to Machine Learning'],
  },
];

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