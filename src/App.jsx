import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import CourseModal from './components/CourseModal';
import CategoryDescriptions from './components/CategoryDescriptions';
import LandingHero from './components/LandingHero';
import LandingSection2 from './components/LandingSection2';
import LandingSection3 from './components/LandingSection3';
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
    setShowConfetti(true);
    // Stop confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const goToCategories = () => {
    setCurrentView('categories');
    window.scrollTo(0, 0);
  };

  const goToHome = () => {
    setCurrentView('landing');
    window.scrollTo(0, 0);
  };

  return (
    <main className="container">
      {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}
      <Navigation currentView={currentView} onNavigate={(view) => {
        setCurrentView(view);
        window.scrollTo(0, 0);
      }} />
      <Header />

      {currentView === 'landing' && (
        <>
          <LandingHero />
          <LandingSection2 onGoToCategories={goToCategories} />
          <LandingSection3 />
        </>
      )}

      {currentView === 'categories' && (
        <div className="categoriesView">
          <Dashboard onCourseSelect={handleCourseSelect} />
          {selectedCourse && (
            <CourseModal
              course={selectedCourse}
              onClose={handleCloseModal}
              onComplete={handleQuestComplete}
            />
          )}
          <CategoryDescriptions />
          
          {/* Go back to home button */}
          <div className="goBackContainer">
            <button className="goBackButton" onClick={goToHome}>
              ← Back to Home
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
