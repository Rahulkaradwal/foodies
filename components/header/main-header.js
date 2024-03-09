import Image from 'next/image';
import React from 'react';
import logo from '@/public/images/logo.png';
import Link from 'next/link';
import styles from './header.module.css';
import NavLink from './navLink';

function Header() {
  return (
    <div className={styles['header-container']}>
      <Link href="/" className={styles['header-menu']}>
        <Image src={logo} alt="logo" priority />
        <p>NEXTLEVEL FOOD</p>
      </Link>
      <div className={styles['header-menu']}>
        <NavLink href="/meals"> Browse Meals </NavLink>
        <NavLink href="/community">Foodies Community </NavLink>
      </div>
    </div>
  );
}

export default Header;
