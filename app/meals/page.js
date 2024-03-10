import React, { Suspense } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { getMeals } from '@/dataRequest/meals';
import MealGrid from '@/components/meals/MealGrid';

async function Meal() {
  const meals = await getMeals();

  return <MealGrid meals={meals} />;
}

// in nextjs we can create async component
function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and
          simple
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>fetching data</p>}>
          <Meal />
        </Suspense>
      </main>
    </>
  );
}

export default Meals;
