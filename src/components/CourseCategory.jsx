import React from 'react';
import CourseTile from './CourseTile';
import styles from './CourseCategory.module.css';

const CourseCategory = ({ title, courses, onCourseSelect }) => {
  return (
    <section className={styles.category}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {courses.map(course => (
          <CourseTile key={course.id} course={course} onSelect={onCourseSelect} />
        ))}
      </div>
    </section>
  );
};

export default CourseCategory;