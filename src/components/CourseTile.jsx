import React from 'react';
import { useProgress } from '../context/ProgressContext';
import styles from './CourseTile.module.css';

const CourseTile = ({ course, onSelect }) => {
  const { completedIds } = useProgress();
  const isCompleted = completedIds.includes(course.id);

  const handleClick = () => {
    if (isCompleted) return;
    onSelect(course);
  };

  const tileClasses = `${styles.tile} ${isCompleted ? styles.completed : ''}`;

  return (
    <div className={tileClasses} onClick={handleClick}>
      <div className={styles.header}>
        <h3 className={styles.title}>{course.title}</h3>
        {isCompleted && <span className={styles.checkmark}>✓</span>}
      </div>
      <p className={styles.xp}>{course.xp} XP</p>
    </div>
  );
};

export default CourseTile;