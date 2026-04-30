import React from 'react';
import styles from './CategoryDescriptions.module.css';

const categories = [
  {
    title: 'Web & Mobile Development',
    icon: '🌐',
    description: 'Master the art of creating beautiful, responsive websites and applications. Start with HTML and CSS fundamentals, learning semantic markup and modern layout techniques like Flexbox and CSS Grid. Progress to JavaScript to add interactivity and dynamic functionality to your web projects. This category covers the core technologies that power the modern web, from frontend frameworks to responsive design principles. Perfect for anyone looking to build user-facing applications and web experiences.',
  },
  {
    title: 'Intelligence & Data',
    icon: '🧠',
    description: 'Explore the rapidly evolving field of machine learning and data science. Learn how to process vast datasets, identify patterns, and build predictive models that drive intelligent systems. From supervised and unsupervised learning to feature engineering and model evaluation, this category introduces the algorithms and techniques reshaping how we extract insights from data. Ideal for those interested in AI, data analysis, and building systems that learn from experience.',
  },
  {
    title: 'Systems & Infrastructure',
    icon: '⚙️',
    description: 'Understand the foundations that keep computing systems running. Dive deep into operating systems, covering processes, memory management, scheduling, and resource allocation. Learn how kernels manage hardware, how virtualization works, and the principles behind efficient system design. This category is essential for anyone building robust, scalable systems or pursuing careers in DevOps, system administration, or infrastructure engineering.',
  },
  {
    title: 'Cybersecurity & Ethics',
    icon: '🔒',
    description: 'Protect systems and data in an increasingly connected world. Learn about common threats, vulnerabilities, and defense mechanisms that keep organizations secure. From encryption and firewalls to authentication and ethical hacking, this category covers both defensive strategies and the security principles you need to know. Essential for any developer or IT professional concerned with building secure applications and protecting sensitive information.',
  },
  {
    title: 'Software Engineering',
    icon: '🛠️',
    description: 'Learn industry-standard practices for building software collaboratively at scale. Master Agile methodologies, Scrum frameworks, and team coordination strategies used by top tech companies worldwide. Understand sprint planning, user stories, continuous integration, and the principles of iterative development. This category bridges the gap between coding skills and professional software development, preparing you for real-world team environments.',
  },
  {
    title: 'Theoretical Computer Science',
    icon: '📐',
    description: 'Build a strong foundation in the algorithms and data structures that power efficient software. Learn complexity analysis, common algorithms like sorting and searching, and fundamental data structures including arrays, linked lists, trees, and graphs. Understand Big O notation and how to design optimal solutions to computational problems. This category is crucial for technical interviews, competitive programming, and writing performant code.',
  },
  {
    title: 'Interactive Media & Specialized Apps',
    icon: '🎮',
    description: 'Bring your creative vision to life with game development and interactive applications. Using industry-standard tools like Unity, learn 2D and 3D game design, physics simulation, animation, and interactive storytelling. Build everything from simple 2D games to immersive 3D experiences. This category appeals to creative technologists and developers interested in entertainment, simulations, and innovative interactive experiences.',
  },
];

const CategoryDescriptions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Category Overviews</h2>
        <p className={styles.sectionSubtitle}>A detailed look into each area of study within the curriculum.</p>
      </div>
      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.title} className={styles.card}>
            <div className={styles.icon}>{category.icon}</div>
            <h3 className={styles.cardTitle}>{category.title}</h3>
            <p className={styles.cardDesc}>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDescriptions;