import React, { useState, useEffect, useRef } from 'react';
import { useProgress } from '../context/ProgressContext';
import ProgressBar from './ProgressBar';
import styles from './CourseModal.module.css';

const HOLD_DURATION = 1500; // 1.5 seconds

const tierMap = {
  1: { label: 'Beginner', className: styles.tierBeginner },
  2: { label: 'Intermediate', className: styles.tierIntermediate },
  3: { label: 'Expert', className: styles.tierExpert },
};

const CourseModal = ({ course, onClose, onComplete }) => {
  const { completeCourse } = useProgress();
  const [holdProgress, setHoldProgress] = useState(0);
  const holdInterval = useRef(null);
  const holdTimeout = useRef(null);

  const handleMouseDown = () => {
    if (holdProgress > 0) return;

    holdTimeout.current = setTimeout(() => {
      completeCourse(course.id);
      onComplete();
      onClose();
    }, HOLD_DURATION);

    const startTime = Date.now();
    holdInterval.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min((elapsedTime / HOLD_DURATION) * 100, 100);
      setHoldProgress(progress);
    }, 50);
  };

  const handleMouseUp = () => {
    clearInterval(holdInterval.current);
    clearTimeout(holdTimeout.current);
    if (holdProgress < 100) {
      setHoldProgress(0);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(holdInterval.current);
      clearTimeout(holdTimeout.current);
    };
  }, []);

  if (!course) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}>{course.title}</h2>
        <div className={styles.meta}>
          {tierMap[course.tier] && (
            <span className={`${styles.tierTag} ${tierMap[course.tier].className}`}>
              {tierMap[course.tier].label}
            </span>
          )}
          <p className={styles.xp}>{course.xp} XP</p>
          {course.hours != null && <p className={styles.hours}>{course.hours} Hours</p>}
        </div>
        <p className={styles.description}>{course.description}</p>
        <div className={styles.actions}>
          <a href={course.link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            Go to Course
          </a>
          <div className={styles.completeButtonContainer}>
            <button
              className={styles.completeButton}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp} // Reset if mouse leaves button
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
            >
              Complete Quest
            </button>
            <ProgressBar progress={holdProgress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;