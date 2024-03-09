import Image from 'next/image';
import React from 'react';
import logo from '@/public/images/logo.png';
import Link from 'next/link';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles['header-container']}>
      <Link href="/" className={styles['header-menu']}>
        <Image src={logo} alt="logo" priority />
        <p>NEXTLEVEL FOOD</p>
      </Link>
      <div className={styles['header-menu']}>
        <Link className={styles.link} href="/meals">
          Browse Meals
        </Link>
        <Link className={styles.link} href="/community">
          Foodies Community
        </Link>
      </div>
    </div>
  );
}

export default Header;
