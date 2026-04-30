// This file is moved to src/components/course/CourseModal.jsx
import React, { useState } from 'react';
import CourseQuiz from './CourseQuiz';
import styles from './CourseModal.module.css';

const tierMap = {
  1: { label: 'Beginner', className: styles.tierBeginner },
  2: { label: 'Intermediate', className: styles.tierIntermediate },
  3: { label: 'Expert', className: styles.tierExpert },
};

const CourseModal = ({ course, onClose, onComplete }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  // The useEffect and useProgress hooks were imported but not used,
  // so they have been removed for cleanup.

  if (!course) return null;

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleQuizClose = () => {
    setShowQuiz(false);
  };

  const handleQuizComplete = () => {
    onComplete(); // App.jsx now handles closing the modal and showing confetti
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={`${styles.modalContent} ${showQuiz ? styles.expanded : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        {!showQuiz ? (
          <>
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
              <button className={styles.quizButton} onClick={handleStartQuiz}>
                Take Quiz
              </button>
            </div>
          </>
        ) : (
          <CourseQuiz 
            course={course} 
            onComplete={handleQuizComplete}
            onClose={handleQuizClose}
          />
        )}
      </div>
    </div>
  );
};

export default CourseModal;