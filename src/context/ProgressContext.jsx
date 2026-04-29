import React, { createContext, useContext, useState, useEffect } from 'react';
import coursesData from '../data/courses.json';

const ProgressContext = createContext();

const LOCAL_STORAGE_KEY = 'cs_dashboard_completed';

export const ProgressProvider = ({ children }) => {
  const [completedIds, setCompletedIds] = useState(() => {
    try {
      const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedIds ? JSON.parse(storedIds) : [];
    } catch (error) {
      console.error("Failed to parse completed IDs from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(completedIds));
    } catch (error) {
      console.error("Failed to save completed IDs to localStorage", error);
    }
  }, [completedIds]);

  const completeCourse = (courseId) => {
    if (!completedIds.includes(courseId)) {
      setCompletedIds(prevIds => [...prevIds, courseId]);
    }
  };

  const value = {
    courses: coursesData,
    completedIds,
    completeCourse,
  };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};

export const useProgress = () => useContext(ProgressContext);