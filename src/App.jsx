import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import CourseModal from './components/course/CourseModal';
import LandingHero from './components/landing/LandingHero';
import LandingSection2 from './components/landing/LandingSection2';
import LandingSection3 from './components/landing/LandingSection3';
import CategoryDescriptions from './components/sections/CategoryDescriptions';
import BrandingBackground from './components/common/BrandingBackground';
import './App.css'

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'categories'

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  const handleQuestComplete = () => {
    setSelectedCourse(null); // Close modal first
    // Then show confetti after a delay for the modal's close animation
    setTimeout(() => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }, 300);
  };

  const goToCategories = () => {
    setCurrentView('categories');
    // Scroll to the top of the page when navigating
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-container">
      {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}
      <Header currentView={currentView} onNavigate={(view) => {
        setCurrentView(view);
        window.scrollTo(0, 0);
      }} />
      <main className="main-area">
        {currentView === 'landing' && (
          <div className="landing-wrapper">
            <BrandingBackground />
            <LandingHero />
            <div className="content-wrapper">
              <LandingSection2 onGoToCategories={goToCategories} />
              <LandingSection3 />
            </div>
          </div>
        )}

        {currentView === 'categories' && (
          <div className="categories-wrapper">
            <BrandingBackground />
            <div className="content-wrapper">
              <h2 className="page-title">Course Catalog</h2>
              <Dashboard id="course-dashboard" onCourseSelect={handleCourseSelect} />
              <CategoryDescriptions />
              {selectedCourse && (
                <CourseModal
                  course={selectedCourse}
                  onClose={handleCloseModal}
                  onComplete={handleQuestComplete}
                />
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
