import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CourseModal from './components/CourseModal';
import RoadmapCarousel from './components/RoadmapCarousel';
import CategoryDescriptions from './components/CategoryDescriptions';
import './App.css'

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  const handleQuestComplete = () => {
    setShowConfetti(true);
    // Stop confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <main className="container">
      {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}
      <Header />
      <Dashboard onCourseSelect={handleCourseSelect} />
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={handleCloseModal}
          onComplete={handleQuestComplete}
        />
      )}
      <CategoryDescriptions />
      <RoadmapCarousel />
    </main>
  )
}

export default App
