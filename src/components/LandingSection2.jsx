import React from 'react';
import styles from './LandingSection2.module.css';

const categories = [
  {
    title: 'Web & Mobile Development',
    description: 'Learn the fundamentals of building web and mobile applications with modern frameworks and best practices.',
    icon: '🌐'
  },
  {
    title: 'Intelligence & Data',
    description: 'Dive into machine learning, data analysis, and building intelligent systems.',
    icon: '🧠'
  },
  {
    title: 'Systems & Infrastructure',
    description: 'Master operating systems, networking, and cloud infrastructure concepts.',
    icon: '⚙️'
  },
  {
    title: 'Cybersecurity & Ethics',
    description: 'Understand security principles, ethical considerations, and protecting digital assets.',
    icon: '🔒'
  },
  {
    title: 'Software Engineering',
    description: 'Learn design patterns, agile methodologies, and collaborative development practices.',
    icon: '🛠️'
  },
  {
    title: 'Theoretical Computer Science',
    description: 'Explore algorithms, complexity theory, and computational foundations.',
    icon: '📐'
  },
  {
    title: 'Interactive Media & Specialized Apps',
    description: 'Create interactive experiences, games, and specialized applications.',
    icon: '🎮'
  },
];

const LandingSection2 = ({ onGoToCategories }) => {
  return (
    <section className={`${styles.container} landingSection`}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Explore Our Learning Paths</h2>
        <p className={styles.sectionSubtitle}>Discover curated topics and grow your computer science skills</p>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.title} className={styles.card}>
              <div className={styles.icon}>{cat.icon}</div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardDesc}>{cat.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <button className={styles.ctaButton} onClick={onGoToCategories}>
            Go to Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingSection2;
