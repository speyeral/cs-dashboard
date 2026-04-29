import React from 'react';
import styles from './CategoryDescriptions.module.css';

const categories = [
  {
    title: 'Web & Mobile Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  },
  {
    title: 'Intelligence & Data',
    description: 'Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.',
  },
  {
    title: 'Systems & Infrastructure',
    description: 'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.',
  },
  {
    title: 'Cybersecurity & Ethics',
    description: 'Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.',
  },
  {
    title: 'Software Engineering',
    description: 'Maecenas vitae orci vitae tellus feugiat eleifend. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.',
  },
  {
    title: 'Theoretical Computer Science',
    description: 'Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
  },
  {
    title: 'Interactive Media & Specialized Apps',
    description: 'Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla.',
  },
];

const CategoryDescriptions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Category Overviews</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.title} className={styles.card}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDescriptions;