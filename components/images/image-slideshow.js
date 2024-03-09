'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import styles from './image.module.css';
const images = [
  { image: burgerImg, alt: 'Burger Image' },
  { image: curryImg, alt: 'Curry Image' },
  { image: dumplingsImg, alt: 'Dumpling Image' },
  { image: macncheeseImg, alt: 'Macncheese Image' },
  { image: pizzaImg, alt: 'Pizza Image' },
  { image: schnitzelImg, alt: 'Schnitzel Image' },
  { image: tomatoSaladImg, alt: 'Tomato Salad Image' },
];

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          src={image.image}
          alt={image.alt}
          key={index}
          className={index === currentIndex ? styles.active : ''}
        />
      ))}
    </div>
  );
}

export default SlideShow;
