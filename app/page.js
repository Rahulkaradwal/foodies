import Link from 'next/link';
import styles from './home.module.css';
import SlideShow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <SlideShow />
        </div>
        <div className={styles.headings}>
          <h1>NextLevel Food for NextLevel Foodies</h1>
          <p>Tase & share food from all over the world</p>
          <div className={styles.cta}>
            <Link data-testid="community" href="/community">Join the Community</Link>
            <Link data-testid="meals" href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to sharea their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and conect with
            other food lovers
          </p>
        </section>
        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
