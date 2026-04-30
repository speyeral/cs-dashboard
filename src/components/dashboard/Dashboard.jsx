// This file is moved to src/components/dashboard/Dashboard.jsx
import React from 'react';
import { useProgress } from '../../context/ProgressContext';
import CourseCategory from '../course/CourseCategory';
import styles from './Dashboard.module.css';

// Define the layout for different categories.
const categoryLayouts = {
  'Web & Mobile Development': { colSpan: 7 },
  'Intelligence & Data': { colSpan: 5 },
  'Systems & Infrastructure': { colSpan: 4 },
  'Cybersecurity & Ethics': { colSpan: 4 },
  'Software Engineering': { colSpan: 4 },
  'Theoretical Computer Science': { colSpan: 6 },
  'Interactive Media & Specialized Apps': { colSpan: 6 },
};

const Dashboard = ({ onCourseSelect, id }) => {
  const { courses } = useProgress();

  const groupedCourses = React.useMemo(() => {
    return courses.reduce((acc, course) => {
      const { category } = course;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(course);
      return acc;
    }, {});
  }, [courses]);

  return (
    <div id={id} className={styles.dashboardGrid}>
      {Object.entries(groupedCourses).map(([category, coursesInCategory]) => {
        // Default to 6 columns if not specified in the layout config
        const layout = categoryLayouts[category] || { colSpan: 6 };
        return (
          <div key={category} className={styles.categoryWrapper} style={{ '--col-span': layout.colSpan }}>
            <CourseCategory title={category} courses={coursesInCategory} onCourseSelect={onCourseSelect} />
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;