import React from 'react';
import MealItem from './MealItem';
import styles from './meal-grid.module.css';

function MealGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealGrid;
