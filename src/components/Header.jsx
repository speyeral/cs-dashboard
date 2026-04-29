import React from 'react';
import { useProgress } from '../context/ProgressContext';
import styles from './Header.module.css';

const Header = () => {
  const { courses, completedIds } = useProgress();

  const totalXp = React.useMemo(() => {
    return completedIds.reduce((sum, id) => {
      const course = courses.find(c => c.id === id);
      return sum + (course ? course.xp : 0);
    }, 0);
  }, [completedIds, courses]);

  const level = Math.floor(totalXp / 500) + 1;
  const xpForNextLevel = 500;
  const xpInCurrentLevel = totalXp % xpForNextLevel;
  const progressPercentage = (xpInCurrentLevel / xpForNextLevel) * 100;

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Supplemental CS Dashboard</h1>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.level}>
          <span className={styles.levelLabel}>LEVEL</span>
          <span className={styles.levelValue}>{level}</span>
        </div>
        <div className={styles.xpBarContainer}>
          <div className={styles.xpBar}>
            <div className={styles.xpBarFill} style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <span className={styles.xpLabel}>{totalXp} XP</span>
        </div>
      </div>
    </header>
  );
};

export default Header;