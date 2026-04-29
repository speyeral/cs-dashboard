import React from 'react';
import styles from './Navigation.module.css';

const Navigation = ({ currentView, onNavigate }) => {
  const getPageTitle = () => {
    return currentView === 'landing' ? 'Supplemental CS Dashboard' : 'Categories';
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <div className={styles.navBrand}>
          <span className={styles.brandIcon}>📚</span>
          <span className={styles.brandText}>{getPageTitle()}</span>
        </div>
      </div>
      <div className={styles.navRight}>
        <button
          className={`${styles.navButton} ${currentView === 'landing' ? styles.active : ''}`}
          onClick={() => onNavigate('landing')}
        >
          Home
        </button>
        <button
          className={`${styles.navButton} ${currentView === 'categories' ? styles.active : ''}`}
          onClick={() => onNavigate('categories')}
        >
          Categories
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
